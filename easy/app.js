const questions = [
  {id:1,level:"basic",category:"圣经人物",q:"谁带领以色列人离开埃及？",a:["亚伯拉罕","摩西","约书亚","大卫"],c:1,e:"上帝呼召摩西带领以色列人脱离埃及的奴役。",r:"出埃及记 3:7–10"},
  {id:2,level:"basic",category:"耶稣生平",q:"耶稣出生在哪里？",a:["拿撒勒","耶路撒冷","伯利恒","迦百农"],c:2,e:"耶稣按照先知的预言出生在犹太的伯利恒。",r:"马太福音 2:1；弥迦书 5:2"},
  {id:3,level:"basic",category:"圣经故事",q:"谁建造方舟，预备躲避洪水？",a:["挪亚","以撒","约瑟","撒母耳"],c:0,e:"挪亚听从上帝的吩咐，凭信心建造方舟。",r:"创世记 6:13–22"},
  {id:4,level:"basic",category:"圣经书卷",q:"圣经第一卷书是什么？",a:["出埃及记","诗篇","创世记","马太福音"],c:2,e:"创世记记载创造、堕落、洪水和族长的故事。",r:"创世记 1:1"},
  {id:5,level:"basic",category:"旧约故事",q:"大卫用什么击倒歌利亚？",a:["长矛","弓箭","机弦和石子","刀"],c:2,e:"大卫倚靠上帝，用机弦甩出石子，击倒歌利亚。",r:"撒母耳记上 17:40–50"},
  {id:6,level:"basic",category:"门徒",q:"耶稣拣选了多少位使徒？",a:["7位","10位","12位","40位"],c:2,e:"耶稣设立十二使徒，与他们同在并差遣他们传道。",r:"马可福音 3:13–19"},
  {id:7,level:"basic",category:"圣经人物",q:"谁被大鱼吞下，在鱼腹中三日三夜？",a:["约拿","以利亚","以利沙","阿摩司"],c:0,e:"约拿逃避上帝的呼召，后来在鱼腹中祷告。",r:"约拿书 1:17–2:1"},
  {id:8,level:"basic",category:"耶稣生平",q:"耶稣的母亲是谁？",a:["马大","马利亚","以利沙伯","抹大拉的马利亚"],c:1,e:"天使向马利亚宣告，她将从圣灵怀孕生下耶稣。",r:"路加福音 1:26–35"},
  {id:9,level:"basic",category:"圣经地点",q:"上帝在哪里把十诫赐给摩西？",a:["橄榄山","锡安山","西奈山","迦密山"],c:2,e:"以色列人来到西奈山，上帝在那里与他们立约。",r:"出埃及记 19:1–20:17"},
  {id:10,level:"basic",category:"复活",q:"耶稣在受死后的第几天复活？",a:["第二天","第三天","第七天","第四十天"],c:1,e:"耶稣照圣经所说，第三天从死里复活。",r:"哥林多前书 15:3–4"},

  {id:11,level:"beginner",category:"圣经人物",q:"上帝应许赐给亚伯拉罕和撒拉的儿子是谁？",a:["以实玛利","以撒","雅各","约瑟"],c:1,e:"上帝信实地赐给他们一个儿子，名叫以撒。",r:"创世记 21:1–3"},
  {id:12,level:"beginner",category:"旧约历史",q:"谁接续摩西带领以色列人进入应许之地？",a:["亚伦","约书亚","基甸","扫罗"],c:1,e:"摩西死后，上帝坚固约书亚，吩咐他带领百姓过约旦河。",r:"约书亚记 1:1–6"},
  {id:13,level:"beginner",category:"先知",q:"哪位先知在迦密山与巴力的先知对决？",a:["以赛亚","耶利米","以利亚","但以理"],c:2,e:"以利亚祷告，上帝降火显明自己是真神。",r:"列王纪上 18:20–39"},
  {id:14,level:"beginner",category:"新约人物",q:"谁在大马士革路上遇见复活的耶稣？",a:["彼得","保罗","巴拿巴","司提反"],c:1,e:"扫罗在路上遇见耶稣，后来成为使徒保罗。",r:"使徒行传 9:1–9"},
  {id:15,level:"beginner",category:"耶稣比喻",q:"好撒玛利亚人的比喻主要教导什么？",a:["如何积蓄财富","爱邻舍并怜悯有需要的人","避免旅行","只帮助认识的人"],c:1,e:"耶稣指出，真正的邻舍是向受伤者施怜悯的人。",r:"路加福音 10:25–37"},
  {id:16,level:"beginner",category:"诗篇",q:"诗篇23篇用什么形象描写上帝？",a:["君王","牧者","审判官","建筑师"],c:1,e:"大卫宣告“耶和华是我的牧者”，表达上帝的引导、供应和保护。",r:"诗篇 23:1–4"},
  {id:17,level:"beginner",category:"耶稣神迹",q:"耶稣用五饼二鱼使多少男人吃饱？",a:["约五百人","约一千人","约三千人","约五千人"],c:3,e:"除了妇女和孩子，吃的人约有五千。",r:"马太福音 14:13–21"},
  {id:18,level:"beginner",category:"旧约人物",q:"谁因忠心祷告而被丢进狮子坑？",a:["但以理","尼希米","以斯拉","末底改"],c:0,e:"但以理仍然向上帝祷告，因此被投入狮子坑；上帝却保护他。",r:"但以理书 6:10–23"},
  {id:19,level:"beginner",category:"圣经书卷",q:"哪一卷福音书一开始就记载耶稣的家谱？",a:["马太福音","马可福音","路加福音","约翰福音"],c:0,e:"马太福音一开始就记载耶稣的家谱，说明他是亚伯拉罕和大卫的后裔。",r:"马太福音 1:1–17"},
  {id:20,level:"beginner",category:"初期教会",q:"五旬节圣灵降临时，门徒开始做什么？",a:["建造圣殿","说起别国的话，宣讲上帝的大作为","离开耶路撒冷","选立君王"],c:1,e:"圣灵充满门徒，使他们用各地语言传讲上帝的大作为。",r:"使徒行传 2:1–11"},

  {id:21,level:"intermediate",category:"旧约历史",q:"以色列王国分裂后，北国通常称为什么？",a:["犹大","以色列","以东","亚兰"],c:1,e:"所罗门之后王国分裂，北国称以色列，南国称犹大。",r:"列王纪上 12:16–20"},
  {id:22,level:"intermediate",category:"救恩",q:"我们得救是靠什么？",a:["自己的好行为","上帝的恩典","自己的财富","自己的聪明"],c:1,e:"救恩是上帝白白赐下的恩典。我们借着信心领受。",r:"以弗所书 2:8–9"},
  {id:23,level:"intermediate",category:"耶稣教导",q:"耶稣说，哪一种人必得安慰？",a:["哀恸的人","骄傲的人","贪心的人","争竞的人"],c:0,e:"耶稣应许，哀恸的人有福了，因为他们必得安慰。",r:"马太福音 5:4"},
  {id:24,level:"intermediate",category:"旧约敬拜",q:"大祭司通常在什么时候进入至圣所？",a:["每天","每个安息日","每年的赎罪日","每逢新月"],c:2,e:"大祭司每年在赎罪日进入至圣所，为自己和百姓献上赎罪祭。",r:"利未记 16章；希伯来书 9:7"},
  {id:25,level:"intermediate",category:"耶稣生平",q:"耶稣在井旁与哪一位妇人谈话？",a:["撒玛利亚妇人","以利沙伯","马大","吕底亚"],c:0,e:"耶稣主动与撒玛利亚妇人谈话，并把生命的活水赐给她。",r:"约翰福音 4:7–14"},
  {id:26,level:"intermediate",category:"耶稣是谁",q:"约翰福音所说的“道成了肉身”是指谁来到世上？",a:["摩西","施洗约翰","耶稣","彼得"],c:2,e:"耶稣来到世上，住在我们中间，让人看见上帝的恩典和真理。",r:"约翰福音 1:14–17"},
  {id:27,level:"intermediate",category:"圣灵",q:"加拉太书所说的“圣灵的果子”共有几方面？",a:["5方面","7方面","9方面","12方面"],c:2,e:"保罗列出仁爱、喜乐、和平等九方面，描述圣灵在人生命中的工作。",r:"加拉太书 5:22–23"},
  {id:28,level:"intermediate",category:"旧约人物",q:"尼希米回耶路撒冷最主要完成什么工作？",a:["重建圣殿","重建城墙","建立王宫","编写律法"],c:1,e:"尼希米带领百姓在敌对中重建耶路撒冷城墙。",r:"尼希米记 2:17–20；6:15"},
  {id:29,level:"intermediate",category:"出埃及记",q:"逾越节羔羊的血有什么作用？",a:["使庄稼丰收","成为记号，使灾祸越过他们的家","医治疾病","洁净圣殿"],c:1,e:"羔羊的血涂在门框上，成为记号，使灾祸越过他们的家。",r:"出埃及记 12:7–13"},
  {id:30,level:"intermediate",category:"教会生活",q:"哥林多前书12章用什么比喻说明教会中恩赐不同却彼此需要？",a:["葡萄树","羊群","身体","房屋"],c:2,e:"教会像一个身体，有许多肢体；各肢体不同，却同属一个身体。",r:"哥林多前书 12:12–27"},

  {id:31,level:"advanced",category:"上帝的应许",q:"上帝赐福亚伯拉罕，也要借着他使谁得福？",a:["只有他的家人","地上的万族","只有君王","没有别人"],c:1,e:"上帝赐福亚伯拉罕，也要借着他使地上的万族得福。",r:"创世记 12:1–3",f:"反思：本周你可以怎样成为别人的祝福？"},
  {id:32,level:"advanced",category:"耶稣生平",q:"谁在约旦河为耶稣施洗？",a:["彼得","施洗约翰","雅各","安得烈"],c:1,e:"施洗约翰为耶稣施洗。耶稣从水里上来时，圣灵降在他身上。",r:"马太福音 3:13–17"},
  {id:33,level:"advanced",category:"上帝的话",q:"上帝应许把他的律法写在哪里？",a:["石头上","人的心里","城墙上","王宫里"],c:1,e:"上帝应许把他的律法写在人的心里，也赦免他们的罪。",r:"耶利米书 31:31–34",f:"反思：求上帝帮助我们从心里爱他、顺服他。"},
  {id:34,level:"advanced",category:"耶稣教导",q:"耶稣为门徒洗脚，教导我们怎样服事？",a:["彼此争大","谦卑服事","只顾自己","等待别人"],c:1,e:"耶稣谦卑地为门徒洗脚，也教导我们彼此服事。",r:"约翰福音 13:12–15"},
  {id:35,level:"advanced",category:"耶稣是谁",q:"耶稣说：“我是好牧人。”好牧人为羊做什么？",a:["丢下羊群","为羊舍命","把羊赶走","不认识羊"],c:1,e:"耶稣是好牧人。他认识我们，也甘愿为我们舍命。",r:"约翰福音 10:11–15"},
  {id:36,level:"advanced",category:"爱上帝",q:"申命记第六章教导我们怎样爱上帝？",a:["只在节期爱他","尽心、尽性、尽力爱他","只用言语爱他","只在困难时爱他"],c:1,e:"上帝呼召我们尽心、尽性、尽力爱他，并把他的话记在心里。",r:"申命记 6:4–9"},
  {id:37,level:"advanced",category:"耶稣是谁",q:"彼得说耶稣是谁？",a:["一位君王","基督","一位祭司","施洗约翰"],c:1,e:"彼得承认耶稣是基督。耶稣也告诉门徒，他将受苦、被杀并复活。",r:"马可福音 8:27–31"},
  {id:38,level:"advanced",category:"生命改变",q:"撒该遇见耶稣以后，有什么改变？",a:["继续欺骗人","愿意赔还并帮助穷人","离开耶利哥","成为罗马官员"],c:1,e:"撒该遇见耶稣后愿意悔改，帮助穷人，并赔还亏欠别人的钱。",r:"路加福音 19:1–10"},
  {id:39,level:"advanced",category:"新约人物",q:"法利赛人相信什么，是撒都该人不相信的？",a:["死人复活","罗马皇帝","外邦神明","人不需要祷告"],c:0,e:"法利赛人相信死人复活，也相信天使和灵；撒都该人却不接受这些教导。",r:"使徒行传 23:6–8"},
  {id:40,level:"advanced",category:"耶稣教导",q:"耶稣称门徒是世上的什么？",a:["黑暗","光","君王","天使"],c:1,e:"耶稣说门徒是世上的光。我们的好行为可以帮助别人看见上帝。",r:"马太福音 5:14–16",f:"反思：本周你可以怎样为耶稣发光？"}
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
