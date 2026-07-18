const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu-button");
const menu = document.getElementById("site-menu");

menuButton.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

const themeAudio = document.getElementById("themeAudio");
const themeButton = document.getElementById("themeButton");
const themeIcon = document.getElementById("themeIcon");
const themeLabel = document.getElementById("themeLabel");

function updateThemeButton() {
  if (themeAudio.paused) {
    themeIcon.textContent = "▶";
    themeLabel.textContent = themeAudio.currentTime > 0 ? "Continue Welcome Theme" : "Play Welcome Theme";
  } else {
    themeIcon.textContent = "❚❚";
    themeLabel.textContent = "Pause Welcome Theme";
  }
}

themeButton.addEventListener("click", async () => {
  try {
    if (themeAudio.paused) {
      await themeAudio.play();
    } else {
      themeAudio.pause();
    }
    updateThemeButton();
  } catch (error) {
    themeLabel.textContent = "Press again to play";
  }
});

themeAudio.addEventListener("play", updateThemeButton);
themeAudio.addEventListener("pause", updateThemeButton);
themeAudio.addEventListener("ended", () => {
  themeAudio.currentTime = 0;
  updateThemeButton();
});
