const questions = [
  {id:1,level:"basic",category:"圣经人物",q:"谁带领以色列人离开埃及？",a:["亚伯拉罕","摩西","约书亚","大卫"],c:1,e:"上帝呼召摩西带领以色列人脱离埃及的奴役。",r:"出埃及记 3:7–10"},
  {id:2,level:"basic",category:"耶稣生平",q:"耶稣出生在哪里？",a:["拿撒勒","耶路撒冷","伯利恒","迦百农"],c:2,e:"耶稣按照先知的预言出生在犹太的伯利恒。",r:"马太福音 2:1；弥迦书 5:2"},
  {id:3,level:"basic",category:"圣经故事",q:"谁建造方舟，预备躲避洪水？",a:["挪亚","以撒","约瑟","撒母耳"],c:0,e:"挪亚听从上帝的吩咐，凭信心建造方舟。",r:"创世记 6:13–22"},
  {id:4,level:"basic",category:"圣经书卷",q:"圣经第一卷书是什么？",a:["出埃及记","诗篇","创世记","马太福音"],c:2,e:"创世记记载创造、堕落、洪水和族长的故事。",r:"创世记 1:1"},
  {id:5,level:"basic",category:"神迹",q:"大卫用什么击败歌利亚？",a:["长矛","弓箭","机弦和石子","刀"],c:2,e:"大卫倚靠上帝，用机弦甩石击倒歌利亚。",r:"撒母耳记上 17:40–50"},
  {id:6,level:"basic",category:"门徒",q:"耶稣拣选了多少位使徒？",a:["7位","10位","12位","40位"],c:2,e:"耶稣设立十二使徒，与他们同在并差遣他们传道。",r:"马可福音 3:13–19"},
  {id:7,level:"basic",category:"圣经人物",q:"谁被大鱼吞下，在鱼腹中三日三夜？",a:["约拿","以利亚","以利沙","阿摩司"],c:0,e:"约拿逃避上帝的呼召，后来在鱼腹中祷告。",r:"约拿书 1:17–2:1"},
  {id:8,level:"basic",category:"耶稣生平",q:"耶稣的母亲是谁？",a:["马大","马利亚","以利沙伯","抹大拉的马利亚"],c:1,e:"天使向马利亚宣告，她将从圣灵怀孕生下耶稣。",r:"路加福音 1:26–35"},
  {id:9,level:"basic",category:"圣经地点",q:"上帝在哪里把十诫赐给摩西？",a:["橄榄山","锡安山","西奈山","迦密山"],c:2,e:"以色列人来到西奈山，上帝在那里与他们立约。",r:"出埃及记 19:1–20:17"},
  {id:10,level:"basic",category:"复活",q:"耶稣在受死后的第几天复活？",a:["第二天","第三天","第七天","第四十天"],c:1,e:"耶稣照圣经所说，第三天从死里复活。",r:"哥林多前书 15:3–4"},

  {id:11,level:"beginner",category:"族长",q:"亚伯拉罕年老时所生、承受应许的儿子是谁？",a:["以实玛利","以撒","雅各","约瑟"],c:1,e:"以撒是上帝应许赐给亚伯拉罕和撒拉的儿子。",r:"创世记 21:1–3"},
  {id:12,level:"beginner",category:"旧约历史",q:"谁接续摩西带领以色列人进入应许之地？",a:["亚伦","约书亚","基甸","扫罗"],c:1,e:"摩西死后，上帝坚固约书亚，吩咐他带领百姓过约旦河。",r:"约书亚记 1:1–6"},
  {id:13,level:"beginner",category:"先知",q:"哪位先知在迦密山与巴力的先知对决？",a:["以赛亚","耶利米","以利亚","但以理"],c:2,e:"以利亚祷告，上帝降火显明自己是真神。",r:"列王纪上 18:20–39"},
  {id:14,level:"beginner",category:"新约人物",q:"谁在大马士革路上遇见复活的耶稣？",a:["彼得","保罗","巴拿巴","司提反"],c:1,e:"扫罗在路上遇见耶稣，后来成为使徒保罗。",r:"使徒行传 9:1–9"},
  {id:15,level:"beginner",category:"耶稣比喻",q:"好撒玛利亚人的比喻主要教导什么？",a:["如何积蓄财富","爱邻舍并怜悯有需要的人","避免旅行","只帮助认识的人"],c:1,e:"耶稣指出，真正的邻舍是向受伤者施怜悯的人。",r:"路加福音 10:25–37"},
  {id:16,level:"beginner",category:"诗篇",q:"诗篇23篇用什么形象描写上帝？",a:["君王","牧者","审判官","建筑师"],c:1,e:"大卫宣告“耶和华是我的牧者”，表达上帝的引导、供应和保护。",r:"诗篇 23:1–4"},
  {id:17,level:"beginner",category:"耶稣神迹",q:"耶稣用五饼二鱼使多少男人吃饱？",a:["约五百人","约一千人","约三千人","约五千人"],c:3,e:"除了妇女和孩子，吃的人约有五千。",r:"马太福音 14:13–21"},
  {id:18,level:"beginner",category:"旧约人物",q:"谁因忠心祷告而被丢进狮子坑？",a:["但以理","尼希米","以斯拉","末底改"],c:0,e:"但以理仍然向上帝祷告，因此被投入狮子坑；上帝却保护他。",r:"但以理书 6:10–23"},
  {id:19,level:"beginner",category:"圣经书卷",q:"四福音书中，哪一卷最先记载耶稣的家谱？",a:["马太福音","马可福音","路加福音","约翰福音"],c:0,e:"马太福音开篇以耶稣基督的家谱开始，强调他是亚伯拉罕和大卫的后裔。",r:"马太福音 1:1–17"},
  {id:20,level:"beginner",category:"初期教会",q:"五旬节圣灵降临时，门徒开始做什么？",a:["建造圣殿","说起别国的话，宣讲上帝的大作为","离开耶路撒冷","选立君王"],c:1,e:"圣灵充满门徒，使他们用各地语言传讲上帝的大作为。",r:"使徒行传 2:1–11"},

  {id:21,level:"intermediate",category:"旧约历史",q:"以色列王国分裂后，北国通常称为什么？",a:["犹大","以色列","以东","亚兰"],c:1,e:"所罗门之后王国分裂，北国称以色列，南国称犹大。",r:"列王纪上 12:16–20"},
  {id:22,level:"intermediate",category:"新约书信",q:"“因信称义”在罗马书中主要强调什么？",a:["人靠律法行为赚取救恩","人因信耶稣基督被上帝称为义","只有犹太人能得救","信心不需要恩典"],c:1,e:"保罗说明，所有人都犯了罪，却能因上帝的恩典、借着信基督白白称义。",r:"罗马书 3:21–26"},
  {id:23,level:"intermediate",category:"耶稣教导",q:"登山宝训中的“虚心的人有福了”是指什么？",a:["缺乏自信的人","承认自己在属灵上贫乏、需要上帝的人","没有财产的人","不愿说话的人"],c:1,e:"“虚心”指认识自己的属灵贫乏，谦卑倚靠上帝。",r:"马太福音 5:3"},
  {id:24,level:"intermediate",category:"旧约律法",q:"赎罪日中，大祭司多久进入至圣所一次？",a:["每天一次","每周一次","每月一次","每年一次"],c:3,e:"大祭司每年一次带着血进入至圣所，为自己和百姓赎罪。",r:"利未记 16章；希伯来书 9:7"},
  {id:25,level:"intermediate",category:"圣经背景",q:"撒玛利亚人与犹太人在耶稣时代关系紧张，约翰福音如何说明？",a:["他们共同敬拜","犹太人和撒玛利亚人没有来往","他们属于同一支派","撒玛利亚人管理圣殿"],c:1,e:"约翰特别注明双方没有来往，使耶稣与撒玛利亚妇人的对话更显突破隔阂。",r:"约翰福音 4:9"},
  {id:26,level:"intermediate",category:"基督论",q:"约翰福音称耶稣为“道”，最主要表达什么？",a:["耶稣只是一位教师","耶稣是上帝永恒的自我启示，并且成了肉身","耶稣只在受洗后存在","耶稣是一位天使"],c:1,e:"“道”太初与上帝同在，道就是上帝，后来成了肉身住在人中间。",r:"约翰福音 1:1–14"},
  {id:27,level:"intermediate",category:"圣灵",q:"加拉太书所说的“圣灵的果子”共有几方面？",a:["5方面","7方面","9方面","12方面"],c:2,e:"保罗列出仁爱、喜乐、和平等九方面，描述圣灵在人生命中的工作。",r:"加拉太书 5:22–23"},
  {id:28,level:"intermediate",category:"旧约人物",q:"尼希米回耶路撒冷最主要完成什么工作？",a:["重建圣殿","重建城墙","建立王宫","编写律法"],c:1,e:"尼希米带领百姓在敌对中重建耶路撒冷城墙。",r:"尼希米记 2:17–20；6:15"},
  {id:29,level:"intermediate",category:"救赎历史",q:"逾越节羔羊的血在出埃及记中有什么作用？",a:["使庄稼丰收","作为记号，使审判越过以色列人的家","医治疾病","洁净圣殿"],c:1,e:"羔羊的血涂在门框上，成为记号，使灭命的审判越过那家。",r:"出埃及记 12:7–13"},
  {id:30,level:"intermediate",category:"教会生活",q:"哥林多前书12章用什么比喻说明教会中恩赐不同却彼此需要？",a:["葡萄树","羊群","身体","房屋"],c:2,e:"教会像一个身体，有许多肢体；各肢体不同，却同属一个身体。",r:"哥林多前书 12:12–27"},

  {id:31,level:"advanced",category:"圣经神学",q:"创世记12章中，上帝呼召亚伯兰并应许赐福，最终目的包括什么？",a:["只使亚伯兰个人富足","使地上的万族因他得福","建立巴别城","废除所有民族"],c:1,e:"亚伯拉罕之约不只关乎个人和后裔，也指向上帝借他的后裔赐福万族。",r:"创世记 12:1–3；加拉太书 3:8,16",f:"反思：上帝赐福我们，也呼召我们成为别人的祝福。"},
  {id:32,level:"advanced",category:"基督论",q:"希伯来书说耶稣照着哪一位的等次永远为祭司？",a:["亚伦","麦基洗德","撒督","以利"],c:1,e:"希伯来书引用诗篇110篇，说明基督祭司职分超越利未体系，并且永远长存。",r:"希伯来书 7:15–17；诗篇 110:4"},
  {id:33,level:"advanced",category:"先知书",q:"耶利米书31章所应许的新约，最突出的特点之一是什么？",a:["律法只刻在石版上","上帝把律法写在人的心上","不再需要认识上帝","只与君王立约"],c:1,e:"新约应许包括内在更新、真正认识上帝和罪得赦免。",r:"耶利米书 31:31–34",f:"反思：信仰不只是外在规条，也包括上帝更新人的内心。"},
  {id:34,level:"advanced",category:"保罗书信",q:"腓立比书2:6–11所描述的基督道路是怎样的？",a:["先升高后降卑","从自我高举到掌权","甘愿降卑顺服至死，随后被上帝升为至高","拒绝成为人的样式"],c:2,e:"这段经文描写基督虚己、取奴仆形象、顺服至死，然后被上帝高举。",r:"腓立比书 2:6–11"},
  {id:35,level:"advanced",category:"启示文学",q:"启示录中的“羔羊”首先强调耶稣哪一方面？",a:["政治军事领袖","借牺牲得胜并施行救赎的弥赛亚","旧约祭司亚伦","普通殉道者"],c:1,e:"启示录以被杀却站立的羔羊描写基督，他借牺牲完成救赎并得胜。",r:"启示录 5:5–10"},
  {id:36,level:"advanced",category:"旧约神学",q:"申命记6章的“示玛”首先呼召以色列人怎样回应上帝？",a:["只在节期敬拜","尽心、尽性、尽力爱独一的上帝","远离家庭责任","只背诵律法"],c:1,e:"“以色列啊，你要听”把独一上帝的信仰与全人爱上帝连在一起。",r:"申命记 6:4–9"},
  {id:37,level:"advanced",category:"福音书",q:"马可福音中，彼得认耶稣为基督之后，耶稣立即强调什么？",a:["门徒将马上掌权","人子必须受苦、被杀并复活","彼得将成为君王","罗马帝国会结束"],c:1,e:"耶稣纠正门徒对弥赛亚的政治期待，指出十字架是他使命的核心。",r:"马可福音 8:27–35"},
  {id:38,level:"advanced",category:"救恩论",q:"以弗所书2:8–10如何描述恩典、信心与善行的关系？",a:["善行产生恩典","人靠信心得救，是上帝的恩赐；得救后为行善而活","信心和行为都不重要","善行完全与基督徒无关"],c:1,e:"救恩不是出于人的行为，而是上帝的恩典；但蒙恩的人被重新创造，为要行上帝预备的善事。",r:"以弗所书 2:8–10"},
  {id:39,level:"advanced",category:"圣经背景",q:"第二圣殿时期，法利赛人较重视哪一方面？",a:["完全拒绝律法","律法及其生活应用，并相信复活","只接受罗马宗教","否认天使和复活"],c:1,e:"新约资料显示法利赛人重视律法传统，并与撒都该人在复活等教义上有分歧。",r:"使徒行传 23:6–8"},
  {id:40,level:"advanced",category:"教会论",q:"彼得前书2章称信徒为“有君尊的祭司”，主要说明什么？",a:["每位信徒都要成为旧约大祭司","信徒群体蒙召亲近上帝，并宣扬他的美德","教会应建立政治王国","只有领袖能服事上帝"],c:1,e:"这称呼描述整个信徒群体的身份与使命：属上帝，并宣扬那召他们出黑暗者的美德。",r:"彼得前书 2:9–10",f:"反思：你本周可以怎样用言语和行动宣扬上帝的美德？"}
];

