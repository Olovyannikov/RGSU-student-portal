// modules
import { default as menuToggle } from "./modules/menu.js";
import { default as datetime } from "./modules/datetime.js";
import { default as advertisement } from "./modules/swipe.js";
import { default as slider } from "./modules/slider.js";
import { default as gauge } from "./modules/gauge.js";
import { default as tabs } from "./modules/tabs.js";
import { default as cookie } from "./modules/cookie.js";
import {default as avatar} from "./modules/avatar.js";
import {default as range} from "./modules/range.js";

// init modules
menuToggle();
if (document.querySelector(".info__card-date ") === true) {
  datetime();
}
advertisement();
//slider();
gauge();
if (document.querySelector(".portfolio-tabs__container") === true) {
  tabs();
}
cookie();
avatar();
range();


//extra-info
document.querySelector('.extra-info__button').onclick = function () {
  document.querySelector('.extra-info__wrapper').classList.toggle('extra-info__wrapper--open');
  document.querySelector('.extra-info__button').classList.toggle('extra-info__button--active');
}

//progress-bar
let progresses = document.querySelectorAll('.progress-bar');
let progressInfos = document.querySelectorAll('.progress-info');

for(let i = 0; i < progressInfos.length; i++) {
  progressInfos[i].innerHTML = progresses[i].getAttribute('data-progress');
  if (progresses[i].getAttribute('data-progress') < 50) {
    progresses[i].style.backgroundColor = '#F49617';
    progressInfos[i].style.color = '#F49617';
  }
  if (progresses[i].getAttribute('data-progress') < 20) {
    progresses[i].style.backgroundColor = '#E06364';
    progressInfos[i].style.color = '#E06364';
  }
}

progresses.forEach(function (progress){
  setTimeout(() => {
    let progressVal = Number(progress.dataset.value);
    progress.style.opacity = 1;
    progress.style.width = progress.getAttribute('data-progress') + '%';
  }, 500)
})
