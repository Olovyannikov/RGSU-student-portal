export default () => {
  let filterBtn = document.querySelector(".js-filter-btn");

  filterBtn.addEventListener("click", function () {
    filterBtn.classList.toggle('vacancy__filter-button--active');
  });
};
