
function unlock(){
  const p=document.getElementById("pass").value;
  if(p==="Zara"){
    document.getElementById("lock").style.display="none";
    document.getElementById("content").classList.remove("hidden");
  }else{
    document.getElementById("error").innerText="Wrong password 😅";
  }
}

// === MAIN LOGIC ===
const compliments=[
"You have the prettiest smile ✨",
"You make everything feel lighter 💕",
"Being with you feels like home 🏡",
"You are effortlessly beautiful 💖",
"You make my bad days better 🌸"
];

const box=document.getElementById("box");
const question=document.getElementById("question");
const yes=document.getElementById("yes");
const no=document.getElementById("no");
const final=document.getElementById("final");
const typing=document.getElementById("typing");
const surprise=document.getElementById("surprise");
const datecard=document.getElementById("datecard");
const heartbeat=document.getElementById("heartbeat");

let i=0;
box.innerText=compliments[i];

const timer=setInterval(()=>{
i++;
if(i<compliments.length){
box.innerText=compliments[i];
}else{
clearInterval(timer);
setTimeout(()=>{
box.style.display="none";
question.classList.remove("hidden");
heartbeat.play();
},2000);
}
},4000);

no.addEventListener("mouseenter",()=>{
no.style.left=Math.random()*(window.innerWidth-100)+"px";
no.style.top=Math.random()*(window.innerHeight-50)+"px";
});

yes.addEventListener("click",()=>{
question.classList.add("hidden");
final.classList.remove("hidden");
typeMessage();
});

function typeMessage(){
const msg="Zara, you just turned this moment into a memory I will cherish forever. Thank you for choosing me ❤️";
let idx=0;
typing.innerHTML="";
const t=setInterval(()=>{
typing.innerHTML+=msg[idx];
idx++;
if(idx>=msg.length){
clearInterval(t);
setTimeout(showSurprise,1500);
}
},50);
}

function showSurprise(){
surprise.innerHTML="🤫 One more thing… I have a surprise for you";
surprise.classList.remove("hidden");
setTimeout(showDateCard,2000);
}

function showDateCard(){
datecard.classList.remove("hidden");
datecard.innerHTML=`
<h3>💌 Valentine Date 💌</h3>
<p><b>With:</b> Zara</p>
<p><b>From:</b> Sandeep</p>
<p><b>Time:</b> Anytime you want</p>
<p><b>Place:</b> Wherever you smile 😊</p>
`;
}
