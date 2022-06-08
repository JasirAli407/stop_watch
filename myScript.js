var startButton = document.querySelector("#start-btn");
var display = document.querySelectorAll(".display");
var stopButton = document.querySelector('#stop-btn');
var resetButton = document.querySelector("#reset-btn");

var interval;
var isStopped;


stopButton.addEventListener("click",function(){
  console.log("stop click");
  isStopped = true
});

resetButton.addEventListener('click', function(){
  console.log("rest click")
  clearInterval(interval);

  for(let i of display){
    i.innerHTML = "00";
  }
})



function increaseTime(index){
    var currentHand = display[index];
    if(index == 3 && parseInt(currentHand.innerText) == 09){
      currentHand.innerText = 00;
      increaseTime(index-1);      
    
    }
    else if(index !=0 && parseInt(currentHand.innerText) == 59){
      currentHand.innerText = 00;

      increaseTime(index-1)
    }

    else{
      var currentTime = parseInt(currentHand.innerText) + 1;
   currentHand.innerText = (currentTime < 10) ? '0' + currentTime : currentTime;
    }
    
}


function startTimer(){
     console.log('strt clivk')
     isStopped = false;
     interval = setInterval(function()
   
    {
      if(isStopped == true){
        clearInterval(interval);
        return;
      }

       increaseTime(3);
    },100)
}

startButton.addEventListener('click',startTimer)


