export default () => {
    const tabs = document.querySelector(".settings__tabs");
    const tabButton = document.querySelectorAll(".settings__tabs-btn");
    const contents = document.querySelectorAll(".settings__tab");

    tabs.onclick = e => {
        const id = e.target.dataset.id;
        if (id) {
            tabButton.forEach(btn => {
                btn.classList.remove("settings__tabs-btn--active");
            });
            e.target.classList.add("settings__tabs-btn--active");

            contents.forEach(content => {
                content.classList.remove("settings__tab--active");
            });
            const element = document.getElementById(id);
            element.classList.add("settings__tab--active");
        }
    }
}