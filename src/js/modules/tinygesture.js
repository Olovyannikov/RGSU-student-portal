import TinyGesture from "tinygesture";
export default () => {

    const options = {
        threshold: (type, self) =>
            Math.max(
                0.01,
                Math.floor(
                    0.01 *
                    (type === "x"
                        ? window.innerWidth || document.body.clientWidth
                        : window.innerHeight || document.body.clientHeight)
                )
            ),
        velocityThreshold: 1,
        disregardVelocityThreshold: (type, self) =>
            Math.floor(
                0.5 *
                (type === "y"
                    ? self.element.clientWidth
                    : self.element.clientHeight)
            ),
        pressThreshold: 8,
        diagonalSwipes: false,
        diagonalLimit: Math.tan(((45 * 1.5) / 180) * Math.PI),
        mouseSupport: true,
    };

    const target = document.querySelector(".footer__bar");
    const gesture = new TinyGesture(target, options);

    let bgColor = null;

    gesture.on("swipeup", () => {
        document.querySelector(".footer__container").style.transform =
            "perspective(-1000px) translate3d(0px, -20px, 0)";
        document
            .querySelector(".footer__container")
            .classList.remove("visually-hidden");
        document.querySelector(".footer__policy").style.order = "-1";
    });

    gesture.on("panmove", () => {
        if (gesture.animationFrame) {
            return;
        }
        gesture.animationFrame = window.requestAnimationFrame(() => {

            target.style.transition = "background-color ease .3s";
            target.style.transform =
                "perspective(200px) translate3d(" +
                gesture.touchMoveX +
                "px, " +
                gesture.touchMoveY +
                "px, 0)";
            window.requestAnimationFrame(() => {
                target.style.transition = null;
            });
            gesture.animationFrame = null;
        });
    });

    gesture.on("panend", () => {
        window.cancelAnimationFrame(gesture.animationFrame);
        gesture.animationFrame = null;
        target.style.transition = null;
        target.style.transform = null;
        bgColor = null;
    });

    gesture.on("swipedown", () => {
        target.style.transform = "perspective(0px) translate3d(0px, 00px, 0)";
        document
            .querySelector(".footer__container")
            .classList.add("visually-hidden");

        document.querySelector(".footer__policy").style.order = "0";
    });
    gesture.on("tap", () => {
        document
            .querySelector(".footer__container")
            .classList.toggle("visually-hidden");

        document.querySelector('.footer__policy').style.order = '-1';
    });
    if (!document.querySelector('.footer__container').classList.contains('visually-hidden')) {
        document.querySelector('.footer__policy').style.order = '-1';
    }

};
