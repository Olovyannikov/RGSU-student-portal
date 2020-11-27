export default () => {
    let progresses = document.querySelectorAll(".progress-bar");
    let progressInfos = document.querySelectorAll(".progress-info");

    for (let i = 0; i < progressInfos.length; i++) {
        progressInfos[i].innerHTML += progresses[i].getAttribute(
            "data-progress"
        );
        if (progresses[i].getAttribute("data-progress") < 50) {
            progresses[i].style.backgroundColor = "#F49617";
            progressInfos[i].style.color = "#F49617";
        }
        if (progresses[i].getAttribute("data-progress") < 20) {
            progresses[i].style.backgroundColor = "#E06364";
            progressInfos[i].style.color = "#E06364";
        }
    }

    progresses.forEach(function (progress) {
        setTimeout(() => {
            let progressVal = Number(progress.dataset.value);
            progress.style.opacity = 1;
            progress.style.width = progress.getAttribute("data-progress") + "%";
        }, 500);
    });
};
