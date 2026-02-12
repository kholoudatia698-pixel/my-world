// كلمة السر
const enterBtn = document.getElementById("enterBtn");
const passwordInput = document.getElementById("passwordInput");
const errorMsg = document.getElementById("errorMsg");
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");

enterBtn.addEventListener("click", () => {
  if (passwordInput.value.trim() === "19102024") {
    alert("تم فتح قلبي بنجاح 😍✅");
    page1.style.display = "none";
    page2.style.display = "block";
    startTimer();
    createHearts();
  } else {
    errorMsg.style.display = "block";
  }
});

passwordInput.addEventListener("input", () => {
  errorMsg.style.display = "none";
});

// Flip3D
document
  .querySelectorAll(".flip-inner")
  .forEach((flip) =>
    flip.addEventListener("click", () => flip.classList.toggle("flipped"))
  );

// العداد يبدأ من 13/2/2025
function startTimer() {
  const startDate = new Date("2025-02-13T00:00:00");
  function updateTimer() {
    const now = new Date();
    let diff = now - startDate;
    if (diff < 0) diff = 0;

    let totalSeconds = Math.floor(diff / 1000);
    const years = Math.floor(totalSeconds / (365 * 24 * 60 * 60));
    totalSeconds %= 365 * 24 * 60 * 60;
    const months = Math.floor(totalSeconds / (30 * 24 * 60 * 60));
    totalSeconds %= 30 * 24 * 60 * 60;
    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    totalSeconds %= 24 * 60 * 60;
    const hours = Math.floor(totalSeconds / (60 * 60));
    totalSeconds %= 60 * 60;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    document.getElementById("yearsNum").textContent = years;
    document.getElementById("monthsNum").textContent = months;
    document.getElementById("daysNum").textContent = days;
    document.getElementById("hoursNum").textContent = hours;
    document.getElementById("minutesNum").textContent = minutes;
    document.getElementById("secondsNum").textContent = seconds;
  }
  updateTimer();
  setInterval(updateTimer, 1000);
}

// مطر القلوب
function createHearts() {
  for (let i = 0; i < 50; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.animationDuration = 3 + Math.random() * 3 + "s";
    heart.style.width = 15 + Math.random() * 15 + "px";
    heart.style.height = 15 + Math.random() * 15 + "px";
    heart.style.opacity = 0.5 + Math.random() * 0.5;
    heart.style.transform = `rotate(${Math.random() * 360}deg)`;
    page2.appendChild(heart);
  }
}

// زر رسالة أخيرة لك
const finalBtn = document.getElementById("finalBtn");
const loveMsg = document.getElementById("loveMsg");
finalBtn.addEventListener("click", () => {
  loveMsg.style.display = "block";
  loveMsg.scrollIntoView({ behavior: "smooth" });
});

// زر العودة للبداية
const backStart = document.getElementById("backStart");
backStart.addEventListener("click", () => {
  page2.style.display = "none";
  page1.style.display = "flex";
  passwordInput.value = "";
  errorMsg.style.display = "none";
  loveMsg.style.display = "none";
});