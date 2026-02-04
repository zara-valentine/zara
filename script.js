const compliments=[
"Because your smile feels like home 🏡",
"Because you make everything brighter ✨",
"Because you are effortlessly beautiful 💖",
"Because my heart feels calm around you 💓",
"Because life is better with you 🌸",
"Because you make my bad days better ☀️",
"Because you are my favorite thought 💭",
"Because your laugh is my favorite sound 🎶",
"Because you feel like magic ✨",
"Because you are simply you 💗"
];

let i=0;
const box=document.getElementById("box");
const app=document.getElementById("app");
const question=document.getElementById("question");
const final=document.getElementById("final");
const typing=document.getElementById("typing");
const no=document.getElementById("no");
const pass=document.getElementById("pass");
const music=document.getElementById("bgMusic");

function unlock(){
 if(pass.value==="Zara"){
  document.getElementById("passwordScreen").style.display="none";
  app.classList.remove("hidden");
  music.play().catch(()=>{});
  showCompliments();
 }else alert("Wrong password 😅");
}

function showCompliments(){
 box.innerText=compliments[i];
 const interval=setInterval(()=>{
  i++;
  if(i<compliments.length){box.innerText=compliments[i];}
  else{clearInterval(interval);setTimeout(showQuestion,2000);}
 },4000);
}

function showQuestion(){
 app.style.display="none";
 question.classList.remove("hidden");
}

no.addEventListener("mouseover",()=>{
 no.style.left=Math.random()*80+"%";
 no.style.top=Math.random()*60+"%";
});

document.getElementById("yes").onclick=()=>{
 question.style.display="none";
 final.classList.remove("hidden");
 typeText();
};

function typeText(){
 const msg="Zara, you just made my heart the happiest. This is the start of something beautiful. — Sandeep ❤️";
 let j=0;
 const t=setInterval(()=>{
  typing.innerText+=msg[j];
  j++; if(j>=msg.length) clearInterval(t);
 },60);
}
