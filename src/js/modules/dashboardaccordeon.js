export default () => {
    let menuTogglers = document.querySelectorAll(".dashboard__menu-header");
    let menuButtons = document.querySelectorAll(".dashboard__menu-button");
    let menuList = document.querySelectorAll(".dashboard__menu-list");

    if (menuButtons) {
        for (let i = 0; i < menuTogglers.length; i++) {
            menuTogglers[i].onclick = (e) => {
                menuButtons.forEach((btn) => {
                    if (
                        e.target.parentNode.querySelector(
                            ".dashboard__menu-button"
                        )
                    ) {
                        e.target.parentNode
                            .querySelector(".dashboard__menu-button")
                            .classList.toggle("dashboard__menu-button--active");
                        localStorage.activeEl = 'dashboard__menu-button--active';
                    } else {
                        menuList[i].classList.remove(
                            "dashboard__menu-list--active"
                        );
                    }

                });
                menuList[i].classList.toggle("dashboard__menu-list--active");
            };
        }
    }
};
