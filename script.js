

// select element call them

const timeDisplay = document.getElementById('time')
const startButton = document.getElementById('start')
const pauseButton = document.getElementById('pause')
const resetButton = document.getElementById('reset')



// timer variables

let hours = 0, minutes = 0, seconds =0;

let interval = null; // store the interval id
let isRunning = false; // to track if the watch is running


// function to update the time display

function updateTimeDisplay(){
    // format time as hh:mm:ss
    const formattedTime = 
    `${hours.toString().padStart(2,'0')}:
      ${minutes.toString().padStart(2,'0')}:
      ${seconds.toString().padStart(2,'0')} `;

      timeDisplay.textContent = formattedTime;
}


// function to start the timer
function startTimer(){
    if(isRunning) return;
    isRunning = true;


    interval = setInterval(()=>{
        seconds++;

        if(seconds === 60){
            seconds = 0;
            minutes++;
            if(minutes === 60){
                minutes = 0;
                hours++
            }
        }
        updateTimeDisplay();
    },1000); // every 1 seconds
} 


// function to pause the timer

function pauseTimer(){
    isRunning = false;
    clearInterval(interval);
}


// function to reset the timer

function resetTimer(){
    pauseTimer();
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateTimeDisplay();
}


// add event listener to buttons

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

// call the function
updateTimeDisplay();