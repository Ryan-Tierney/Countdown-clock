const startingDays = 16;
const startinghours = startingDays * 24;
const startingMinutes = startinghours * 60;

let time = startingMinutes * 60;

const countdownTimer = document.getElementById("countdown");

setInterval(updateCountdown, 1000);

function updateCountdown() {
  const days = 16;
  const hours = 24;
  const minutes = 1;
  let seconds = time % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;

  countdownTimer.innerHTML = `${days}:${hours}:${minutes}:${seconds}`;
  time--;
}
