"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default() {
  var socialBlock = document.querySelector(".js-social-block");
  socialBlock.addEventListener("mouseover", function () {
    socialBlock.classList.add("social-block--active");
  });
  socialBlock.addEventListener("mouseleave", function () {
    socialBlock.classList.remove("social-block--active");
  });
};

exports["default"] = _default;