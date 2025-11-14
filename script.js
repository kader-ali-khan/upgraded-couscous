const ideas=["Make a website that lies to you politely.","Build a digital pet rock.","Design spooky buttons.","Write a timer that yells when you relax.","Make a gradient picker that cheats."];const ideaText=document.getElementById("idea-text");const newIdeaBtn=document.getElementById("new-idea-btn");const easterBtn=document.getElementById("easter-btn");const preview=document.getElementById("gradient-preview");const colorA=document.getElementById("color-a");const colorB=document.getElementById("color-b");const angle=document.getElementById("angle");const angleValue=document.getElementById("angle-value");const cssOutput=document.getElementById("css-output");const randomGradientBtn=document.getElementById("random-gradient-btn");const copyBtn=document.getElementById("copy-css-btn");const chaosBtn=document.getElementById("chaos-btn");
function randomItem(a){return a[Math.floor(Math.random()*a.length)];}
function setIdea(){ideaText.textContent=randomItem(ideas);}
function updateGradient(){const a=colorA.value,b=colorB.value,deg=angle.value;preview.style.background=`linear-gradient(${deg}deg, ${a}, ${b})`;cssOutput.textContent=`background: linear-gradient(${deg}deg, ${a}, ${b});`;angleValue.textContent=`${deg}°`;}
function randomColor(){return`#${Math.floor(Math.random()*0xffffff).toString(16).padStart(6,"0")}`;}
function randomGradient(){colorA.value=randomColor();colorB.value=randomColor();angle.value=Math.floor(Math.random()*361);updateGradient();}
function copyCSS(){navigator.clipboard.writeText(cssOutput.textContent);copyBtn.textContent="Copied! 🎉";setTimeout(()=>copyBtn.textContent="Copy CSS 📄",1200);}
function chaosMode(){document.body.style.transform=`rotate(${Math.random()*6-3}deg)`;preview.style.transform=`scale(${1+Math.random()*0.3}) rotate(${Math.random()*20-10}deg)`;}
function easterEgg(){ideaText.textContent="🥚 Secret couscous unlocked!";}

newIdeaBtn.onclick=setIdea;randomGradientBtn.onclick=randomGradient;copyBtn.onclick=copyCSS;chaosBtn.onclick=chaosMode;easterBtn.onclick=easterEgg;
setIdea();updateGradient();
