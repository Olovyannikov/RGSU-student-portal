import TinyGesture from "./../vendor/tinygesture.js";
export default () => {

    const options = {
        // Used to calculate the threshold to consider a movement a swipe. it is
        // passed type of 'x' or 'y'.
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
        // Minimum velocity the gesture must be moving when the gesture ends to be
        // considered a swipe.
        velocityThreshold: 1,
        // Used to calculate the distance threshold to ignore the gestures velocity
        // and always consider it a swipe.
        disregardVelocityThreshold: (type, self) =>
            Math.floor(
                0.5 *
                    (type === "y"
                        ? self.element.clientWidth
                        : self.element.clientHeight)
            ),
        // Point at which the pointer moved too much to consider it a tap or longpress
        // gesture.
        pressThreshold: 8,
        // If true, swiping in a diagonal direction will fire both a horizontal and a
        // vertical swipe.
        // If false, whichever direction the pointer moved more will be the only swipe
        // fired.
        diagonalSwipes: false,
        // The degree limit to consider a swipe when diagonalSwipes is true.
        diagonalLimit: Math.tan(((45 * 1.5) / 180) * Math.PI),
        // Listen to mouse events in addition to touch events. (For desktop support.)
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

            // const zDistance = -(Math.sqrt(Math.pow(gesture.touchMoveX, 2) + Math.pow(gesture.touchMoveY, 2)))+'px';
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
    if(!document.querySelector('.footer__container').classList.contains('visually-hidden')) {
        document.querySelector('.footer__policy').style.order = '-1';
    }
};
