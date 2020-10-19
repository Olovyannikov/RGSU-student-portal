// modules
import {default as menuToggle} from './modules/menu.js';
import {default as datetime} from './modules/datetime.js';
import {default as slider} from './modules/slider.js';
import {default as news} from './modules/news.js';
import Swiper, { Navigation, Pagination } from 'swiper';
import {default as advertisement} from './modules/swipe.js';

// init modules
menuToggle();
if (document.querySelector('.js-slider__item') == true) {
    slider();
}
datetime();
news();
advertisement();