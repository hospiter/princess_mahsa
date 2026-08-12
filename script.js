const steps = [...document.querySelectorAll(".step")];

function showStep(id) {
  steps.forEach(step => step.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function normalizeName(value) {
  return value.trim().replace(/\s+/g, " ").toLowerCase();
}

const nameForm = document.getElementById("nameForm");
const nameInput = document.getElementById("nameInput");
const nameError = document.getElementById("nameError");

nameForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = normalizeName(nameInput.value);

  if (name === "مهسا" || name === "mahsa") {
    nameError.textContent = "";
    showStep("permissionStep");
  } else {
    nameError.textContent = "نههه 😌 تو مجاز نیستی! فقط مهسا می‌تونه وارد بشه 💗";
    nameInput.animate(
      [
        { transform: "translateX(0)" },
        { transform: "translateX(-8px)" },
        { transform: "translateX(8px)" },
        { transform: "translateX(0)" }
      ],
      { duration: 300 }
    );
  }
});

document.getElementById("continueBtn").addEventListener("click", () => {
  showStep("loveStep");
});

const noBtn = document.getElementById("noBtn");
const noMessage = document.getElementById("noMessage");

noBtn.addEventListener("click", () => {
  noMessage.textContent = "به نظرم بگو آره دیگه... 🥺👉👈";
  noBtn.animate(
    [
      { transform: "translateX(0)" },
      { transform: "translateX(-12px) rotate(-3deg)" },
      { transform: "translateX(12px) rotate(3deg)" },
      { transform: "translateX(0)" }
    ],
    { duration: 420 }
  );
});

document.getElementById("yesBtn").addEventListener("click", () => {
  showStep("loveMessageStep");
  launchConfetti();
});

document.getElementById("finalBtn").addEventListener("click", () => {
  showStep("finalStep");
  launchSparkles();
});

document.getElementById("replayBtn").addEventListener("click", () => {
  nameInput.value = "";
  nameError.textContent = "";
  noMessage.textContent = "";
  showStep("nameStep");
  setTimeout(() => nameInput.focus(), 300);
});

function launchConfetti() {
  const container = document.getElementById("confetti");
  container.innerHTML = "";

  const emojis = ["💗", "💖", "💕", "🌸", "✨", "🩷", "💙"];
  for (let i = 0; i < 45; i++) {
    const item = document.createElement("span");
    item.className = "confetti-piece";
    item.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    item.style.left = Math.random() * 100 + "%";
    item.style.animationDelay = Math.random() * 1.3 + "s";
    item.style.fontSize = 14 + Math.random() * 16 + "px";
    container.appendChild(item);
  }
}

function launchSparkles() {
  const container = document.getElementById("sparkles");

  for (let i = 0; i < 35; i++) {
    const item = document.createElement("span");
    item.className = "sparkle";
    item.textContent = Math.random() > .5 ? "✨" : "💗";
    item.style.left = Math.random() * 100 + "%";
    item.style.top = 65 + Math.random() * 30 + "%";
    item.style.animationDelay = Math.random() * 1.5 + "s";
    container.appendChild(item);

    setTimeout(() => item.remove(), 5500);
  }
}

// A few floating sparkles are created periodically for a soft animated background.
setInterval(() => {
  const container = document.getElementById("sparkles");
  const item = document.createElement("span");
  item.className = "sparkle";
  item.textContent = Math.random() > .5 ? "✦" : "♡";
  item.style.left = Math.random() * 100 + "%";
  item.style.top = (75 + Math.random() * 20) + "%";
  container.appendChild(item);
  setTimeout(() => item.remove(), 4000);
}, 1800);
