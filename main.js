const infoDiv = document.querySelector('.info');
const button = document.querySelector('.butonera button');
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();

    // Add leading zeros if hours or minutes are less than 10
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');

    const timeString = `${hours}:${minutes}`;
    document.getElementById('clock').innerHTML = timeString;
}

  // Update the clock immediately and then every second
updateClock();
setInterval(updateClock, 1000); // Update every 1000 milliseconds (1 second)
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
