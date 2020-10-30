export default () => {
  (function (window, undefined) {
    "use strict";

    let document = window.document;

    function log() {
      if (window.console && window.console.log) {
        for (let x in arguments) {
          if (arguments.hasOwnProperty(x)) {
            window.console.log(arguments[x]);
          }
        }
      }
    }

    function AcceptCookie() {
      if (!(this instanceof AcceptCookie)) {
        return new AcceptCookie();
      }

      this.init.call(this);

      return this;
    }

    AcceptCookie.prototype = {
      init: function () {
        let self = this;

        if (self.readCookie("AcceptCookie") == null) {
          self.addCookieBar();
        }
      },
      getElementsByClass: function (searchClass, node, tag) {
        let classElements = new Array();
        if (node == null) {
          node = document;
        }
        if (tag == null) {
          tag = "*";
        }
        let els = node.getElementsByTagName(tag);
        let elsLen = els.length;
        let pattern = new RegExp("(^|\\s)" + searchClass + "(\\s|$)");
        for (let i = 0, j = 0; i < elsLen; i++) {
          if (pattern.test(els[i].className)) {
            classElements[j] = els[i];
            j++;
          }
        }
        return classElements;
      },
      addEvent: function (obj, type, fn) {
        if (obj.addEventListener) {
          obj.addEventListener(type, fn, false);
        } else if (obj.attachEvent) {
          obj["e" + type + fn] = fn;
          obj[type + fn] = function () {
            obj["e" + type + fn](window.event);
          };
          obj.attachEvent("on" + type, obj[type + fn]);
        } else {
          obj["on" + type] = obj["e" + type + fn];
        }
      },
      createCookie: function (name, value, days) {
        let expires;
        if (days) {
          let date = new Date();
          date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
          expires = "; expires=" + date.toGMTString();
        } else {
          expires = "";
        }
        document.cookie = name + "=" + value + expires + "; path=/";
      },
      readCookie: function (name) {
        let nameEQ = name + "=";
        let ca = document.cookie.split(";");
        for (let i = 0; i < ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) === " ") {
            c = c.substring(1, c.length);
          }
          if (c.indexOf(nameEQ) === 0) {
            return c.substring(nameEQ.length, c.length);
          }
        }
        return null;
      },
      eraseCookie: function (name) {
        let self = this;
        self.createCookie(name, "", -1);
      },

      addCookieBar: function () {
        let self = this;
        let htmlBar = "";

        htmlBar += '<div class="cookieShell">';
        htmlBar += '<form action="#" method="post">';
        htmlBar +=
          "<p>Мы используем файлы cookie. <br> С их помощью мы позаботимся о вас, улучшая работу этого сайта.</p>";
        htmlBar += '<div class="cookieActions">';
        htmlBar +=
          '<button type="button" class="cookieBtn"> <span class="cookieBtnCross"></span> </button>';
        htmlBar += "</div>";
        htmlBar += "</form>";
        htmlBar += "</div>";

        let barDiv = document.createElement("div");
        barDiv.id = "cookie";
        document.body.appendChild(barDiv);
        barDiv.innerHTML = htmlBar;

        self.bindCookieBar();
      },
      bindCookieBar: function () {
        let self = this;
        let btn_arr = self.getElementsByClass("cookieBtn", null, "button");
        if (btn_arr.length > 0) {
          self.addEvent(btn_arr[0], "click", function (e) {
            if (e.preventDefault) {
              e.preventDefault();
            }
            self.createCookie("cookie", "YES", 5);

            document.getElementById("cookie").remove();
            return false;
          });
        }
      },
    };

    window.AcceptCookie = AcceptCookie;
  })(window);

  window.onload = function () {
    AcceptCookie = AcceptCookie();
  };
};
