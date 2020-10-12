"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default() {
  var showResultEls = document.querySelectorAll(".js-show-result");
  var results = document.querySelectorAll(".screen--result");

  if (results.length) {
    var _loop = function _loop(i) {
      showResultEls[i].addEventListener("click", function () {
        var target = showResultEls[i].getAttribute("data-target");
        [].slice.call(results).forEach(function (el) {
          el.classList.remove("screen--show");
          el.classList.add("screen--hidden");
        });
        var targetEl = [].slice.call(results).filter(function (el) {
          return el.getAttribute("id") === target;
        });
        targetEl[0].classList.add("screen--show");
        targetEl[0].classList.remove("screen--hidden");
      });
    };

    for (var i = 0; i < showResultEls.length; i++) {
      _loop(i);
    }

    var playBtn = document.querySelector(".js-play");

    if (playBtn) {
      playBtn.addEventListener("click", function () {
        [].slice.call(results).forEach(function (el) {
          el.classList.remove("screen--show");
          el.classList.add("screen--hidden");
        });
        document.getElementById("messages").innerHTML = "";
        document.getElementById("message-field").focus();
      });
    }
  }
};

exports["default"] = _default;