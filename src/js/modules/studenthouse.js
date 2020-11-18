export default () => {
  const tabs = document.querySelector(".hotels__tabs");
  const tabButton = document.querySelectorAll(".hotels__tab-btn");
  const contents = document.querySelectorAll(".hotels__tab");

  tabs.onclick = (e) => {
    const id = e.target.dataset.id;
    if (id) {
      tabButton.forEach((btn) => {
        btn.classList.remove("hotels__tab-btn--active");
      });
      e.target.classList.add("hotels__tab-btn--active");

      contents.forEach((content) => {
        content.classList.remove("hotels__tab--active");
      });
      const element = document.getElementById(id);
      element.classList.add("hotels__tab--active");
    }
  };
};
