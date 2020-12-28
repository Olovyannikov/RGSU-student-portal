// modules

import { default as menuToggle } from "./modules/menu.js";
import { default as datetime } from "./modules/datetime.js";
import { default as swiper } from "./modules/swipe.js";
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
import { default as tabs } from "./modules/tabs.js";
import { default as modals } from "./modules/modal.js";
import { default as parallax } from "./modules/parallax.js";
import { default as tinygesture } from "./modules/tinygesture.js";
// init modules

window.onload = function () {
    swiper();
};


modals();

if (document.querySelector(".chart")) {
    chart();
}

function addElement() {
    // Создаем новый элемент div
    // и добавляем в него немного контента

    let footerBar = document.createElement("button");
    footerBar.classList.add("footer__bar");

    // Добавляем только что созданый элемент в дерево DOM

    document.querySelector("#footer").appendChild(footerBar);
}

if (document.querySelector(".footer__container").offsetWidth > 768) {
    document
        .querySelector(".footer__container")
        .classList.remove("visually-hidden");
} else if (document.querySelector(".footer__container").offsetWidth <= 768) {
    document
        .querySelector(".footer__container")
        .classList.add("visually-hidden");
    addElement();
}

if (document.querySelector(".footer__bar")) {
    tinygesture();
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

if (
    document.querySelector(".info__card--schedule") ||
    document.querySelector(".hotels__tab-today")
) {
    datetime();
}

//checkbox

if (document.querySelector("#iOS")) {
    const checkbox = document.querySelector("#iOS");

    checkbox.addEventListener("change", function () {
        if (this.checked) {
            document.querySelector(
                ".parent-cabinet__tab-toggler--odd"
            ).style.color = "#3464E0";
            document.querySelector(
                ".parent-cabinet__tab-toggler--even"
            ).style.color = "#444";
        } else {
            document.querySelector(
                ".parent-cabinet__tab-toggler--even"
            ).style.color = "#3464E0";
            document.querySelector(
                ".parent-cabinet__tab-toggler--odd"
            ).style.color = "#444";
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
                    menuLinks.classList.remove(
                        "dashboard__menu-link" + "--short"
                    );
                });
                aside.classList.remove("dashboard__aside--short");
            }
        }
    });
}

parallax();


import {
    $, addClass, removeClass, toggleClass, on
    , parents, attr, hasClass, find, ajax, removeAttr,
    removeData, html, serialize, val, siblings, prop
} from './vendor/dom7/dom7.js';

// install methods
$.fn.addClass = addClass;
$.fn.removeClass = removeClass;
$.fn.toggleClass = toggleClass;
$.fn.on = on;
$.fn.parents = parents;
$.fn.attr = attr;
$.fn.hasClass = hasClass;
$.fn.find = find;
$.fn.ajax = ajax;
$.fn.removeAttr = removeAttr;
$.fn.removeData = removeData;
$.fn.html = html;
$.fn.serialize = serialize;
$.fn.val = val;
$.fn.siblings = siblings;
$.fn.prop = prop;

$('.js-header').addClass('it-is-working!'); //Проверка:))
