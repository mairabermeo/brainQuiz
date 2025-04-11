document.addEventListener("DOMContentLoaded", () => {
  // === DARK MODE TOGGLE ===
  const darkModeToggle = document.querySelector(".switch input");
  const modeLabel = document.getElementById("mode-label");

  function updateModeLabel(isDark) {
    modeLabel.textContent = isDark ? "Dark Mode:" : "Light Mode:";
  }

  updateModeLabel(darkModeToggle.checked);

  darkModeToggle.addEventListener("change", () => {
    const isDark = darkModeToggle.checked;
    document.body.classList.toggle("dark-mode", isDark);
    updateModeLabel(isDark);
  });

  // === FONT SIZE BUTTONS ===
  const fontButtons = document.querySelectorAll(".font-btn");

  fontButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Removes active state from all buttons
      fontButtons.forEach((b) => b.classList.remove("active-font"));
      btn.classList.add("active-font");

      // Applies font size to the entire page
      if (btn.classList.contains("small")) {
        document.documentElement.style.fontSize = "14px";
      } else if (btn.classList.contains("medium")) {
        document.documentElement.style.fontSize = "18px";
      } else if (btn.classList.contains("large")) {
        document.documentElement.style.fontSize = "22px";
      }
    });
  });

  // === LOAD SAVED SETTINGS ===
  const savedDarkMode = localStorage.getItem("darkMode");
  const savedFontSize = localStorage.getItem("fontSize");

  if (savedDarkMode === "true") {
    document.body.classList.add("dark-mode");
    darkModeToggle.checked = true;
    updateModeLabel(true);
  }

  if (savedFontSize) {
    document.documentElement.style.fontSize = savedFontSize;
    fontButtons.forEach((btn) => {
      btn.classList.remove("active-font");
      if (
        (savedFontSize === "14px" && btn.classList.contains("small")) ||
        (savedFontSize === "18px" && btn.classList.contains("medium")) ||
        (savedFontSize === "22px" && btn.classList.contains("large"))
      ) {
        btn.classList.add("active-font");
      }
    });
  }

  // === SAVE SETTINGS ===
  const saveBtn = document.getElementById("save-settings-btn");

  saveBtn.addEventListener("click", () => {
    const isDarkMode = darkModeToggle.checked;
    const fontSize = document.documentElement.style.fontSize;

    localStorage.setItem("darkMode", isDarkMode);
    localStorage.setItem("fontSize", fontSize);

    alert("Settings saved!");
  });
});
