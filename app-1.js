let BANK=[];
const DOMAIN_NAMES={1:'General Security Concepts',2:'Threats, Vulnerabilities & Mitigations',3:'Security Architecture',4:'Security Operations',5:'Security Program Management & Oversight'};
const STORAGE='securityplus701-simulator-v2';
let db=loadDB();
let view={screen:'home',exam:null,index:0,feedback:false,selectedToken:null};
let timerHandle=null;
function loadDB(){try{return JSON.parse(localStorage.getItem(STORAGE))||{}}catch(e){return {}}}
function saveDB(){localStorage.setItem(STORAGE,JSON.stringify(db))}
function defaultState(exam,mode='exam'){return {exam,mode,index:0,responses:{},flagged:{},checked:{},startedAt:Date.now(),remaining:5400,finished:false,result:null}}
function getState(exam){return db['exam'+exam]}
function currentState(){return view.exam?getState(view.exam):null}
function escapeHTML(s){return String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]))}
function shuffle(a){let x=[...a];for(let i=x.length-1;i>0;i--){let j=(i*7+3)% (i+1);[x[i],x[j]]=[x[j],x[i]]}return x}
function examData(n){return BANK[n-1]}
function qData(n,i){return examData(n).questions[i]}
function formatTime(sec){sec=Math.max(0,Math.floor(sec));return String(Math.floor(sec/60)).padStart(2,'0')+':'+String(sec%60).padStart(2,'0')}
function normalize(s){return String(s??'').toLowerCase().replace(/[$,]/g,'').replace(/[.]/g,'').replace(/\s+/g,' ').trim()}
function isAnswered(q,r){if(!r)return false;if(q.type==='mcq')return !!r;if(q.interaction==='sequence_plus_match')return (r.sequence?.length||0)>0||Object.keys(r.match||{}).length>0;return Object.keys(r||{}).length>0}
function responseFor(q){const s=currentState();return s.responses[q.number]||null}
function pbqPool(domain,currentAnswers){let pool=[];BANK.forEach(e=>e.questions.filter(q=>q.type==='pbq'&&q.domain===domain).forEach(q=>pool.push(...q.answers)));pool=[...new Set(pool)].filter(Boolean);const current=new Set(currentAnswers);const distract=pool.filter(x=>!current.has(x)).slice(0,5);return shuffle([...currentAnswers,...distract])}
function scoreQuestion(q,r){if(q.type==='mcq')return {earned:r===q.answer?1:0,max:1};let earned=0,max=q.answers.length;if(q.interaction==='sequence_plus_match'){const seq=(r?.sequence||[]).join(' -> ');if(normalize(seq)===normalize(q.answers[0]))earned++;for(let i=1;i<q.answers.length;i++)if(normalize(r?.match?.[i])===normalize(q.answers[i]))earned++;}else{for(let i=0;i<q.answers.length;i++)if(normalize(r?.[i])===normalize(q.answers[i]))earned++;}return {earned,max}}
function render(){clearInterval(timerHandle);if(view.screen==='home')renderHome();else if(view.screen==='exam')renderExam();else renderResults();}
function shellTop(content=''){return `<div class="topbar"><div class="brand">Security+ SY0-701 Simulator</div>${content}</div>`}
