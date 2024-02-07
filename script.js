let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;

const hoursdiv = document.getElementById("hours");
const minutesdiv = document.getElementById("minutes");
const secondsdiv = document.getElementById("seconds");
const millisecondsdiv = document.getElementById("milliseconds");
const startdiv = document.getElementById("start");
const pausediv = document.getElementById("pause");
const resetdiv = document.getElementById("reset");

const startTimer = () => {
    clearInterval(interval);
    interval = setInterval(startWatch,10);
}

const pauseTimer = () => {
    clearInterval(interval);
}

const resetTimer = () => {
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;

    millisecondsdiv.innerHTML = 0;
    secondsdiv.innerHTML = 0;
    minutesdiv.innerHTML = 0;
    hoursdiv.innerHTML = 0; 
    clearInterval(interval);
}

function startWatch(){
    milliseconds++;
    if (milliseconds < 9){
        millisecondsdiv.innerHTML = `0${milliseconds}`;
    }

    else if(milliseconds > 99){
        milliseconds = 0;
        millisecondsdiv.innerHTML = "00";
        seconds++;
    }
    else{
        millisecondsdiv.innerHTML = milliseconds;
    }

    if (seconds < 10){
        secondsdiv.innerHTML = `0${seconds}`;
    }

    else if(seconds > 59){
        minutes++;
        seconds = 0;
        secondsdiv.innerHTML = "00";
    }

    else{
        secondsdiv.innerHTML = seconds;
    }

    if (minutes < 10){
        minutesdiv.innerHTML = `0${minutes}`;
    }

    else if (minutes > 59){
        hours++;
        minutes = 0;
        minutesdiv.innerHTML = "00";
    }

    else{
        minutesdiv.innerHTML = minutes;
    }

    if(hours < 10){
        hoursdiv.innerHTML = `0${hours}`;
    }

    else{
        hoursdiv.innerHTML = hours;
    }
}

startdiv.addEventListener("click", startTimer);
pausediv.addEventListener("click",pauseTimer);
resetdiv.addEventListener("click",resetTimer);