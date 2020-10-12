"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _throttle = _interopRequireDefault(require("lodash/throttle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FullPageScroll = /*#__PURE__*/function () {
  function FullPageScroll() {
    _classCallCheck(this, FullPageScroll);

    this.THROTTLE_TIMEOUT = 2000;
    this.screenElements = document.querySelectorAll(".screen:not(.screen--result)");
    this.menuElements = document.querySelectorAll(".page-header__menu .js-menu-link");
    this.activeScreen = 0;
    this.onScrollHandler = this.onScroll.bind(this);
    this.onUrlHashChengedHandler = this.onUrlHashChenged.bind(this);
  }

  _createClass(FullPageScroll, [{
    key: "init",
    value: function init() {
      document.addEventListener("wheel", (0, _throttle["default"])(this.onScrollHandler, this.THROTTLE_TIMEOUT));
      window.addEventListener("popstate", this.onUrlHashChengedHandler);
      this.onUrlHashChenged();
      this.changePageDisplay();
    }
  }, {
    key: "onScroll",
    value: function onScroll(evt) {
      var currentPosition = this.activeScreen;
      this.reCalculateActiveScreenPosition(evt.deltaY);

      if (currentPosition !== this.activeScreen) {
        this.changePageDisplay();
      }
    }
  }, {
    key: "onUrlHashChenged",
    value: function onUrlHashChenged() {
      var newIndex = Array.from(this.screenElements).findIndex(function (screen) {
        return location.hash.slice(1) === screen.id;
      });
      this.activeScreen = newIndex < 0 ? 0 : newIndex;
      this.changePageDisplay();
    }
  }, {
    key: "changePageDisplay",
    value: function changePageDisplay() {
      this.changeVisibilityDisplay();
      this.changeActiveMenuItem();
      this.emitChangeDisplayEvent();
    }
  }, {
    key: "changeVisibilityDisplay",
    value: function changeVisibilityDisplay() {
      this.screenElements.forEach(function (screen) {
        screen.classList.add("screen--hidden");
        screen.classList.remove("active");
      });
      this.screenElements[this.activeScreen].classList.remove("screen--hidden");
      this.screenElements[this.activeScreen].classList.add("active");
    }
  }, {
    key: "changeActiveMenuItem",
    value: function changeActiveMenuItem() {
      var _this = this;

      var activeItem = Array.from(this.menuElements).find(function (item) {
        return item.dataset.href === _this.screenElements[_this.activeScreen].id;
      });

      if (activeItem) {
        this.menuElements.forEach(function (item) {
          return item.classList.remove("active");
        });
        activeItem.classList.add("active");
      }
    }
  }, {
    key: "emitChangeDisplayEvent",
    value: function emitChangeDisplayEvent() {
      var event = new CustomEvent("screenChanged", {
        detail: {
          'screenId': this.activeScreen,
          'screenName': this.screenElements[this.activeScreen].id,
          'screenElement': this.screenElements[this.activeScreen]
        }
      });
      document.body.dispatchEvent(event);
    }
  }, {
    key: "reCalculateActiveScreenPosition",
    value: function reCalculateActiveScreenPosition(delta) {
      if (delta > 0) {
        this.activeScreen = Math.min(this.screenElements.length - 1, ++this.activeScreen);
      } else {
        this.activeScreen = Math.max(0, --this.activeScreen);
      }
    }
  }]);

  return FullPageScroll;
}();

exports["default"] = FullPageScroll;