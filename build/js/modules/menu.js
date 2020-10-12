"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default() {
  var header = document.querySelector(".js-header");
  var menuToggler = document.querySelector(".js-menu-toggler");
  var menuLinks = document.querySelectorAll(".js-menu-link");

  if (menuToggler) {
    menuToggler.addEventListener("click", function () {
      if (header.classList.contains("page-header--menu-opened")) {
        header.classList.remove("page-header--menu-opened");
        document.body.classList.remove("menu-opened");
      } else {
        header.classList.add("page-header--menu-opened");
        document.body.classList.add("menu-opened");
      }
    });
  }

  for (var i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener("click", function () {
      if (window.innerWidth < 1025) {
        header.classList.remove("page-header--menu-opened");
        document.body.classList.remove("menu-opened");
      }
    });
  }
};

exports["default"] = _default;