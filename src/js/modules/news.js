(function() {
        export default () => {
        const modifiers = {
            controlActive: 'news__control--active',
            indicatorActive: 'active',
        };

        const elRoot = document.querySelector('.news');
        const elsItem = elRoot.querySelectorAll('.js-slider__item');
        const elItems = elRoot.querySelector('.js-slider__items');
        const elNext = elRoot.querySelector('.js-slider__next');
        const elPrevious = elRoot.querySelector('.js-slider__previous');
        const elIndicators = elRoot.querySelector('.js-slider__indicators');
        let firstIndicator = elIndicators.querySelector('.first');
        let secondIndicator = elIndicators.querySelector('.second');
        let thirdIndicator = elIndicators.querySelector('.third');

        //Max value is scrollWidth - clientWidth, since it's the right side of the block
        const maxScrollValue = elItems.scrollWidth - elRoot.clientWidth;
        //State values
        let currentSlide = 0;
        let currentX = 0;

        //Toggle controls visibility
        const updateControls = () => {
            //Hide previous button if we are at the start
            elPrevious.classList.toggle(modifiers.controlActive, currentX !== 0);
            firstIndicator.classList.toggle(modifiers.indicatorActive,currentX === 0);
            secondIndicator.classList.toggle(modifiers.indicatorActive, currentX !== 0 && currentX < maxScrollValue);
            thirdIndicator.classList.toggle(modifiers.indicatorActive, currentX === maxScrollValue)
            //Hide next button if we are at the end
            elNext.classList.toggle(modifiers.controlActive, currentX < maxScrollValue);
        }

        //Slide to card by its index
        const slideTo = (index) => {
            //Check for minimal/maximal valid endexes
            if(index < 0 || index > elItems.length - 1) return;

            //Get total width of all items. CSS is built the way that items don't have any offsets between them.
            //Padding are used for that reason
            let scrollValue = 0;
            for(let i = 0; i < index; i++) {
                scrollValue += elsItem[i].clientWidth;
            }

            //Limit by maximal scroll value
            const targetValue = Math.min(scrollValue, maxScrollValue);

            //Scroll to card
            elItems.scrollTo({left: targetValue, behavior: 'smooth'});

            //Update state values and controls
            currentSlide = index;
            currentX = targetValue;
            updateControls();
        };

        //Update controls on page load, They start hidden not to have visible controls that can't be clicked while js still loads.
        updateControls();

        //Whenever you click controls you go to next or previous index
        elNext.addEventListener('click', () => slideTo(currentSlide + 1));
        elPrevious.addEventListener('click', () => slideTo(currentSlide - 1));

    })();
}