const levelInfo = {
  basic:{name:"入门级",desc:"人物、故事与基本事实",no:"1"},
  beginner:{name:"初级",desc:"事件、地点与书卷认识",no:"2"},
  intermediate:{name:"进阶级",desc:"经文意义、背景与教义",no:"3"},
  advanced:{name:"挑战级",desc:"神学、救赎历史与综合理解",no:"4"}
};

const $ = (id) => document.getElementById(id);
const screens = ["homeScreen","quizScreen","resultScreen","progressScreen"];
let state = {mode:"level",level:"basic",list:[],index:0,score:0,selected:false};
let data = JSON.parse(localStorage.getItem("bibleQuizData") || '{"wrong":[],"best":{},"answered":0,"correct":0,"streak":0,"lastDate":""}');

function save(){ localStorage.setItem("bibleQuizData", JSON.stringify(data)); }
function show(id){ screens.forEach(s => $(s).classList.toggle("active", s === id)); window.scrollTo({top:0,behavior:"smooth"}); }
function shuffle(arr){ return [...arr].sort(() => Math.random() - 0.5); }

function renderHome(){
  $("levelGrid").innerHTML = Object.entries(levelInfo).map(([key,v]) => `
    <button class="level-card" data-level="${key}">
      <span class="level-no">${v.no}</span><h3>${v.name}</h3><p>${v.desc}</p>
      <span class="best">最佳成绩：${data.best[key] ?? 0}%</span>
    </button>`).join("");
  document.querySelectorAll(".level-card").forEach(btn => btn.onclick = () => startLevel(btn.dataset.level));
  $("wrongCountLabel").textContent = data.wrong.length ? `${data.wrong.length}题等待复习` : "目前没有错题";
  $("streakCount").textContent = data.streak || 0;
}

