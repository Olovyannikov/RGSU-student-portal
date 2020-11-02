export default () => {
    let avatars = document.querySelectorAll(".progress--circle");

    for (let i = 0; i < avatars.length; i++) {
        avatars[i].classList.add(
            "progress--" + avatars[i].getAttribute("data-progress")
        );
    }
}