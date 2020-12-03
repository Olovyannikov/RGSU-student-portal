export default () => {
  let filterBtn = document.querySelector(".js-filter-btn");

    const currentState = localStorage.getItem("state");
    if (currentState === "active") {

        filterBtn.classList.add("vacancy__filter-button--active");
        document.querySelector('.vacancy__filter').classList.add('vacancy__filter--active');
    }

    filterBtn.addEventListener("click", function () {
;
        let value = "active";
        if (filterBtn.classList.contains("vacancy__filter-button--active")) {
            value = "disabled";
        }
        localStorage.setItem("state", value);
    });
  filterBtn.addEventListener("click", function () {
    filterBtn.classList.toggle('vacancy__filter-button--active');
    document.querySelector('.vacancy__filter').classList.toggle('vacancy__filter--active')
  });
};





