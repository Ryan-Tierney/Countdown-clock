const startinghours = 2;

let time = startinghours * 60 * 60;

const countdownTimer = document.getElementById("countdown");

setInterval(updateCountdown, 1000);

function updateCountdown() {
  const hours = Math.floor(time / 60 / 60);
  const minutes = Math.floor(time / startinghours / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;

  countdownTimer.innerHTML = `${hours}:${minutes}:${seconds}`;
  time--;
}
