export default () => {
  if (document.querySelector(".extra-info")) {
    document.querySelector(".extra-info__button").onclick = function () {
      document
        .querySelector(".extra-info__wrapper")
        .classList.toggle("extra-info__wrapper--open");
      document
        .querySelector(".extra-info__button")
        .classList.toggle("extra-info__button--active");
    };
  }
};