function updateStreak(){
  const today = new Date().toISOString().slice(0,10);
  if(data.lastDate === today) return;
  const yesterday = new Date(Date.now()-86400000).toISOString().slice(0,10);
  data.streak = data.lastDate === yesterday ? (data.streak||0)+1 : 1;
  data.lastDate = today;
  save();
}

function startLevel(level){
  state = {mode:"level",level,list:shuffle(questions.filter(q=>q.level===level)),index:0,score:0,selected:false};
  updateStreak(); show("quizScreen"); renderQuestion();
}
function startDaily(){
  const dayIndex = Math.floor(Date.now()/86400000) % questions.length;
  const q = questions[dayIndex];
  state = {mode:"daily",level:q.level,list:[q],index:0,score:0,selected:false};
  updateStreak(); show("quizScreen"); renderQuestion();
}
function startReview(){
  if(!data.wrong.length){ alert("目前没有错题。完成挑战后，答错的题目会自动来到这里。"); return; }
  const list = shuffle(questions.filter(q=>data.wrong.includes(q.id)));
  state = {mode:"review",level:"review",list,index:0,score:0,selected:false};
  updateStreak(); show("quizScreen"); renderQuestion();
}

function renderQuestion(){
  state.selected = false;
  const q = state.list[state.index];
  $("quizLevel").textContent = state.mode === "review" ? "错题复习" : state.mode === "daily" ? "每日一题" : levelInfo[q.level].name;
  $("questionCounter").textContent = `${state.index+1} / ${state.list.length}`;
  $("progressBar").style.width = `${(state.index/state.list.length)*100}%`;
  $("questionCategory").textContent = q.category;
  $("questionText").textContent = q.q;
  $("answers").innerHTML = q.a.map((ans,i)=>`<button class="answer-btn" data-i="${i}"><span class="answer-letter">${String.fromCharCode(65+i)}</span><span>${ans}</span></button>`).join("");
  document.querySelectorAll(".answer-btn").forEach(btn=>btn.onclick=()=>answer(Number(btn.dataset.i)));
  $("explanationBox").classList.add("hidden");
}

