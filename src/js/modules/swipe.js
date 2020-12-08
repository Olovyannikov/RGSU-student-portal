import Swiper, {Navigation, Pagination, Mousewheel} from "swiper";

export default () => {
    Swiper.use([Navigation, Pagination, Mousewheel]);

    let newsblock = new Swiper('.news__slider-other', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        breakpoints: {
            768: {
                spaceBetween: 20,slidesPerView: 'auto',
            },
            1024: {
                spaceBetween: 30,slidesPerView: 'auto',
            }
        }
    });

    let advertisement = new Swiper('.advertisement__slider', {
        slidesPerView: '1',
        spaceBetween: 30,
        pagination: {
            el: '.advertisement-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.advertisement-button-next',
            prevEl: '.advertisement-button-prev',
        },
        breakpoints: {
            768: {
                spaceBetween: 20,slidesPerView: 'auto',
            },
            1250: {
                spaceBetween: 30,slidesPerView: '2',
            },
            1251: {
                slidesPerView: 'auto'
            }
        },
        mousewheel: {
            forceToAxis: true,
        },
    });

    let news = new Swiper('.news__slider', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        mousewheel: {
            forceToAxis: true,
        },
        pagination: {
            el: '.news-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.news-button-next',
            prevEl: '.news-button-prev',
        },
        breakpoints: {
            768: {
                spaceBetween: 20,slidesPerView: 'auto',
            },
            1250: {
                spaceBetween: 30,slidesPerView: '2',
            },
            1251: {
                slidesPerView: 'auto'
            }
        },
    });

    let info = new Swiper('.info-container', {
        slidesPerView: 'auto',
        spaceBetween: 12,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            1024: {
                watchOverflow: true
            }
        }
    });

    let services = new Swiper('.services__container', {
        slidesPerView: 3,
        spaceBetween: 12,
        pagination: {
            el: '.services-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.services-button-next',
            prevEl: '.services-button-prev',
        },
        breakpoints: {
            1200: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            320: {
                slidesPerView: 1,
            }
        }
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
        mousewheel: {
            forceToAxis: true,
        },
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
    });
}
