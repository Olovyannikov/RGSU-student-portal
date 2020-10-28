export default () => {
  let header = document.querySelector(`.js-header`);
  let menuToggler = document.querySelector(`.js-menu-toggler`);
  let menuLinks = document.querySelectorAll(`.js-menu-link`);
  let modalLink = document.querySelector('.js-menu-login');
  let modal = document.querySelector('.modal');
  let modalClose = document.querySelector('.js-close-button');

  if (menuToggler) {
    menuToggler.addEventListener(`click`, function () {
      if (header.classList.contains(`page-header--menu-opened`)) {
        header.classList.remove(`page-header--menu-opened`);
        document.body.classList.remove(`menu-opened`);
      } else {
        header.classList.add(`page-header--menu-opened`);
        document.body.classList.add(`menu-opened`);
      }
    });
  }

  if (modalLink) {
    modalLink.addEventListener('click', function () {
      if (header.classList.contains(`page-header--menu-opened`)) {
        modal.classList.add('modal--active');
      } else {
        modal.classList.remove('modal--active');
      }
    });
  }

  if (modalClose) {
    modalClose.addEventListener('click', function () {
      if (modal.classList.contains('modal--active')) {
        modal.classList.remove('modal--active')
      }
      else {
        return
      }
    })
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