function answer(choice){
  if(state.selected) return;
  state.selected = true;
  const q = state.list[state.index];
  const correct = choice === q.c;
  data.answered++;
  if(correct){
    state.score++; data.correct++;
    data.wrong = data.wrong.filter(id=>id!==q.id);
  } else if(!data.wrong.includes(q.id)) data.wrong.push(q.id);
  save();
  document.querySelectorAll(".answer-btn").forEach((btn,i)=>{
    btn.disabled=true;
    if(i===q.c) btn.classList.add("correct");
    if(i===choice && !correct) btn.classList.add("wrong");
  });
  $("resultTitle").textContent = correct ? "✅ 回答正确！" : `❌ 正确答案是 ${String.fromCharCode(65+q.c)}. ${q.a[q.c]}`;
  $("explanationText").textContent = q.e;
  $("referenceText").textContent = q.r;
  $("reflectionText").textContent = q.f || "";
  $("reflectionText").classList.toggle("hidden", !q.f);
  $("nextBtn").textContent = state.index === state.list.length-1 ? "查看成绩" : "下一题";
  $("explanationBox").classList.remove("hidden");
  $("explanationBox").scrollIntoView({behavior:"smooth",block:"nearest"});
}

function next(){
  if(state.index < state.list.length-1){ state.index++; renderQuestion(); }
  else finish();
}
function finish(){
  const pct = Math.round(state.score/state.list.length*100);
  if(state.mode === "level"){
    data.best[state.level] = Math.max(data.best[state.level]||0,pct); save();
  }
  $("scoreValue").textContent = `${pct}%`;
  $("scoreDetail").textContent = `你答对了 ${state.score} / ${state.list.length} 题。`;
  let heading="继续加油！", msg="每一次学习都帮助我们更熟悉上帝的话。可以先复习错题，再来挑战。";
  if(pct>=90){ heading="非常出色！"; msg="你对圣经内容掌握得很好。不要只停在知识，也让上帝的话进入生活。"; }
  else if(pct>=70){ heading="做得很好！"; msg="你的基础很稳。复习几道错题，就能更进一步。"; }
  else if(pct>=50){ heading="不错的开始！"; msg="慢慢学习，不必急。查看解释和经文出处，会比只记答案更有帮助。"; }
  $("resultHeading").textContent=heading; $("resultMessage").textContent=msg;
  show("resultScreen");
}

