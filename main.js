console.log('ready!');
const infoDiv = document.querySelector('.info');
const button = document.querySelector('.butonera button');
function updateText() {
    infoDiv.textContent = 'Ready!';
    console.log('Text updated');
};
const updateState = () => {
    console.log('State updated');
};
button.addEventListener('click', updateState);
updateState();
