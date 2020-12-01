import simpleParallax from 'simple-parallax-js';

export default () => {
    let image = document.getElementsByClassName('banner__image');
    new simpleParallax(image, {
        scale: 1.3,
    });
}
