export default () => {
    document
        .querySelectorAll(".fancy-select")
        .forEach((sel) => fancyMultipleSelect(sel));

    function fancyMultipleSelect(select) {
        const options = select.querySelectorAll("option");
        const fancySelectOverlay = document.createElement("div");
        const fancySelect = document.createElement("div");
        const optionsWrap = document.createElement("div");
        const selectedWrap = document.createElement("div");
        const selectCatsTxt = document.createTextNode("Выберите категорию");

        fancySelectOverlay.classList.add("fancy-select-overlay");
        fancySelect.classList.add("fancy-select-wrap");
        fancySelect.classList.add("scrollbar-custom");
        fancySelect.dataset.name = select.name;

        optionsWrap.classList.add("options");

        selectedWrap.classList.add("selected");
        selectedWrap.appendChild(selectCatsTxt);

        fancySelect.appendChild(fancySelectOverlay);
        fancySelect.appendChild(selectedWrap);
        fancySelect.appendChild(optionsWrap);

        fancySelectOverlay.addEventListener('click', () => {
            fancySelect.classList.remove('expanded');
        })

        options.forEach((opt) => {
            const option = document.createElement("div");
            const text = document.createTextNode(opt.textContent);

            option.appendChild(text);

            if (opt.classList.contains("subopt"))
                option.classList.add("subopt");

            option.dataset.value = opt.value;
            option.dataset.selected = opt.selected ? "1" : "0";

            option.addEventListener("click", function (e) {
                if (this.dataset.selected === "1") {
                    this.dataset.selected = "0";

                    select.querySelectorAll(
                        `option[value="${this.dataset.value}"]`
                    ).selected = false;
                } else {
                    this.dataset.selected = "1";
                    select.querySelector(
                        `option[value="${this.dataset.value}"]`
                    ).selected = true;
                }

                refreshSelecteds(fancySelect);
            });

            optionsWrap.appendChild(option);
        });

        selectedWrap.addEventListener("click", function () {
            this.parentNode.classList.toggle("expanded");
        });

        select.parentNode.insertBefore(fancySelect, select);

        refreshSelecteds(fancySelect);
    }

    function refreshSelecteds(fancySelect) {
        // Nodes of selected opts inside fancySelect
        const selectedOptions = fancySelect.querySelectorAll(
            '.options [data-selected="1"]'
        );

        // Original select
        const originalSelect = fancySelect.nextElementSibling;

        // Wrapper for our selected opts spans
        const selectedWrap = fancySelect.querySelector(".selected");

        // Remove currently selected options
        while (selectedWrap.firstChild) {
            selectedWrap.removeChild(selectedWrap.firstChild);
        }

        if (selectedOptions.length < 1) {
            // No selected options, show empty msg
            const selectCatsTxt = document.createTextNode("Выберите категорию");
            selectedWrap.appendChild(selectCatsTxt);
        } else {
            const usedOpts = [];

            // Create selected opts spans and add to wrapper
            selectedOptions.forEach((opt) => {
                // Prevent repeats
                if (usedOpts.includes(opt.dataset.value)) return;

                const span = document.createElement("span");
                const text = document.createTextNode(opt.textContent);

                span.appendChild(text);

                span.addEventListener("click", function (e) {
                    e.stopImmediatePropagation();
                    opt.dataset.selected = "0";
                    originalSelect.querySelector(
                        `option[value="${opt.dataset.value}"]`
                    ).selected = false;

                    refreshSelecteds(fancySelect);
                });

                selectedWrap.appendChild(span);

                usedOpts.push(opt.dataset.value);
            });
        }
    }
};
