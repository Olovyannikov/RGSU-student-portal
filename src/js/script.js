// modules
import { default as menuToggle } from "./modules/menu.js";
import { default as datetime } from "./modules/datetime.js";
import { default as advertisement } from "./modules/swipe.js";
import { default as slider } from "./modules/slider.js";
import { default as gauge } from "./modules/gauge.js";
import { default as tabs } from "./modules/tabs.js";
import { default as cookie } from "./modules/cookie.js";
import { default as avatar } from "./modules/avatar.js";
import { default as range } from "./modules/range.js";
import { default as progressbar } from "./modules/progressbar.js";
import { default as accordeon } from "./modules/accordeon.js";

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
progressbar();
accordeon();

//extra-info
if (document.querySelector(".extra-info") == true) {
  document.querySelector(".extra-info__button").onclick = function () {
    document
      .querySelector(".extra-info__wrapper")
      .classList.toggle("extra-info__wrapper--open");
    document
      .querySelector(".extra-info__button")
      .classList.toggle("extra-info__button--active");
  };
}
