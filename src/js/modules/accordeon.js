export default () => {
    let accordeonButtons = document.getElementsByClassName("accordeon-button");
    for (let i = 0; i < accordeonButtons.length; i++) {
        accordeonButtons[i].parentNode.style.cursor = 'pointer';
        accordeonButtons[i].parentNode.onclick = e => {
            accordeonButtons[i].classList.toggle('accordeon-button--active');
            accordeonButtons[i].parentNode.classList.toggle('accordeon-section--active');
            accordeonButtons[i].childNodes.onclick = e => {
                return false
            }
        }
    }
}