export default () => {
    class RangeSlider {
        constructor(element, settings) {
            this.settings = Object.assign(
                {
                    clsOutput: "c-rng__output",
                    clsOutputWrapper: "c-rng--output",
                    rangeOutput: false,
                    rangeType: "",
                    varPercent: "--rng-percent",
                    varPercentUpper: "--rng-percent-upper",
                    varThumb: "--rng-thumb-w",
                    varUnit: "--rng-unit",
                    varValue: "--rng-value",
                },
                stringToType(settings)
            );

            this.initRange(element);
        }

        /**
         * @function initRange
         * @param {Node} range
         * @description Initialize: Create elements, add eventListeners etc.
         */
        initRange(range) {
            const id = range.id || uuid();
            const min = parseInt(range.min, 10);
            const multiplier = 100 / ((parseInt(range.max, 10) || 100) - min);

            range.__lower =
                this.settings.rangeType === "upper"
                    ? range.parentNode.querySelector(
                          `[data-range-type="lower"]`
                      )
                    : null;
            range.__upper =
                this.settings.rangeType === "lower"
                    ? range.parentNode.querySelector(
                          `[data-range-type="upper"]`
                      )
                    : null;
            range.__output = this.settings.rangeOutput
                ? document.createElement("output")
                : null;

            if (range.__output) {
                range.__output.for = id;
                range.__output.className = this.settings.clsOutput;
                range.__output.style.setProperty(
                    this.settings.varThumb,
                    getComputedStyle(range).getPropertyValue(
                        this.settings.varThumb
                    )
                );
                range.id = id;

                if (!range.dataset.rangeType) {
                    const wrapper = document.createElement("div");
                    wrapper.classList.add(this.settings.clsOutputWrapper);
                    range.parentNode.insertBefore(wrapper, range);
                    wrapper.appendChild(range.__output);
                    wrapper.appendChild(range);
                } else {
                    range.parentNode.insertBefore(range.__output, range);
                }
            }

            range.addEventListener("input", () => {
                this.updateRange(range, min, multiplier);
            });
            range.dispatchEvent(new Event("input"));
        }

        /**
         * @function updateRange
         * @param {Node} range
         * @param {Number} [minRange]
         * @param {Number} [multiplier]
         * @description Updates CSS Custom Props when range-input is modified
         */
        updateRange(range, minRange = 0, multiplier = 1) {
            if (range.__lower && range.dataset.rangeDiff) {
                const minValue =
                    range.dataset.rangeDiff - 0 + range.__lower.valueAsNumber;
                if (minValue > range.valueAsNumber) {
                    range.value = minValue;
                    return;
                }
            }
            if (range.__upper && range.dataset.rangeDiff) {
                const maxValue =
                    range.__upper.valueAsNumber - (range.dataset.rangeDiff - 0);
                if (maxValue < range.valueAsNumber) {
                    range.value = maxValue;
                    return;
                }
            }
            const value = (range.valueAsNumber - minRange) * multiplier;
            range.style.setProperty(this.settings.varPercent, `${value}%`);
            range.style.setProperty(
                this.settings.varValue,
                `${range.valueAsNumber}`
            );

            if (range.__lower) {
                range.__lower.style.setProperty(
                    this.settings.varPercentUpper,
                    `${value}%`
                );
            }
            if (range.__output) {
                range.__output.style.setProperty(
                    this.settings.varUnit,
                    `${value}`
                );
                range.__output.innerText = range.value;
            }
        }
    }

    function stringToType(obj) {
        const object = Object.assign({}, obj);
        Object.keys(object).forEach((key) => {
            if (
                typeof object[key] === "string" &&
                object[key].charAt(0) === ":"
            ) {
                object[key] = JSON.parse(object[key].slice(1));
            }
        });
        return object;
    }

    function uuid() {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) => {
            return (
                c ^
                (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
            ).toString(16);
        });
    }

    /* Demo: Run it */
    const elements = document.querySelectorAll('[data-js="range"]');
    elements.forEach((element) => {
        new RangeSlider(element, element.dataset);
    });
};
