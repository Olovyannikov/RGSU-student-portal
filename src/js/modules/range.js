export default () => {
  const twoRangeSlider = (() => {
    const rangeCheck = (rangeInputs, rangeMinOutput, rangeMaxOutput) => {
      const rangeMin = rangeInputs[0].min ? rangeInputs[0].min : 0;
      const rangeMax = rangeInputs[0].max ? rangeInputs[0].max : 100;
      let rangeMinValue = parseInt(rangeInputs[1].value) ;
      let rangeMaxValue = parseInt(rangeInputs[0].value);

      rangeMinValue = Math.min(
        Math.max(rangeMinValue, rangeMin),
        rangeMaxValue
      );

      // Calculate the percentage of the background where the thumb is
      const rangeMinPercentage = Number(
        ((rangeMinValue - rangeMin) * 100) / (rangeMax - rangeMin)
      );
      const rangeMaxPercentage = Number(
        ((rangeMaxValue - rangeMin) * 100) / (rangeMax - rangeMin)
      );

      // Update the background to reflect the change
      rangeInputs[0].style.background = `linear-gradient(to right,#3464E0 ${rangeMaxPercentage}%, #c3cad6 ${rangeMaxPercentage}%)`;
      rangeInputs[1].style.background = `linear-gradient(to right,#c3cad6 ${rangeMinPercentage}%, transparent ${rangeMinPercentage}%)`;

      // Update value on screen
      rangeMinOutput.innerHTML = `${rangeMinValue}`;
      rangeMaxOutput.innerHTML = `${rangeMaxValue}`;
    };

    const bindComponent = (item) => {
      const rangeInputs = item.querySelectorAll(".js-two-range-slider-input");
      const rangeMinOutput = item.querySelector(
        ".js-two-range-slider-min-value"
      );
      const rangeMaxOutput = item.querySelector(
        ".js-two-range-slider-max-value"
      );

      item.addEventListener("input", () => {
        rangeCheck(rangeInputs, rangeMinOutput, rangeMaxOutput);
        for (let i = 0; i < rangeInputs.length; i++) {
          let directions = {
            left:
              (rangeMinOutput.value /
                  rangeInputs[i].getAttribute("max")) *
              100,
            right:
              (rangeMaxOutput.value /
                  rangeInputs[i].getAttribute("max")) *
              100,
          };
          rangeMinOutput.style.left = directions.left + "%";
          rangeMaxOutput.style.left = directions.right + "%";
        }


        function toFormat(str){
          return str.split('').reverse().join('')
              .match(/\d{0,3}/g).join(' ')
              .split('').reverse().join('').trim()
        }

            if(
                rangeMinOutput.classList.contains('range-money')) {
            let res = toFormat(rangeMinOutput.value);
              rangeMinOutput.innerHTML =  res + ' ₽';
            }
            if (rangeMaxOutput.classList.contains('range-money')) {

              let res = toFormat(rangeMaxOutput.value);
              rangeMaxOutput.innerHTML =  res + ' ₽';
            }
      });

      rangeCheck(rangeInputs, rangeMinOutput, rangeMaxOutput);
    };

    const init = () => {
      const rootEl = document.getElementsByClassName("js-two-range-slider");
      [...rootEl].forEach((item) => bindComponent(item));
    };

    return {
      init,
    };
  })();

  twoRangeSlider.init();
};
