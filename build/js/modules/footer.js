"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default() {
  var footerTogglers = document.querySelectorAll(".js-footer-toggler");

  if (footerTogglers.length) {
    var _loop = function _loop(i) {
      footerTogglers[i].addEventListener("click", function () {
        var footer = footerTogglers[i].parentNode;

        if (footer.classList.contains("screen__footer--full")) {
          footer.classList.remove("screen__footer--full");
        } else {
          footer.classList.add("screen__footer--full");
        }
      });
    };

    for (var i = 0; i < footerTogglers.length; i++) {
      _loop(i);
    }
  }
};

exports["default"] = _default;