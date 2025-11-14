// List of fun, slightly chaotic ideas
const ideas = [
  "Build a digital pet rock with a mood bar.",
  "Make a website that warmly lies about your productivity.",
  "Create a 'rage click' counter for debugging UI frustration.",
  "Design spicy error pages for 404, 500, and 418 (I’m a teapot).",
  "Make a CSS-only loading animation gallery.",
  "Generate random NPC dialogues for a fake RPG.",
  "Create a tiny 'bug diary' to log weird issues you fix.",
  "Build a keyboard shortcuts cheat sheet for your editor.",
  "Make a site that gives you one oddly specific compliment.",
  "Create a gradient collection called 'Couscous Themes'."
];

// DOM references
const ideaText = document.getElementById("idea-text");
const newIdeaBtn = document.getElementById("new-idea-btn");
const easterBtn = document.getElementById("easter-btn");

const preview = document.getElementById("gradient-preview");
const colorA = document.getElementById("color-a");
const colorB = document.getElementById("color-b");
const angle = document.getElementById("angle");
const angleValue = document.getElementById("angle-value");
const cssOutput = document.getElementById("css-output");
const randomGradientBtn = document.getElementById("random-gradient-btn");
const copyBtn = document.getElementById("copy-css-btn");

const chaosBtn = document.getElementById("chaos-btn");

// Helpers
function randomItem(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function randomColor() {
  return `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, "0")}`;
}

// Idea generator
function setIdea() {
  ideaText.textContent = randomItem(ideas);
  ideaText.style.transform = "scale(1.02)";
  setTimeout(() => {
    ideaText.style.transform = "scale(1)";
  }, 120);
}

// Gradient logic
function updateGradient() {
  const a = colorA.value;
  const b = colorB.value;
  const deg = angle.value;

  preview.style.background = `linear-gradient(${deg}deg, ${a}, ${b})`;
  cssOutput.textContent = `background: linear-gradient(${deg}deg, ${a}, ${b});`;
  angleValue.textContent = `${deg}°`;
}

function randomGradient() {
  colorA.value = randomColor();
  colorB.value = randomColor();
  angle.value = Math.floor(Math.random() * 361);
  updateGradient();
}

// Clipboard
function copyCSS() {
  const css = cssOutput.textContent.trim();

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(css).catch(() => fallbackCopy(css));
  } else {
    fallbackCopy(css);
  }

  copyBtn.textContent = "Copied! 🎉";
  copyBtn.disabled = true;

  setTimeout(() => {
    copyBtn.textContent = "Copy CSS 📄";
    copyBtn.disabled = false;
  }, 1200);
}

function fallbackCopy(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

// Chaos Mode
function chaosMode() {
  const spin = Math.random() * 10 - 5;
  const scale = 1 + Math.random() * 0.25;
  const body = document.body;

  body.style.transition = "transform 0.2s ease-out";
  preview.style.transition = "transform 0.2s ease-out";

  body.style.transform = `rotate(${spin}deg)`;
  preview.style.transform = `scale(${scale}) rotate(${spin * 1.5}deg)`;

  chaosBtn.textContent = "CHAOS!! ⚡";

  setTimeout(() => {
    body.style.transform = "rotate(0deg)";
    preview.style.transform = "scale(1) rotate(0deg)";
    chaosBtn.textContent = "Activate Chaos";
  }, 700);
}

// Easter Egg
function easterEgg() {
  ideaText.textContent = "🥚 You found the secret couscous. Luck +10 today.";
  ideaText.style.color = "#fde68a";

  setTimeout(() => {
    ideaText.style.color = "";
    setIdea();
  }, 2000);
}

// Event bindings
newIdeaBtn.addEventListener("click", setIdea);
randomGradientBtn.addEventListener("click", randomGradient);
copyBtn.addEventListener("click", copyCSS);
chaosBtn.addEventListener("click", chaosMode);
easterBtn.addEventListener("click", easterEgg);

colorA.addEventListener("input", updateGradient);
colorB.addEventListener("input", updateGradient);
angle.addEventListener("input", updateGradient);

// Init
setIdea();
updateGradient();
