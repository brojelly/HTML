function updateClock() {
    const clock = document.getElementById("clock");
    const now = new Date();
  
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, "0");
    const dd = String(now.getDate()).padStart(2, "0");
  
    const hh = String(now.getHours()).padStart(2, "0");
    const min = String(now.getMinutes()).padStart(2, "0");
    const ss = String(now.getSeconds()).padStart(2, "0");
  
    clock.textContent = `${yyyy}-${mm}-${dd} ${hh}:${min}:${ss}`;
  }
  
  setInterval(updateClock, 1000); // 1초마다 갱신
  updateClock(); // 페이지 로드 시 바로 표시

  window.addEventListener("DOMContentLoaded", () => {
    const isDark = localStorage.getItem("darkMode") === "true";
    const toggleBtn = document.getElementById("darkModeToggle");
  
    if (isDark) {
      document.body.classList.add("dark-mode");
      toggleBtn.classList.remove("btn-outline-dark");
      toggleBtn.classList.add("btn-outline-light");
      toggleBtn.textContent = "☀️ 라이트모드";
    }
  
    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const isNowDark = document.body.classList.contains("dark-mode");
        localStorage.setItem("darkMode", isNowDark ? "true" : "false");
  
        if (isNowDark) {
          toggleBtn.classList.remove("btn-outline-dark");
          toggleBtn.classList.add("btn-outline-light");
          toggleBtn.textContent = "☀️ 라이트모드";
        } else {
          toggleBtn.classList.remove("btn-outline-light");
          toggleBtn.classList.add("btn-outline-dark");
          toggleBtn.textContent = "🌙 다크모드";
        }
      });
    }
  });
  
  