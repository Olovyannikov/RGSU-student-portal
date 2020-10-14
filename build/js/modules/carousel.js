export default () => {
let cards = document.querySelectorAll('.card'),
    controls = document.querySelectorAll('.card__control-button'),
    transforms = [
        {
            x: '-12%',
            z: '-50px',
            scale: 0.8,
            opacity: 0.8,
            filter: 'blur(2px)'
        },
        {
            x: 0,
            z: 0,
            scale: 1,
            opacity: 1,
            filter: 'blur(0)'
        },

        {
            x: '12%',
            z: '-50px',
            scale: 0.8,
            opacity: 0.8,
            filter: 'blur(2px)'
        }


    ];

let nextTransform = function (x) {
    if (x >= cards.length - 1) {
        x = 0;
    } else {
        x++;
    }
    return x;
};

function next() {
    for (let i = 0; i < cards.length; i++) {
        let transform = () => {
            cards[i].style.transform =
                'translateX(' + transforms[nextTransform(i)].x + ')' +
                'translateZ(' + transforms[nextTransform(i)].z + ')' +
                'scale(' + transforms[nextTransform(i)].scale + ')';
            cards[i].style.opacity = transforms[nextTransform(i)].opacity;
            cards[i].style.filter = transforms[nextTransform(i)].filter;
        }
        transform();
        if(cards[i].style.opacity == 1) {
            controls[i].classList.add('card__control-button--active');
        } else {
            controls[i].classList.remove('card__control-button--active');
        }
    }
    transforms.push(transforms.shift());
}

let carousel = document.querySelector('#carousel');
let hover;
carousel.addEventListener('mousemove', () => hover = 1);
carousel.addEventListener('mouseout', () => hover = 0);

let timerId = setInterval(() => !hover && next(), 5000);
}
