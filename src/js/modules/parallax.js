import simpleParallax from 'simple-parallax-js';

export default () => {
    let image = document.getElementsByClassName('banner__image');
    new simpleParallax(image, {
        scale: 1.3,
    });

    let news = document.querySelector('.new-section__picture > img');
    new simpleParallax(news, {
        scale: 1.1
    });
};
