const tab = class Tab {
    constructor(container, options) {
        this.$el = document.querySelector(container);
        this.options = options;
        this.selectedTab = options.selectedTab;
        this.buttons = this.$el.querySelector(options.buttonWrapper);
        this.contents = this.$el.querySelectorAll(options.contents);
        this.button = this.$el.querySelectorAll(options.button);
        this.wrapper = document.querySelector(options.wrapper);

        this.wrapper.onclick = (e) => {
            const id = e.target.dataset.id;
            if (id) {
                this.button.forEach((btn) => {
                    btn.classList.remove("tabs__button--active");
                });
                e.target.classList.add("tabs__button--active");

                this.contents.forEach((content) => {
                    content.classList.remove("tabs__item--active");
                });
                const element = document.getElementById(id);
                element.classList.add("tabs__item--active");
            }
        };
    }
};
export default () => {
    const tabsObj = new tab(`.tabs__container`, {
        buttonWrapper: ".tabs__buttons",
        button: ".tabs__button",
        contents: ".tabs__item",
        wrapper: ".tabs__container",
    });

};
