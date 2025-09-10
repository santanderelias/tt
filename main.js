console.log('ready!');
const infoDiv = document.querySelector('.info');
new function updateState() {
    infoDiv.textContent = 'Ready!';
    console.log('State updated');
}
updateState();