const compliments = [
  "Because your smile feels like home 💫",
  "Because you make everything brighter ✨",
  "Because you are effortlessly beautiful 💖",
  "Because my heart feels calm around you 💕",
  "Because life feels better with you 🌸"
];

let i = 0;

const pass = document.getElementById("pass");
const passwordScreen = document.getElementById("passwordScreen");
const intro = document.getElementById("intro");
const app = document.getElementById("app");
const boxText = document.getElementById("boxText");
const question = document.getElementById("question");
const final = document.getElementById("final");
const yes = document.getElementById("yes");
const no = document.getElementById("no");
const typing = document.getElementById("typing");
const song = document.getElementById("song");

function unlock() {
  if (pass.value === "Zara") {
    passwordScreen.classList.add("hidden");
    intro.classList.remove("hidden");
    song.play();
    showCompliments();
  } else {
    alert("Wrong password 😅");
  }
}

function showCompliments() {
  boxText.innerText = compliments[i];

  const interval = setInterval(() => {
    i++;
    if (i < compliments.length) {
      boxText.innerText = compliments[i];
    } else {
      clearInterval(interval);
      setTimeout(showQuestion, 2000);
    }
  }, 4000);
}

function showQuestion() {
  intro.classList.add("hidden");
  question.classList.remove("hidden");
}

no.addEventListener("mouseover", () => {
  no.style.left = Math.random() * 80 + "vw";
  no.style.top = Math.random() * 80 + "vh";
});

yes.onclick = () => {
  question.classList.add("hidden");
  final.classList.remove("hidden");
  typeText();
};

function typeText() {
  const msg =
    "You just made my heart the happiest. This is the start of something beautiful… — Sandeep ❤️";
  let j = 0;

  const t = setInterval(() => {
    typing.innerText += msg[j];
    j++;
    if (j >= msg.length) clearInterval(t);
  }, 60);
}
