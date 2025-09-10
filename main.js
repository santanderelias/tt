console.log('ready!');
const infoDiv = document.querySelector('.info');
const button = document.querySelector('.butonera button');
function updateState() {
    infoDiv.textContent = 'Ready!';
    console.log('State updated');
}
button.addEventListener('click', updateState);