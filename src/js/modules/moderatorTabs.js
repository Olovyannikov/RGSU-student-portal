export default () => {
    const tabs = document.querySelector(".moderator__container");
    const tabButton = document.querySelectorAll(".moderator__button");
    const contents = document.querySelectorAll(".moderator__tab");

    tabs.onclick = e => {
        const id = e.target.dataset.id;
        if (id) {
            tabButton.forEach(btn => {
                btn.classList.remove("moderator__button--active");
            });
            e.target.classList.add("moderator__button--active");

            contents.forEach(content => {
                content.classList.remove("moderator__tab--active");
            });
            const element = document.getElementById(id);
            element.classList.add("moderator__tab--active");
        }
    }
}