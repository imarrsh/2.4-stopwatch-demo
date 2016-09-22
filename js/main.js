// console.log('JS is hooked up!');

// Start every file like this
(function(){
  "use strict";

  var startButton = document.getElementById('start-button');
  var clearButton = document.getElementById('clear-button');

  var hours = document.querySelector('.elapsed-time .hours');
  var minutes = document.querySelector('.elapsed-time .minutes');
  var seconds = document.querySelector('.elapsed-time .seconds');

  var startTime;
  var currentText;

  function toggleButton(){
    currentText = startButton.textContent;
    if(currentText === 'Start'){
      startButton.textContent = 'Stop';
    } else {
      startButton.textContent = 'Start';
    }
  }

  function millisecondsToInterval(ms){
    var msLeft = ms;

    var msInHour = 60000 * 60;
    var msInMinute = 60000;
    var msInSecond = 1000;

    var hourCount = Math.floor(msLeft / msInHour);

    msLeft = msLeft % msInHour;

    var minuteCount = Math.floor(msLeft / msInMinute);
    msLeft = msLeft % msInMinute;

    var secondCount = Math.floor(msLeft / msInSecond);

    return [hourCount, minuteCount, secondCount];

  }

  function logElapsedTime(){
    var currentTime = new Date();
    var elapsedTime = currentTime - startTime;
    var elapsed = millisecondsToInterval(elapsedTime);

    displayInterval(elapsed);
  }

  function displayInterval(interval){
    hours.textContent = ("0" + interval[0]).slice(-2);
    minutes.textContent = ("0" + interval[1]).slice(-2);
    seconds.textContent = ("0" + interval[2]).slice(-2);
  }

  var startButtonHandler = function(){
    console.log('start clicked');
    startTime = new Date();
    toggleButton();

    window.setInterval(logElapsedTime, 1000)
  }

  startButton.addEventListener('click', startButtonHandler);

}());
