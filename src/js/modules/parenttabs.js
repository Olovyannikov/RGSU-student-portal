export default () => {
    const tabs = document.querySelector(".parent-cabinet__tabs");
    const tabButton = document.querySelectorAll(".parent-cabinet__button");
    const contents = document.querySelectorAll(".parent-cabinet__tab");

    tabs.onclick = e => {
        const id = e.target.dataset.id;
        if (id) {
            tabButton.forEach(btn => {
                btn.classList.remove("parent-cabinet__button--active");
            });
            e.target.classList.add("parent-cabinet__button--active");

            contents.forEach(content => {
                content.classList.remove("parent-cabinet__tab--active");
            });
            const element = document.getElementById(id);
            element.classList.add("parent-cabinet__tab--active");
        }
    }
}