// modules
import { default as menuToggle } from "./modules/menu.js";
import { default as datetime } from "./modules/datetime.js";
import { default as advertisement } from "./modules/swipe.js";
import { default as slider } from "./modules/slider.js";
import { default as gauge } from "./modules/gauge.js";
import { default as tabs } from "./modules/tabs.js";
import { default as cookie } from "./modules/cookie.js";

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

//avatar
let avatars = document.querySelectorAll(".progress--circle");

for (let i = 0; i < avatars.length; i++) {
  avatars[i].classList.add(
    "progress--" + avatars[i].getAttribute("data-progress")
  );
}

//range-slider
const twoRangeSlider = (() => {
  const rangeCheck = (rangeInputs, rangeMinOutput, rangeMaxOutput) => {
    const rangeMin = rangeInputs[0].min ? rangeInputs[0].min : 0;
    const rangeMax = rangeInputs[0].max ? rangeInputs[0].max : 100;
    let rangeMinValue = parseInt(rangeInputs[1].value);
    let rangeMaxValue = parseInt(rangeInputs[0].value);

    rangeMinValue = Math.min(Math.max(rangeMinValue, rangeMin), rangeMaxValue);

    // Calculate the percentage of the background where the thumb is
    const rangeMinPercentage = Number(
        ((rangeMinValue - rangeMin) * 100) / (rangeMax - rangeMin));
    const rangeMaxPercentage = Number(
        ((rangeMaxValue - rangeMin) * 100) / (rangeMax - rangeMin));

    // Update the background to reflect the change
    rangeInputs[0].style.background = `linear-gradient(to right,#3464E0 ${rangeMaxPercentage}%, #c3cad6 ${rangeMaxPercentage}%)`;
    rangeInputs[1].style.background = `linear-gradient(to right,#c3cad6 ${rangeMinPercentage}%, transparent ${rangeMinPercentage}%)`;

    // Update value on screen
    rangeMinOutput.innerHTML = `${rangeMinValue}`;
    rangeMaxOutput.innerHTML = `${rangeMaxValue}`;
  };

  const bindComponent = (item) => {
    const rangeInputs = item.querySelectorAll('.js-two-range-slider-input');
    const rangeMinOutput = item.querySelector('.js-two-range-slider-min-value');
    const rangeMaxOutput = item.querySelector('.js-two-range-slider-max-value');


    item.addEventListener("input", () => {
      rangeCheck(rangeInputs, rangeMinOutput, rangeMaxOutput);
      let left = rangeMinOutput.value * 2 * 2.5;
      let right = rangeMaxOutput.value * 2 * 2.5
      rangeMinOutput.style.left = left + 'px';
      rangeMaxOutput.style.left = right + 'px';
    });

    rangeCheck(rangeInputs, rangeMinOutput, rangeMaxOutput);
  };

  const init = () => {
    const rootEl = document.getElementsByClassName("js-two-range-slider");
    [...rootEl].forEach((item) => bindComponent(item));
  };

  return {
    init
  };
})();

twoRangeSlider.init();
