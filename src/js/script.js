// modules
import { default as menuToggle } from "./modules/menu.js";
import { default as datetime } from "./modules/datetime.js";
import { default as advertisement } from "./modules/swipe.js";
import { default as slider } from "./modules/slider.js";
import { default as gauge } from "./modules/gauge.js";
import { default as cookie } from "./modules/cookie.js";
import { default as avatar } from "./modules/avatar.js";
import { default as range } from "./modules/range.js";
import { default as progressbar } from "./modules/progressbar.js";
import { default as accordeon } from "./modules/accordeon.js";
import { default as extrainfo } from "./modules/extrainfo.js";
import { default as dashboardaccordeon } from "./modules/dashboardaccordeon.js";
import { default as filterBtn } from "./modules/filter.js";
import { default as tags } from "./modules/tags.js";
import { default as chart } from "./modules/chart.js";
//Табы - вынести в отдельную функцию и инициализировать
import { default as tabs } from "./modules/tabs.js";
//import { default as studenthouse } from "./modules/studenthouse.js";
//import { default as parenttabs } from "./modules/parenttabs.js";
//import { default as moderatortabs } from "./modules/moderatorTabs.js";
//import { default as dashboardtabs } from "./modules/dashboardtabs.js";

// init modules

if (document.querySelector(".chart")) {
  chart();
}

tags();

if (document.querySelector(".js-filter-btn")) {
  filterBtn();
}
range();
if (document.querySelectorAll(".dashboard__menu")) {
  dashboardaccordeon();
}
menuToggle();
advertisement();
extrainfo();
//slider();
gauge();
if (document.querySelector(".tabs__container")) {
  tabs();
}
cookie();
avatar();
progressbar();
accordeon();

if (document.querySelector(".info__card--schedule") || document.querySelector('.hotels__tab-today')) {
  datetime();
}

//checkbox

if (document.querySelector("#iOS")) {
  const checkbox = document.querySelector("#iOS");

  checkbox.addEventListener("change", function () {
    if (this.checked) {
      document.querySelector(".parent-cabinet__tab-toggler--odd").style.color =
        "#3464E0";
      document.querySelector(".parent-cabinet__tab-toggler--even").style.color =
        "#444";
    } else {
      document.querySelector(".parent-cabinet__tab-toggler--even").style.color =
        "#3464E0";
      document.querySelector(".parent-cabinet__tab-toggler--odd").style.color =
        "#444";
    }
  });
}

document.querySelector(".page-header__sidebar-toggler").onclick = function () {
  document
    .querySelector(".dashboard__aside")
    .classList.toggle("dashboard__aside--active");
};

if (document.querySelector("#fullMenu")) {
  let menuState = document.querySelector("#fullMenu");
  let menuHeaders = document.querySelectorAll(".dashboard__menu-header");
  let menuLists = document.querySelectorAll(".dashboard__menu-list");
  let menuLinks = document.querySelectorAll(".dashboard__menu-link");
  let aside = document.querySelector(".dashboard__aside");
  menuState.addEventListener("change", function () {
    if (this.checked) {
      for (let i = 0; i < menuHeaders.length; i++) {
        menuHeaders[i].style.display = "none";
        menuLists[i].classList.add("dashboard__menu-list--active");
        menuLinks.forEach((menuLinks) => {
          menuLinks.classList.add("dashboard__menu-link" + "--short");
        });
        aside.classList.add("dashboard__aside--short");
      }
    } else {
      for (let i = 0; i < menuHeaders.length; i++) {
        menuHeaders[i].style.display = "flex";
        menuLists[i].classList.remove("dashboard__menu-list--active");
        menuLinks.forEach((menuLinks) => {
          menuLinks.classList.remove("dashboard__menu-link" + "--short");
        });
        aside.classList.remove("dashboard__aside--short");
      }
    }
  });
}


