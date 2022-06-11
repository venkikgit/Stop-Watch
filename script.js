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
        if(sec < 10){
            sec = "0" + sec;
        }else{
            sec = sec;
        }
        if(sec == 60){
            min++;
            if(min < 10){
                min = "0" + min;
            }else{
                min = min;
            }
           
            sec = "0" +0;
       
        }
        if(min == 60){
            hour++;
            
            if(hour < 10){
                hour = "0" + hour;
            }else{
                hour = hour;
            }
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