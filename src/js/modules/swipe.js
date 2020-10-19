import Swiper, {Navigation, Pagination} from "swiper";

export default () => {
    Swiper.use([Navigation, Pagination]);

    var swiper = new Swiper('.advertisement__container', {
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
}