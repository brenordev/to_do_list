const displayHour = document.querySelector("#hour");
const displayMinute = document.querySelector("#minute");
const displaySecond = document.querySelector("#second");
const greetingMessagem = document.querySelector("#message");

const clock = setInterval(function time() {
  let dateToday = new Date();
  let hour = dateToday.getHours();
  let minute = dateToday.getMinutes();
  let second = dateToday.getSeconds();

  if (hour >= 6 && hour < 13) {
    greetingMessagem.innerHTML = 'Bom Dia <i class="fa-regular fa-sun"></i>';
    greetingMessagem.style.color = "#FFD384";
  } else if (hour >= 13 && hour <= 18) {
    greetingMessagem.innerHTML =
      'Boa Tarde <i class="fa-solid fa-cloud-sun"></i>';
    greetingMessagem.style.color = "#FEB139";
  } else {
    greetingMessagem.innerHTML =
      'Boa Noite <i class="fa-solid fa-cloud-moon"></i>';
    greetingMessagem.style.color = "#472183";
  }

  function timeFormated(time) {
    return time < 10 ? "0" + time : time;
  }

  displayHour.innerHTML = `${timeFormated(hour)}`;
  displayMinute.innerHTML = `${timeFormated(minute)}`;
  displaySecond.innerHTML = `${timeFormated(second)}`;
}, 1000);
