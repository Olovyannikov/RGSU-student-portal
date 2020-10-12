"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default() {
  var emailFields = document.querySelectorAll("input[type=\"email\"]");

  var adaptPlaceholder = function adaptPlaceholder(el) {
    if (window.innerWidth / window.innerHeight < 1 || window.innerWidth < 769) {
      el.placeholder = "e-mail";
    } else {
      el.placeholder = "e-mail \u0434\u043B\u044F \u0440\u0435\u0433\u0438\u0441\u0442\u0430\u0446\u0438\u0438 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430 \u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u043F\u0440\u0438\u0437\u0430";
    }
  };

  var _loop = function _loop(i) {
    adaptPlaceholder(emailFields[i]);
    window.addEventListener("resize", function () {
      adaptPlaceholder(emailFields[i]);
    });
  };

  for (var i = 0; i < emailFields.length; i++) {
    _loop(i);
  }
};

exports["default"] = _default;