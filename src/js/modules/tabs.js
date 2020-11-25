export default () => {
    const tabs = document.querySelector(".tabs__container");
    const tabButton = document.querySelectorAll(".tabs__button");
    const contents = document.querySelectorAll(".tabs__item");

    tabs.onclick = (e) => {
        const id = e.target.dataset.id;
        if (id) {
            tabButton.forEach((btn) => {
                btn.classList.remove("tabs__button--active");
            });
            e.target.classList.add("tabs__button--active");

            contents.forEach((content) => {
                content.classList.remove("tabs__item--active");
            });
            const element = document.getElementById(id);
            element.classList.add("tabs__item--active");
        }
    };
};
