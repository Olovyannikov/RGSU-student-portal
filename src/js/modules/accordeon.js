export default () => {
    let accordeonButtons = document.getElementsByClassName("accordeon-button");
    let accordeonTitle = document.querySelectorAll('.accordeon-title');
    for (let i = 0; i < accordeonButtons.length; i++) {
        accordeonButtons[i].parentNode.style.cursor = 'pointer';
        accordeonTitle[i].onclick = e => {
            accordeonButtons[i].classList.toggle('accordeon-button--active');
            accordeonTitle[i].parentNode.classList.toggle('accordeon-section--active');
        }
    }
}