import Swiper, {Navigation, Pagination, Scrollbar} from "swiper";

export default () => {
    Swiper.use([Navigation, Pagination, Scrollbar]);

    let advertisement = new Swiper('.advertisement__container', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        pagination: {
            el: '.advertisement-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.advertisement-button-next',
            prevEl: '.advertisement-button-prev',
        },
    });

    let news = new Swiper('.news__container', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        pagination: {
            el: '.news-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.news-button-next',
            prevEl: '.news-button-prev',
        },
    });

    let info = new Swiper('.info-container', {
        slidesPerView: 'auto',
        spaceBetween: 12,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });

    let services = new Swiper('.services__slider', {
        slidesPerView: 'auto',
        spaceBetween: 12,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    let faq = new Swiper('.faq__slider', {
        slidesPerView: 'auto',
        spaceBetween: 12,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    let partners = new Swiper('.partners__wrapper', {
        slidesPerView: 6,
        slidesPerGroup: 6,
        spaceBetween: 30,
        loop: 'true',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 6,
                spaceBetween: 30
            }
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        }
    });

}