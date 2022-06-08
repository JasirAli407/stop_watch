var milliSec = 0;
var sec = 0;
var min = 0;
var hour = 0;
console.log(typeof hour)
var lapsContainer = document.querySelector('#laps-container');
var stopwatchDisplay = document.querySelector('.stopwatch-display');
var pauseButton = document.querySelector('#pause-btn');
var timeInterval;
var startButton = document.querySelector('#start-btn');


// to start the stopwatch timer
function start(){
 pauseButton.style.display = 'flex';
 startButton.style.display = 'none';
 
  if(!timeInterval){
timeInterval = setInterval(run,10);    
  }
}


function run(){
    stopwatchDisplay.textContent = getstopWatchTime();

    milliSec++;
   
    if(milliSec == 100){
        milliSec = 0;
        sec++;
    }

    if(sec == 60){
        sec = 0;
        min++;
    }

    if(min == 60){
        min = 0;
        hour++;
    }

}


// to get current stopwatch time
function getstopWatchTime(){
    return    (hour < 10 ? '0' + hour : hour) + ":" + ( min < 10 ? '0' + min : min )+ ':' + (sec < 10 ? '0' + sec : sec) + ":" + (milliSec < 10 ? '0' + milliSec : milliSec);
}


// to display the stopwatch time 



// to stop stopwatch time
function stopTime(){
    clearInterval(timeInterval);
    timeInterval = false;
}


// to pause stopwatch time
function pause(){
   
    pauseButton.style.display = 'none';
    startButton.style.display = 'flex';
    stopTime();

}

// to reset stopwatch time
function reset(){
    pauseButton.style.display = 'none';
    startButton.style.display = 'flex';
    stopTime();
    min = 0;
    sec = 0;
    hour = 0;
    milliSec = 0;

    stopwatchDisplay.textContent =  "00:00:00:00";   
}


// to display lap time list on clicking lap button
function showLapTime(){

   if(timeInterval){

       let li = document.createElement('li');
       li.innerText = getstopWatchTime();
       
      let deleteButton = document.createElement('i');
      
       deleteButton.classList.add('fa-solid', 'fa-trash');
       
       li.appendChild(deleteButton);
    
       lapsContainer.appendChild(li);   
    
    //    to delete lap time on clicking trash icon
      deleteButton.addEventListener('click',function(){
          
               deleteButton.parentElement.remove();
       })
 

   }
}


// to empty the lap times and reset
function lapReset(){
    lapsContainer.innerHTML = '';
}

// to restart stopwatch time
function restart(){
   reset();
   start();
}
