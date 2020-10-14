export default () => {
  let dateElement = document.querySelector('.info__card-date ');
  let timeElement = document.querySelector('.info__card-time');
  let day = new Date();

  let month=new Array(12);
  month[0]="Января";
  month[1]="Февраля";
  month[2]="Марта";
  month[3]="Апреля";
  month[4]="Мая";
  month[5]="Июня";
  month[6]="Июля";
  month[7]="Августа";
  month[8]="Сентября";
  month[9]="Октября";
  month[10]="Ноября";
  month[11]="Декабря";

  let currentDay = day.getUTCDate();
  let currentMonth = month[day.getMonth()];

  let currentHours = day.getUTCHours() + 3;
  let currentMinutes = day.getUTCMinutes();
  if (currentMinutes < 10) {
    currentMinutes = '0' + currentMinutes ;
  }

  dateElement.innerHTML = currentDay + ' ' + currentMonth;
  timeElement.innerHTML = currentHours + ':' + currentMinutes;

  let year = new Date().getFullYear();
  let monthArr = new Date().getMonth();
  let today = new Date(year, monthArr, 0).getTime();
  let now = new Date().getTime();
  let week = Math.round((now - today) / (1000 * 60 * 60 * 24 * 7));
  let weekElement = document.querySelector('.info__card-week');

  if (week % 2) {
    weekElement.innerHTML = 'чётная неделя'
  } else {
    weekElement.innerHTML = 'чётная неделя'
  }
}