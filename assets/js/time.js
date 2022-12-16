const displayHour = document.querySelector("#hour");
const displayMinute = document.querySelector("#minute");
const displaySecond = document.querySelector("#second");
const greetingMessage = document.querySelector("#message");
const displayDate = document.querySelector('#dateItemList');


const clock = setInterval(function time() {
  let dateToday = new Date();
  let hour = dateToday.getHours();
  let minute = dateToday.getMinutes();
  let second = dateToday.getSeconds();

  if (hour >= 6 && hour < 13) {
    greetingMessage.innerHTML = 'Bom Dia <i class="fa-regular fa-sun"></i>';
    greetingMessage.style.color = "#FFD384";

  } else if (hour >= 13 && hour <= 18 && minute <= 30 ) {
    greetingMessage.innerHTML =
      'Boa Tarde <i class="fa-solid fa-cloud-sun"></i>';
    greetingMessage.style.color = "#FEB139";

  } else {
    greetingMessage.innerHTML =
      'Boa Noite <i class="fa-solid fa-cloud-moon"></i>';
    greetingMessage.style.color = '#434242';
  }

  function timeFormated(time) {
    return time < 10 ? "0" + time : time;
  }

  displayHour.innerHTML = `${timeFormated(hour)}`;
  displayMinute.innerHTML = `${timeFormated(minute)}`;
  displaySecond.innerHTML = `${timeFormated(second)}`;

}, 1000);


