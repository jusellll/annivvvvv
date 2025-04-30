// script.js

// Set tanggal anniversary berikutnya (contoh: 25 Desember 2025)
const anniversaryDate = new Date("2025-12-25T00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = anniversaryDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s";

  if (distance < 0) {
    clearInterval(countdownInterval);
    document.getElementById("timer").innerHTML = "Selamat Anniversary! 🎉";
  }
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();
