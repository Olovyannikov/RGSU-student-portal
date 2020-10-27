export default () => {
    const tabs = document.querySelector(".portfolio-tabs__container");
    const tabButton = document.querySelectorAll(".portfolio-tabs__button");
    const contents = document.querySelectorAll(".portfolio-tabs__article");

    tabs.onclick = e => {
        const id = e.target.dataset.id;
        if (id) {
            tabButton.forEach(btn => {
                btn.classList.remove("portfolio-tabs__button--active");
            });
            e.target.classList.add("portfolio-tabs__button--active");

            contents.forEach(content => {
                content.classList.remove("portfolio-tabs__article--active");
            });
            const element = document.getElementById(id);
            element.classList.add("portfolio-tabs__article--active");
        }
    }
}