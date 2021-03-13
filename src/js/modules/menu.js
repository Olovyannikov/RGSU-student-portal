export default () => {
    let header = document.querySelector(`.js-header`);
    let menuToggler = document.querySelector(`.js-menu-toggler`);
    let menuLinks = document.querySelectorAll(`.js-menu-link`);
    let modalLink = document.querySelectorAll(".js-menu-login");
    let modal = document.querySelector(".modal__login");
    let modalClose = document.querySelector(".js-close-button");
    let overlay = document.querySelector("#overlay-modal");
    let sideBar = document.querySelector(".page-header__sidebar-toggler");

    sideBar.addEventListener("click", function () {
        sideBar.classList.toggle("page-header__sidebar-toggler--active");
    });

    if (menuToggler && document.body.clientWidth > 1024) {
        menuToggler.addEventListener(`mouseover`, function (event) {
            if (header.classList.contains(`page-header--menu-opened`)) {
                header.classList.remove(`page-header--menu-opened`);
                document.body.classList.remove(`menu-opened`);
            } else {
                header.classList.add(`page-header--menu-opened`);
                document.body.classList.add(`menu-opened`);
            }
        });
    }
    if (menuToggler && document.body.clientWidth < 1024 && !menuToggler.classList.contains('js-menu-login')) {
        menuToggler.addEventListener(`click`, function (event) {
            if (header.classList.contains(`page-header--menu-opened`)) {
                header.classList.remove(`page-header--menu-opened`);
                document.body.classList.remove(`menu-opened`);
            } else {
                header.classList.add(`page-header--menu-opened`);
                document.body.classList.add(`menu-opened`);
            }
        });
    }

    

    document.addEventListener("click", function (e) {
        const target = e.target;
        const its_menu = target === menuLinks || menuToggler.contains(target);
        const its_btnMenu = target === menuToggler;
        const menu_is_active = header.classList.contains(
            `page-header--menu-opened`
        );

        if (!its_menu && !its_btnMenu && menu_is_active) {
            header.classList.remove(`page-header--menu-opened`);
            document.body.classList.remove(`menu-opened`);
        }
    });

    if (overlay) {
        overlay.addEventListener("click", function () {
            if (overlay.classList.contains(`active`)) {
                header.classList.remove(`page-header--menu-opened`);
                document.body.classList.remove(`menu-opened`);
                modal.classList.remove("modal--active");
                overlay.classList.remove("active");
            }
        });
    }

    if (modalLink) {
        modalLink.forEach(link => {
            link.addEventListener("click", function () {
                if (header.classList.contains(`page-header--menu-opened`) || link.classList.contains('enter__button') || link.classList.contains('js-menu-login')) {
                    modal.classList.add("modal--active");
                    overlay.classList.add("active");
                } else {
                    modal.classList.remove("modal--active");
                }
            });
        })
    }

    if (modalClose) {
        modalClose.addEventListener("click", function () {
            if (modal.classList.contains("modal--active")) {
                modal.classList.remove("modal--active");
                overlay.classList.remove("active");
            }
        });
    }

    for (let i = 0; i < menuLinks.length; i++) {
        menuLinks[i].addEventListener(`click`, function () {
            if (window.innerWidth < 1025) {
                header.classList.remove(`page-header--menu-opened`);
                document.body.classList.remove(`menu-opened`);
            }
        });
    }
};

document.body.addEventListener(
    "keyup",
    function (e) {
        let key = e.keyCode;

        if (key == 27) {
            document.querySelector(".modal__login").classList.remove("modal--active");

            document.querySelector(".overlay").classList.remove("active");
            document
                .querySelector(".js-header")
                .classList.remove("page-header--menu-opened");
        }
    },
    false
);
