/* =========================
   ELEMENTS
========================= */

const passwordScreen = document.getElementById("passwordScreen");
const passInput = document.getElementById("pass");

const intro = document.getElementById("intro");
const app = document.getElementById("app");

const box = document.getElementById("box");

const question = document.getElementById("question");
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

const finalScreen = document.getElementById("final");
const typing = document.getElementById("typing");

/* =========================
   PASSWORD UNLOCK
========================= */

function unlock() {
  if (passInput.value.trim() === "Zara") {
    passwordScreen.style.display = "none";
    intro.classList.remove("hidden");

    // small delay before compliments start
    setTimeout(startCompliments, 1500);
  } else {
    alert("Wrong password 😜");
  }
}

/* =========================
   COMPLIMENTS (10)
========================= */

const compliments = [
  "Because your smile feels like home 🏡",
  "Because you make everything brighter ✨",
  "Because you are effortlessly beautiful 💖",
  "Because my heart feels calm around you 💞",
  "Because life is better with you 🌸",
  "Because your laugh is my favorite sound 🎶",
  "Because you are kindness in human form 🤍",
  "Because you turn ordinary days magical ✨",
  "Because you feel like my safest place 🫶",
  "Because you are simply… you 💗"
];

let cIndex = 0;
let charIndex = 0;

function startCompliments() {
  app.classList.remove("hidden");
  typeCompliment();
}

function typeCompliment() {
  box.innerHTML = "";
  box.classList.remove("fade");
  charIndex = 0;

  const text = compliments[cIndex];

  const typingInterval = setInterval(() => {
    box.innerHTML += text.charAt(charIndex);
    charIndex++;

    if (charIndex === text.length) {
      clearInterval(typingInterval);

      // hold text for 2 sec
      setTimeout(() => {
        box.classList.add("fade");
        cIndex++;

        if (cIndex < compliments.length) {
          setTimeout(typeCompliment, 800);
        } else {
          setTimeout(showQuestion, 1200);
        }
      }, 2000);
    }
  }, 45);
}

/* =========================
   QUESTION SCREEN
========================= */

function showQuestion() {
  intro.style.display = "none";
  app.style.display = "none";
  question.classList.remove("hidden");
}

/* NO button runaway 😏 */
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 80;
  const y = Math.random() * 80;
  noBtn.style.left = x + "%";
  noBtn.style.top = y + "%";
});

/* =========================
   YES CLICK
========================= */

yesBtn.addEventListener("click", () => {
  question.style.display = "none";
  finalScreen.classList.remove("hidden");
  startLoveTyping();
});

/* =========================
   TYPING LOVE MESSAGE
========================= */

const loveMessage =
  "Zara, you just made my heart the happiest. This is the start of something beautiful… — Sandeep ❤️";

let loveIndex = 0;

function startLoveTyping() {
  typing.innerHTML = "";

  const loveInterval = setInterval(() => {
    typing.innerHTML += loveMessage.charAt(loveIndex);
    loveIndex++;

    if (loveIndex === loveMessage.length) {
      clearInterval(loveInterval);
    }
  }, 60);
}
