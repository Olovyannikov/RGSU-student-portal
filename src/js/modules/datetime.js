export default () => {
  if (document.querySelector(".info__card--schedule")) {
    let dateElement = document.querySelector(".info__card-date ");
    let timeElement = document.querySelector(".info__card-time");
    let day = new Date();

    let month = new Array(12);
    month[0] = "Января";
    month[1] = "Февраля";
    month[2] = "Марта";
    month[3] = "Апреля";
    month[4] = "Мая";
    month[5] = "Июня";
    month[6] = "Июля";
    month[7] = "Августа";
    month[8] = "Сентября";
    month[9] = "Октября";
    month[10] = "Ноября";
    month[11] = "Декабря";

    let currentDay = day.getUTCDate();
    let currentMonth = month[day.getMonth()];

    let currentHours = day.getUTCHours() + 3;
    let currentMinutes = day.getUTCMinutes();
    if (currentMinutes < 10) {
      currentMinutes = "0" + currentMinutes;
    }

    dateElement.innerHTML = currentDay + " " + currentMonth;
    timeElement.innerHTML = currentHours + ":" + currentMinutes;

    let year = new Date().getFullYear();
    let monthArr = new Date().getMonth();
    let today = new Date(year, monthArr, 0).getTime();
    let now = new Date().getTime();
    let week = Math.round((now - today) / (1000 * 60 * 60 * 24 * 7));
    let weekElement = document.querySelector(".info__card-week");

    if (week % 2) {
      weekElement.innerHTML = "чётная неделя";
    } else {
      weekElement.innerHTML = "чётная неделя";
    }
  }
};

let date = new Date();
let currentDay = new Array(12);
currentDay[1] = "понедельник";
currentDay[2] = "вторник";
currentDay[3] = "среда";
currentDay[4] = "четверг";
currentDay[5] = "пятница";
currentDay[6] = "суббота";
currentDay[7] = "воскресенье";

if (document.querySelector(".hotels__tab-today")) {
  let currentDayElement = document.querySelector(".hotels__tab-today");

  currentDayElement.innerHTML = currentDay[date.getDay()];
}
