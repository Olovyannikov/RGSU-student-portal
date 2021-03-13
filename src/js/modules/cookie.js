export default () => {
    (function (factory) {
        let registeredInModuleLoader;
        if (typeof define === "function" && define.amd) {
            define(factory);
            registeredInModuleLoader = true;
        }
        if (typeof exports === "object") {
            module.exports = factory();
            registeredInModuleLoader = true;
        }
        if (!registeredInModuleLoader) {
            let OldCookies = window.Cookies;
            let api = (window.Cookies = factory());
            api.noConflict = function () {
                window.Cookies = OldCookies;
                return api;
            };
        }
    })(function () {
        function extend() {
            let i = 0;
            let result = {};
            for (; i < arguments.length; i++) {
                let attributes = arguments[i];
                for (let key in attributes) {
                    result[key] = attributes[key];
                }
            }
            return result;
        }

        function decode(s) {
            return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
        }

        function init(converter) {
            function api() {}

            function set(key, value, attributes) {
                if (typeof document === "undefined") {
                    return;
                }

                attributes = extend(
                    {
                        path: "/",
                    },
                    api.defaults,
                    attributes
                );

                if (typeof attributes.expires === "number") {
                    attributes.expires = new Date(
                        new Date() * 1 + attributes.expires * 864e5
                    );
                }

                attributes.expires = attributes.expires
                    ? attributes.expires.toUTCString()
                    : "";

                try {
                    let result = JSON.stringify(value);
                    if (/^[\{\[]/.test(result)) {
                        value = result;
                    }
                } catch (e) {}

                value = converter.write
                    ? converter.write(value, key)
                    : encodeURIComponent(String(value)).replace(
                          /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                          decodeURIComponent
                      );

                key = encodeURIComponent(String(key))
                    .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
                    .replace(/[\(\)]/g, escape);

                let stringifiedAttributes = "";
                for (let attributeName in attributes) {
                    if (!attributes[attributeName]) {
                        continue;
                    }
                    stringifiedAttributes += "; " + attributeName;
                    if (attributes[attributeName] === true) {
                        continue;
                    }

                    stringifiedAttributes +=
                        "=" + attributes[attributeName].split(";")[0];
                }

                return (document.cookie =
                    key + "=" + value + stringifiedAttributes);
            }

            function get(key, json) {
                if (typeof document === "undefined") {
                    return;
                }

                let jar = {};

                let cookies = document.cookie
                    ? document.cookie.split("; ")
                    : [];
                let i = 0;

                for (; i < cookies.length; i++) {
                    let parts = cookies[i].split("=");
                    let cookie = parts.slice(1).join("=");

                    if (!json && cookie.charAt(0) === '"') {
                        cookie = cookie.slice(1, -1);
                    }

                    try {
                        let name = decode(parts[0]);
                        cookie =
                            (converter.read || converter)(cookie, name) ||
                            decode(cookie);

                        if (json) {
                            try {
                                cookie = JSON.parse(cookie);
                            } catch (e) {}
                        }

                        jar[name] = cookie;

                        if (key === name) {
                            break;
                        }
                    } catch (e) {}
                }

                return key ? jar[key] : jar;
            }

            api.set = set;
            api.get = function (key) {
                return get(key, false /* read as raw */);
            };
            api.getJSON = function (key) {
                return get(key, true /* read as json */);
            };
            api.remove = function (key, attributes) {
                set(
                    key,
                    "",
                    extend(attributes, {
                        expires: -1,
                    })
                );
            };

            api.defaults = {};

            api.withConverter = init;

            return api;
        }

        return init(function () {});
    });

    const cookieEl = document.querySelector("#cookie");
    const cookieAccept = document.querySelector('.cookieBtn');

    if(document.querySelector('.cookieBtn'))
    cookieAccept.addEventListener('click', () => {
        cookieEl.style.display = "none";
    });

    let cookies = () => {
        if (!Cookies.get("hide-cookie")) {
            setTimeout(() => {
                cookieEl.style.display = "block";
            }, 1000);
        }
        Cookies.set("hide-cookie", "true", {
            expires: 30,
        });
    };

    cookies();
};
