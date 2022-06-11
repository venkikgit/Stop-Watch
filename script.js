// List all variables
const startbtn = document.getElementById('start');
const stopbtn = document.getElementById('stop');
const resetbtn = document.getElementById('reset');
let hour=min=sec="0"+0;
let startTimer =0;
 
// Start Funnction
function start() { 

    stopbtn.classList.remove("not-active");
    stopbtn.classList.add("active");
    startbtn.classList.add("not-active");
    startTimer = setInterval(()=>{
        sec++;
        sec = (sec<10)? "0"+sec: sec;
        if(sec == 60){
            min++;
            min = (min<10)? "0"+min : min;
            sec = "0" +0;
       
        }
        if(min == 60){
            hour++;
            hour = (hour<10)? "0"+hour : hour;
            min = "0" +0;
            sec = "0" +0;
        }
        displayValue();

    },1000);
 
 }

//  Stop function
function stop() { 
    stopbtn.classList.remove("active");
    stopbtn.classList.add("not-active");
    startbtn.classList.remove("not-active");
    startbtn.classList.remove("active");
    clearInterval(startTimer);
 }

//  Reset function 
function reset() { 

    startbtn.classList.remove("not-active");
    stopbtn.classList.remove("not-active");
    clearInterval(startTimer);
    hour = "0" +0;
    min = "0" +0;
    sec = "0" +0;
    displayValue();
 }

//  To display values on the stopwatch container
 function displayValue(){

    document.querySelector('.sec').innerHTML = sec;
    document.querySelector('.min').innerHTML = min;
    document.querySelector('.hour').innerHTML = hour;
 
 
}