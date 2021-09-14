const startingdays = 16;

let time = startingdays * 24 * 60 * 60;

const countdownTimer = document.getElementById("countdown");

setInterval(updateCountdown, 1000);

function updateCountdown() {
  const days = Math.floor(time / 24 / 60 / 60);
  const hours = Math.floor(time / startingdays / 60 / 60);
  const minutes = Math.floor(time / startingdays / 24 / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;

  countdownTimer.innerHTML = `Days ${days}  ${hours}:${minutes}:${seconds}`;
  time--;
}
