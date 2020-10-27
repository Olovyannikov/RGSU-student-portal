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

                if (self.readCookie('pjAcceptCookie') == null) {
                    self.appendCss();
                    self.addCookieBar();
                }

                let clear_cookie_arr = self.getElementsByClass("pjClearCookie", null, "a");
                if (clear_cookie_arr.length > 0) {
                    self.addEvent(clear_cookie_arr[0], "click", function (e) {
                        if (e.preventDefault) {
                            e.preventDefault();
                        }
                        self.eraseCookie('pjAcceptCookie');
                        document.location.reload();
                        return false;
                    });
                }
            },
            getElementsByClass: function (searchClass, node, tag) {
                let classElements = new Array();
                if (node == null) {
                    node = document;
                }
                if (tag == null) {
                    tag = '*';
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
                    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                    expires = "; expires=" + date.toGMTString();
                } else {
                    expires = "";
                }
                document.cookie = name + "=" + value + expires + "; path=/";
            },
            readCookie: function (name) {
                let nameEQ = name + "=";
                let ca = document.cookie.split(';');
                for (let i = 0; i < ca.length; i++) {
                    let c = ca[i];
                    while (c.charAt(0) === ' ') {
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
            appendCss: function () {
                let self = this;
                let cssId = 'pjAcceptCookieCss';
                if (!document.getElementById(cssId)) {
                    let head = document.getElementsByTagName('head')[0];
                    let link = document.createElement('link');
                    link.id = cssId;
                    link.rel = 'stylesheet';
                    link.type = 'text/css';
                    link.href = 'https://fonts.googleapis.com/css?family=Open+Sans';
                    link.media = 'all';
                    head.appendChild(link);
                }

                let cssCode = "";
                cssCode += "#cookie .cookieBtn:after { -webkit-transition: all .5s ease-in-out; -moz-transition: all .5s ease-in-out; -ms-transition: all .5s ease-in-out; -o-transition: all .5s ease-in-out; transition: all .5s ease-in-out; }";
                cssCode += "#cookie { position: fixed; bottom: 10px; left: 50%; transform: translateX(-50%); z-index: 9999; overflow-x: hidden; overflow-y: hidden; max-width: 558px; max-height: 95px; padding: 30px 0; background: #fff; font-family: 'Russia', sans-serif; text-align: left; }";
                cssCode += "#cookie * { padding: 0; margin: 0; outline: 0; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; }";
                cssCode += "#cookie .cookieShell { width: 100%; margin: 0 auto; padding-left: 87px; padding-right: 28px; }";
                cssCode += "#cookie a[href^=tel] { color: inherit; }";
                cssCode += "#cookie p { font-size: 15px; line-height: 21px; color: #6E7781; font-weight: normal; position: relative; }";
                cssCode += "#cookie .cookieActions { padding-top: 10px;}";
                cssCode += "#cookie .cookieBtn { position: absolute; border-radius: 100%; top: -27px; right: 3px; display: block; width: 31px; height: 31px;  background: #3464E0; font-size: 18px; line-height: 44px; color: #fff; text-decoration: none; vertical-align: middle; cursor: pointer; border: 0; -webkit-appearance: none;  -webkit-transform: translateZ(0); transform: translateZ(0); -webkit-backface-visibility: hidden; backface-visibility: hidden; -moz-osx-font-smoothing: grayscale; }";
                cssCode += "#cookie .cookieBtnCross { position: absolute; top: 15px; right: 7px; width: 17px; height: 1px; transform: rotate(45deg); background: #fff; }";
                cssCode += "@media only screen and (max-width: 767px) {";
                cssCode += "#cookie { padding: 15px 0; }";
                cssCode += "#cookie p { font-size: 16px; }";
                cssCode += "}";

                let styleElement = document.createElement("style");
                styleElement.type = "text/css";
                if (styleElement.styleSheet) {
                    styleElement.styleSheet.cssText = cssCode;
                } else {
                    styleElement.appendChild(document.createTextNode(cssCode));
                }
                document.getElementsByTagName("head")[0].appendChild(styleElement);
            },
            addCookieBar: function () {
                let self = this;
                let htmlBar = '';

                htmlBar += '<div class="cookieShell">';
                htmlBar += '<form action="#" method="post">';
                htmlBar += '<p>Мы используем файлы cookie. <br> С их помощью мы позаботимся о вас, улучшая работу этого сайта.</p>';
                htmlBar += '<div class="cookieActions">';
                htmlBar += '<button type="button" class="cookieBtn"> <span class="cookieBtnCross"></span> </button>';
                htmlBar += '</div>';
                htmlBar += '</form>';
                htmlBar += '</div>';

                let barDiv = document.createElement('div');
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
                        self.createCookie('cookie', 'YES', 1);

                        document.getElementById("cookie").remove();
                        return false;
                    });
                }
            }
        };

        window.AcceptCookie = AcceptCookie;
    })(window);

    window.onload = function () {
        AcceptCookie = AcceptCookie();
    }
}