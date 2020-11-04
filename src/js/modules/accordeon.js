export default () => {
    let accordeonButtons = document.getElementsByClassName("accordeon-button");
    let accordeonTitle = document.querySelectorAll('.accordeon-title');
    for (let i = 0; i < accordeonButtons.length; i++) {
        accordeonButtons[i].parentNode.style.cursor = 'pointer';
        accordeonTitle[i].onclick = e => {
            accordeonButtons[i].classList.toggle('accordeon-button--active');
            accordeonButtons[i].parentNode.classList.toggle('accordeon-section--active');
        }
        accordeonButtons[i].onclick = function () {
            if (
                accordeonButtons[i].classList.contains('accordeon-button--active')
            ) {
                accordeonButtons[i].classList.remove('accordeon-button--active');
                accordeonButtons[i].parentNode.classList.remove('accordeon-section--active');
            } else {
                accordeonButtons[i].classList.add('accordeon-button--active');
                accordeonButtons[i].parentNode.classList.add('accordeon-section--active');
            }
        }
    }
}