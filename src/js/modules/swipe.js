import Swiper, {Navigation, Pagination} from "swiper";

export default () => {
    Swiper.use([Navigation, Pagination]);

    let advertisement = new Swiper('.advertisement__container', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    let news = new Swiper('.news__container', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    let info = new Swiper('.info-container', {
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });
}