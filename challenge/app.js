(() => {
  const DATA = window.BIBLE_QUIZ_DATA;
  const app = document.getElementById('app');
  const navButtons = [...document.querySelectorAll('[data-nav]')];
  const levels = ['入门级','初级','进阶级','挑战级'];
  const letters = ['A','B','C','D'];
  const STORAGE = 'bibleQuizV2Progress';
  const settingsKey = 'bibleQuizV2Settings';
  let deferredPrompt = null;
  let session = null;

  const defaultProgress = { attempts: 0, correct: 0, completed: 0, streak: 0, lastDate: '', wrongIds: [], bestByLevel: {}, categoryStats: {} };
  const load = (key, fallback) => { try { return JSON.parse(localStorage.getItem(key)) || fallback; } catch { return fallback; } };
  const save = (key, val) => localStorage.setItem(key, JSON.stringify(val));
  let progress = {...defaultProgress, ...load(STORAGE, {})};
  let settings = {largeText:false, autoRead:false, ...load(settingsKey,{})};
  document.body.classList.toggle('large-text', settings.largeText);



  function getChineseVoice() {
    const voices = window.speechSynthesis ? speechSynthesis.getVoices() : [];
    return voices.find(v => /^zh-(CN|SG)/i.test(v.lang)) ||
      voices.find(v => /^zh/i.test(v.lang)) || null;
  }

  function speak(text) {
    if (!('speechSynthesis' in window)) {
      alert('这台装置的浏览器暂时不支持语音朗读。');
      return;
    }
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(String(text));
    utterance.lang = 'zh-CN';
    utterance.rate = 0.92;
    utterance.pitch = 1;
    const voice = getChineseVoice();
    if (voice) utterance.voice = voice;
    speechSynthesis.speak(utterance);
  }

  function questionSpeech(q) {
    return `第${session.index + 1}题。${q.q}`;
  }

  function optionsSpeech(q) {
    return q.options.map((option, i) => `${letters[i]}。${option}`).join('。');
  }

  function referenceSpeech(reference) {
    return String(reference)
      .replace(/(\d+):(\d+)[–—-](\d+)/g, '$1章$2至$3节')
      .replace(/(\d+):(\d+)/g, '$1章$2节')
      .replace(/；/g, '，以及')
      .replace(/[–—]/g, '至');
  }

  function explanationSpeech(q, correct) {
    return `${correct ? '答对了。' : '再学习一次。'}正确答案是${letters[q.answer]}，${q.options[q.answer]}。${q.explanation}。经文，${referenceSpeech(q.reference)}。生命反思，${q.reflection}`;
  }

  function allQuestions() { return [...DATA.questions, ...DATA.weekly.questions]; }
  function singaporeDateKey(date = new Date()) {
    return new Intl.DateTimeFormat('en-CA', {timeZone:'Asia/Singapore', year:'numeric', month:'2-digit', day:'2-digit'}).format(date);
  }
  function todayKey() { return singaporeDateKey(); }
  function singaporeDayNumber() {
    const [year, month, day] = todayKey().split('-').map(Number);
    return Math.floor(Date.UTC(year, month - 1, day) / 86400000);
  }
  function setActiveNav(name) { navButtons.forEach(b => b.classList.toggle('active', b.dataset.nav === name)); }
  function goto(name) { setActiveNav(name); window.scrollTo({top:0, behavior:'smooth'}); ({home:renderHome,learn:renderLearn,review:renderReview,progress:renderProgress}[name] || renderHome)(); }
  function sample(list, n) { return [...list].sort(() => Math.random() - .5).slice(0,n); }
  function esc(s) { return String(s).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }

  function renderHome() {
    session = null;
    const total = DATA.questions.length + DATA.weekly.questions.length;
    app.innerHTML = `
      <section class="hero">
        <div><small>华文圣经学习 · 每日成长</small><h1>从认识到活出<br>上帝的话</h1><p>按程度、书卷或主题学习；每题都有解释、经文出处与生命反思。</p></div>
        <div class="hero-stat"><strong>${progress.streak || 0}</strong><span>连续学习天数</span></div>
      </section>
      <div class="section-title"><div><h2>选择程度</h2><p>每次随机抽取 8 题</p></div><span>题库共 ${total} 题</span></div>
      <section class="grid">
        ${levels.map((l,i) => `<button class="card click-card" data-level="${l}"><span class="badge">${i+1}</span><h3>${l}</h3><p>${['人物、故事与基本事实','事件、地点与书卷认识','经文意义、背景与教义','救赎历史与综合理解'][i]}</p><div class="mini-stat">最佳成绩：${progress.bestByLevel[l] || 0}%</div></button>`).join('')}
      </section>
      <div class="section-title"><div><h2>特色学习</h2><p>Version 2 新功能</p></div></div>
      <section class="feature-grid">
        <button class="card click-card feature-card" data-feature="daily"><span class="symbol">☀</span><div><h3>每日一题</h3><p>今天用一分钟学习圣经</p></div></button>
        <button class="card click-card feature-card" data-feature="weekly"><span class="symbol">✦</span><div><h3>讲道问答示范</h3><p>${esc(DATA.weekly.title)}</p></div></button>
        <button class="card click-card feature-card" data-feature="learn"><span class="symbol">▦</span><div><h3>按书卷与主题</h3><p>自选内容进行学习</p></div></button>
      </section>`;
    app.querySelectorAll('[data-level]').forEach(b => b.onclick = () => startQuiz(sample(DATA.questions.filter(q=>q.level===b.dataset.level),8), b.dataset.level));
    app.querySelector('[data-feature="daily"]').onclick = startDaily;
    app.querySelector('[data-feature="weekly"]').onclick = () => startQuiz(DATA.weekly.questions, '本周讲道');
    app.querySelector('[data-feature="learn"]').onclick = () => goto('learn');
  }

  function renderLearn() {
    session = null;
    const books = [...new Set(DATA.questions.map(q=>q.book))].sort((a,b)=>a.localeCompare(b,'zh-CN'));
    const categories = [...new Set(DATA.questions.map(q=>q.category))].sort((a,b)=>a.localeCompare(b,'zh-CN'));
    app.innerHTML = `
      <div class="section-title"><div><h2>分类学习</h2><p>按你的需要建立一次 5–10 题练习</p></div></div>
      <section class="card">
        <div class="filter-panel">
          <label>程度<select id="fLevel"><option value="">全部程度</option>${levels.map(x=>`<option>${x}</option>`).join('')}</select></label>
          <label>圣经书卷<select id="fBook"><option value="">全部书卷</option>${books.map(x=>`<option>${x}</option>`).join('')}</select></label>
          <label>学习主题<select id="fCat"><option value="">全部主题</option>${categories.map(x=>`<option>${x}</option>`).join('')}</select></label>
        </div>
        <div id="matchText" class="feedback">请选择条件，或直接开始随机综合练习。</div>
        <div class="action-row"><button id="start5" class="primary-btn">开始 5 题</button><button id="start10" class="ghost-btn">开始 10 题</button></div>
      </section>`;
    const selects = ['fLevel','fBook','fCat'].map(id=>document.getElementById(id));
    const getFiltered = () => DATA.questions.filter(q => (!selects[0].value||q.level===selects[0].value)&&(!selects[1].value||q.book===selects[1].value)&&(!selects[2].value||q.category===selects[2].value));
    const update = () => document.getElementById('matchText').textContent = `找到 ${getFiltered().length} 题符合条件。`;
    selects.forEach(s=>s.onchange=update); update();
    document.getElementById('start5').onclick=()=>startQuiz(sample(getFiltered(),5),'分类练习');
    document.getElementById('start10').onclick=()=>startQuiz(sample(getFiltered(),10),'分类练习');
  }

  function startDaily() {
    const list = DATA.questions;
    const epoch = singaporeDayNumber();
    startQuiz([list[epoch % list.length]], '每日一题');
  }

  function startQuiz(questions, label) {
    if (!questions.length) { alert('目前没有符合条件的题目，请更改选择。'); return; }
    session = {questions, label, index:0, score:0, answered:false, answers:[]};
    renderQuestion();
  }

  function renderQuestion() {
    const q = session.questions[session.index];
    const pct = Math.round(session.index/session.questions.length*100);
    app.innerHTML = `
      <div class="quiz-header"><div><strong>${esc(session.label)}</strong><div>${session.index+1} / ${session.questions.length}</div></div><button class="soft-btn" id="quit">退出</button></div>
      <div class="progress-bar"><span style="width:${pct}%"></span></div>
      <section class="card question-card">
        <div class="question-meta"><span>${esc(q.level)}</span><span>·</span><span>${esc(q.book)}</span><span>·</span><span>${esc(q.category)}</span></div>
        <div class="question-title-row"><h2>${esc(q.q)}</h2><button class="audio-btn" id="readQuestion" type="button" aria-label="朗读题目">🔊 朗读题目</button></div>
        <div class="audio-row"><button class="audio-btn secondary" id="readOptions" type="button">🔊 朗读选项</button><span class="audio-help">华文阅读较慢，也可以用听的。</span></div>
        <div class="options">${q.options.map((o,i)=>`<button class="option" data-answer="${i}"><span class="letter">${letters[i]}</span><span>${esc(o)}</span></button>`).join('')}</div>
        <div id="feedback"></div>
      </section>`;
    document.getElementById('quit').onclick=()=>{ if('speechSynthesis' in window) speechSynthesis.cancel(); goto('home'); };
    document.getElementById('readQuestion').onclick=()=>speak(questionSpeech(q));
    document.getElementById('readOptions').onclick=()=>speak(optionsSpeech(q));
    if (settings.autoRead) setTimeout(()=>speak(`${questionSpeech(q)}。${optionsSpeech(q)}`), 250);
    app.querySelectorAll('[data-answer]').forEach(b=>b.onclick=()=>answerQuestion(Number(b.dataset.answer)));
  }

  function answerQuestion(chosen) {
    if (session.answered) return;
    session.answered = true;
    const q = session.questions[session.index];
    const correct = chosen === q.answer;
    if (correct) session.score++;
    session.answers.push({id:q.id, correct});
    app.querySelectorAll('[data-answer]').forEach((b,i)=>{ b.disabled=true; if(i===q.answer)b.classList.add('correct'); else if(i===chosen)b.classList.add('wrong'); });
    const f = document.getElementById('feedback');
    f.innerHTML = `<div class="feedback ${correct?'good':'bad'}"><h3>${correct?'答对了！':'再学习一次'}</h3><p><strong>正确答案：</strong>${letters[q.answer]}. ${esc(q.options[q.answer])}</p><p>${esc(q.explanation)}</p><p><strong>经文：</strong>${esc(q.reference)}</p><p class="reflection"><strong>生命反思：</strong>${esc(q.reflection)}</p><div class="action-row"><button id="readExplanation" class="audio-btn" type="button">🔊 朗读解释</button><button id="next" class="primary-btn">${session.index===session.questions.length-1?'查看成绩':'下一题'}</button></div></div>`;
    document.getElementById('readExplanation').onclick=()=>speak(explanationSpeech(q, correct));
    if (settings.autoRead) setTimeout(()=>speak(explanationSpeech(q, correct)), 200);
    document.getElementById('next').onclick=()=>{ if('speechSynthesis' in window) speechSynthesis.cancel(); session.index++; session.answered=false; session.index>=session.questions.length ? finishQuiz() : renderQuestion(); };
  }

  function finishQuiz() {
    const total = session.questions.length;
    const percent = Math.round(session.score/total*100);
    progress.attempts += total; progress.correct += session.score; progress.completed++;
    const today = todayKey();
    if (progress.lastDate !== today) {
      const yesterday = singaporeDateKey(new Date(Date.now()-86400000));
      progress.streak = progress.lastDate === yesterday ? (progress.streak||0)+1 : 1;
      progress.lastDate = today;
    }
    const wrong = new Set(progress.wrongIds || []);
    session.answers.forEach(a=>a.correct?wrong.delete(a.id):wrong.add(a.id));
    progress.wrongIds=[...wrong];
    if(levels.includes(session.label)) progress.bestByLevel[session.label]=Math.max(progress.bestByLevel[session.label]||0,percent);
    session.questions.forEach((q,i)=>{
      const s=progress.categoryStats[q.category]||{attempts:0,correct:0}; s.attempts++; if(session.answers[i].correct)s.correct++; progress.categoryStats[q.category]=s;
    });
    save(STORAGE, progress);
    app.innerHTML = `<section class="card empty"><div class="result-score">${percent}%</div><h2>${percent>=80?'很好！继续在真道上成长。':percent>=60?'不错！再复习一次会更熟练。':'别灰心，错题也是学习的机会。'}</h2><p>你答对 ${session.score} / ${total} 题。</p><div class="action-row" style="justify-content:center"><button id="again" class="primary-btn">再试一次</button><button id="review" class="ghost-btn">复习错题</button><button id="home" class="soft-btn">回到首页</button></div></section>`;
    document.getElementById('again').onclick=()=>startQuiz(sample(session.questions,session.questions.length),session.label);
    document.getElementById('review').onclick=()=>goto('review');
    document.getElementById('home').onclick=()=>goto('home');
  }

  function renderReview() {
    session = null;
    const ids = new Set(progress.wrongIds || []);
    const wrong = allQuestions().filter(q=>ids.has(q.id));
    app.innerHTML = wrong.length ? `
      <div class="section-title"><div><h2>错题复习</h2><p>目前共有 ${wrong.length} 题需要再学习</p></div></div>
      <section class="card"><p>完成复习并答对后，题目会自动从错题列表移除。</p><div class="action-row"><button id="review5" class="primary-btn">复习 ${Math.min(5,wrong.length)} 题</button><button id="reviewAll" class="ghost-btn">全部复习</button></div></section>` : `
      <section class="card empty"><div style="font-size:4rem">✓</div><h2>目前没有错题</h2><p>继续学习，建立稳定的圣经知识。</p><button id="goLearn" class="primary-btn">开始学习</button></section>`;
    if(wrong.length){ document.getElementById('review5').onclick=()=>startQuiz(sample(wrong,5),'错题复习'); document.getElementById('reviewAll').onclick=()=>startQuiz(wrong,'错题复习'); }
    else document.getElementById('goLearn').onclick=()=>goto('learn');
  }

  function renderProgress() {
    session = null;
    const accuracy = progress.attempts ? Math.round(progress.correct/progress.attempts*100) : 0;
    const rows = Object.entries(progress.categoryStats||{}).sort((a,b)=>b[1].attempts-a[1].attempts).slice(0,8);
    app.innerHTML = `
      <div class="section-title"><div><h2>我的学习进度</h2><p>资料只保存在这台装置的浏览器</p></div></div>
      <section class="stat-grid">
        <div class="card stat-card"><span>已作答</span><strong>${progress.attempts}</strong><small>题</small></div>
        <div class="card stat-card"><span>正确率</span><strong>${accuracy}%</strong></div>
        <div class="card stat-card"><span>完成练习</span><strong>${progress.completed}</strong><small>次</small></div>
        <div class="card stat-card"><span>连续学习</span><strong>${progress.streak}</strong><small>天</small></div>
      </section>
      <div class="section-title"><div><h2>主题表现</h2><p>帮助你发现需要加强的范围</p></div></div>
      <section class="card">${rows.length?`<div class="chart-list">${rows.map(([name,s])=>{const p=Math.round(s.correct/s.attempts*100);return `<div class="chart-row"><span>${esc(name)}</span><div class="track"><div class="fill" style="width:${p}%"></div></div><strong>${p}%</strong></div>`}).join('')}</div>`:'<p>完成一些练习后，这里会显示你的主题表现。</p>'}<div class="action-row"><button id="reset" class="soft-btn">清除本机进度</button></div></section>`;
    document.getElementById('reset').onclick=()=>{ if(confirm('确定要清除这台装置的学习进度吗？')){progress={...defaultProgress};save(STORAGE,progress);renderProgress();} };
  }

  navButtons.forEach(b=>b.onclick=()=>goto(b.dataset.nav));
  document.querySelector('[data-action="home"]').onclick=()=>goto('home');
  document.getElementById('fontToggle').onclick=()=>{ settings.largeText=!settings.largeText; document.body.classList.toggle('large-text',settings.largeText); save(settingsKey,settings); };
  const autoReadToggle = document.getElementById('autoReadToggle');
  const updateAutoReadLabel = () => autoReadToggle.textContent = `自动朗读：${settings.autoRead ? '开' : '关'}`;
  updateAutoReadLabel();
  autoReadToggle.onclick=()=>{ settings.autoRead=!settings.autoRead; if(!settings.autoRead && 'speechSynthesis' in window) speechSynthesis.cancel(); save(settingsKey,settings); updateAutoReadLabel(); };
  window.addEventListener('beforeinstallprompt', e=>{e.preventDefault();deferredPrompt=e;document.getElementById('installBtn').classList.remove('hidden');});
  document.getElementById('installBtn').onclick=async()=>{if(!deferredPrompt)return;deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;document.getElementById('installBtn').classList.add('hidden');};
  if('serviceWorker' in navigator) window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));
  renderHome();
})();
