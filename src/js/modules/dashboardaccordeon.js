export default () => {
    let menuTogglers = document.querySelectorAll('.dashboard__menu-header');
    let menuButtons = document.querySelectorAll('.dashboard__menu-button');
    let menuList = document.querySelectorAll('.dashboard__menu-list');

    for (let i = 0; i < menuTogglers.length; i++) {
        menuTogglers[i].onclick = e => {
            menuButtons[i].classList.toggle('dashboard__menu-button--active');
            menuList[i].classList.toggle('dashboard__menu-list--active');
        }
    }
}