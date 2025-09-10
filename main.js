console.log('ready!');
const infoDiv = document.querySelector('.info');
function updateState() {
    infoDiv.textContent = 'Ready!';
    console.log('State updated');
}
updateState();