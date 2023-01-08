const displayHour = document.querySelector("#hour");
const displayMinute = document.querySelector("#minute");
const displaySecond = document.querySelector("#second");
const greetingMessage = document.querySelector("#message");
let textDate = document.querySelector("#dateText");
let dateItemList = document.querySelector("#dateItemList");

const clock = setInterval(function time() {
  let dateToday = new Date();
  let hour = dateToday.getHours();
  let minute = dateToday.getMinutes();
  let second = dateToday.getSeconds();
  let today = dateToday.getDate();
  let mounth = dateToday.getMonth() + 1;
  let year = dateToday.getFullYear();
  let weekDay = dateToday.getDay();

  switch (weekDay) {
    case (weekDay = 0):
      weekDay = "Domingo";
      break;
    case (weekDay = 1):
      weekDay = "Segunda";
      break;
    case (weekDay = 2):
      weekDay = "Terça-Ferira";
      break;
    case (weekDay = 3):
      weekDay = "Quarta-Feira";
      break;
    case (weekDay = 4):
      weekDay = "Quinta-Feira";
      break;
    case (weekDay = 5):
      weekDay = "Sexta-Feira";
      break;
    case (weekDay = 6):
      weekDay = "Sábado";
      break;
    default:
      break;
  }
  if (today || mounth < 10) {
    today = `${"0" + today}`;
    mounth = `${"0" + mounth}`;
  }

  textDate.innerHTML = `<i class="fa-solid fa-calendar-days"></i> ${weekDay} - ${today}/${mounth}/${year}`;
  dateItemList.innerHTML = `${displayHour.innerHTML}:${displayMinute.innerHTML} - ${today}/${mounth}/${year}`;

  if (hour >= 6 && hour < 13) {
    greetingMessage.innerHTML = 'Bom Dia <i class="fa-regular fa-sun"></i>';
    greetingMessage.style.color = "#FFD384";
  } else if (hour >= 13 && hour < 19) {
    greetingMessage.innerHTML =
      'Boa Tarde <i class="fa-solid fa-cloud-sun"></i>';
    greetingMessage.style.color = "#FEB139";
  } else {
    greetingMessage.innerHTML =
      'Boa Noite <i class="fa-solid fa-cloud-moon"></i>';
    greetingMessage.style.color = "#434242";
  }

  function timeFormated(time) {
    return time < 10 ? "0" + time : time;
  }

  displayHour.innerHTML = `${timeFormated(hour)}`;
  displayMinute.innerHTML = `${timeFormated(minute)}`;
  displaySecond.innerHTML = `${timeFormated(second)}`;
}, 1000);

export default { hour, minute, second };
