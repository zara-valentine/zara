const compliments=[
"Because your smile feels like home 🏡",
"Because you make everything brighter ✨",
"Because you are effortlessly beautiful 💖",
"Because my heart feels calm around you 💓",
"Because life is better with you 🌸",
"Because you are kindness in human form 💕",
"Because your laugh is my favorite sound 🎶",
"Because you make ordinary moments special 🌟",
"Because you are magic without trying ✨",
"Because you are you, and that's enough 💞"
];
let i=0;
function unlock(){
if(pass.value==="Zara"){
passwordScreen.classList.add("hidden");
intro.classList.remove("hidden");
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
setTimeout(showQuestion,2000);
}
},4000);
}
function showQuestion(){
intro.classList.add("hidden");
question.classList.remove("hidden");
}
no.addEventListener("mouseover",()=>{
no.style.left=Math.random()*80+"%";
no.style.top=Math.random()*80+"%";
});
yes.onclick=()=>{
question.classList.add("hidden");
final.classList.remove("hidden");
typeText();
};
function typeText(){
const msg="Zara, you just made my heart the happiest. This is the start of something beautiful… — Sandeep ❤️";
let j=0;
const t=setInterval(()=>{
typing.innerText+=msg[j];
j++;
if(j>=msg.length)clearInterval(t);
},50);
}
