const compliments=[
"Because your smile feels like home 🏡",
"Because you make everything brighter ✨",
"Because you are effortlessly beautiful 💖",
"Because my heart feels calm around you 💕",
"Because life is better with you 🌸"
];

let i=0;

function unlock(){
if(pass.value==="Zara"){
passwordScreen.style.display="none";
app.classList.remove("hidden");
showCompliments();
}else alert("Wrong password 😅");
}

function showCompliments(){
box.innerText=compliments[i];
const interval=setInterval(()=>{
i++;
if(i<compliments.length){
box.innerText=compliments[i];
}else{
clearInterval(interval);
setTimeout(showQuestion,1500);
}
},4000);
}

function showQuestion(){
intro.style.display="none";
app.style.display="none";
question.classList.remove("hidden");
}

no.addEventListener("mouseover",()=>{
no.style.left=Math.random()*80+"%";
no.style.top=Math.random()*80+"%";
});

yes.onclick=()=>{
question.style.display="none";
final.classList.remove("hidden");
typeText();
}

function typeText(){
const msg="Zara ❤️ You just made my heart the happiest. This is the start of something beautiful. — Sandeep ❤️";
let j=0;
const t=setInterval(()=>{
typing.innerText+=msg[j];
j++;
if(j>=msg.length)clearInterval(t);
},60);
}
