// script.js

// TAB INTERAKTIF
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".tab-button");
    const contents = document.querySelectorAll(".tab-content");
  
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const target = btn.getAttribute("data-target");
  
        contents.forEach((content) => {
          content.classList.remove("active");
        });
  
        document.getElementById(target).classList.add("active");
      });
    });
  });
  
  // COUNTDOWN TIMER
  function updateCountdown() {
    const nextAnniversary = new Date("April 30, 2026 00:00:00").getTime();
    const now = new Date().getTime();
    const distance = nextAnniversary - now;
  
    if (distance < 0) {
      document.getElementById("timer").innerText = "Sudah tiba!";
      return;
    }
  
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    document.getElementById("timer").innerText =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s";
  }
  
  setInterval(updateCountdown, 1000);
  
