console.log('ready!');
const infoDiv = document.querySelector('.info');
const button = document.querySelector('.butonera button');
function updateToolbarStatusText() {
    infoDiv.textContent = 'Ready!';
    console.log('Text updated');
};
function updateState(){
    updateToolbarStatusText();
    console.log('State updated');
};
button.addEventListener('click', updateState);
updateState();