function renderProgress(){
  const overall = data.answered ? Math.round(data.correct/data.answered*100) : 0;
  const cards = [
    ["已完成题数",data.answered],["整体正确率",`${overall}%`],["待复习错题",data.wrong.length],["连续学习",`${data.streak||0}天`]
  ];
  $("statsGrid").innerHTML = cards.map(c=>`<div class="stat-card"><span>${c[0]}</span><strong>${c[1]}</strong></div>`).join("");
  $("progressAdvice").textContent = data.wrong.length ? `你有 ${data.wrong.length} 道错题。建议先完成“错题复习”，并打开经文再次阅读上下文。` : data.answered ? "目前没有错题。可以尝试更高程度，或每天完成一题保持学习习惯。" : "你还没有开始作答。建议先从入门级开始，每天完成几题。";
  show("progressScreen");
}

function speak(){
  const q = state.list[state.index];
  if(!("speechSynthesis" in window)){ alert("这台装置暂不支持朗读功能。"); return; }
  speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(`${q.q}。选项A，${q.a[0]}。选项B，${q.a[1]}。选项C，${q.a[2]}。选项D，${q.a[3]}。`);
  utter.lang = "zh-CN"; utter.rate = .88; speechSynthesis.speak(utter);
}

$("dailyBtn").onclick=startDaily;
$("reviewBtn").onclick=startReview;
$("progressBtn").onclick=renderProgress;
$("backBtn").onclick=()=>{ if(confirm("确定要离开这次挑战吗？")){ renderHome(); show("homeScreen"); } };
$("nextBtn").onclick=next;
$("retryBtn").onclick=()=> state.mode === "daily" ? startDaily() : state.mode === "review" ? startReview() : startLevel(state.level);
$("resultHomeBtn").onclick=()=>{ renderHome(); show("homeScreen"); };
$("progressBackBtn").onclick=()=>{ renderHome(); show("homeScreen"); };
$("speakBtn").onclick=speak;
$("seniorToggle").onclick=()=>{
  const on = document.body.classList.toggle("senior");
  $("seniorToggle").setAttribute("aria-pressed",on); $("seniorToggle").textContent = on ? "恢复普通字体" : "长者大字模式";
  localStorage.setItem("bibleQuizSenior",on?"1":"0");
};
if(localStorage.getItem("bibleQuizSenior") === "1"){ document.body.classList.add("senior"); $("seniorToggle").textContent="恢复普通字体"; }
renderHome();
