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
import { default as extrainfo } from "./modules/extrainfo.js";
import { default as parenttabs} from "./modules/parenttabs.js";

// init modules
menuToggle();
advertisement();
extrainfo();
//slider();
gauge();
if (document.querySelector(".portfolio-tabs__container")) {
  tabs();
}
cookie();
avatar();
range();
progressbar();
accordeon();
parenttabs();

if (document.querySelector(".info__card--schedule")) {
  datetime();
}
