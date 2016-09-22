var msID = document.getElementById('ms');
var secID = document.getElementById('seconds');
var minID = document.getElementById('minutes');
var hourID = document.getElementById('hours');

var startButton = document.getElementById('start_but');
var stopButton = document.getElementById('stop_but');
var clearButton = document.getElementById('clear_but');
var splitButton = document.getElementById('split_but');

var splitID = document.getElementById('split');

var setTimer;

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
clearButton.addEventListener('click', clearTimer);
splitButton.addEventListener('click', splitTimer);

function startTimer() {
  startButton.style.display = 'none';
  stopButton.style.display = 'block';
  setTimer = setInterval(function() {
    var ms = +msID.innerHTML;
    var s = +secID.innerHTML;
    var m = +minID.innerHTML;
    var h = +hourID.innerHTML;
    ms = ms + 12;

    if (ms === 996) {
      ms = 0;
      s++;
    if (s === 60) {
      s = 0;
      m++;
      if (m === 60) {
        m = 0;
        h++;
        if (h < 10) {
          hourID.innerHTML = ('0'+h);
        } else {
          hourID.innerHTML = h;
        }
      }
      if (m < 10) {
        minID.innerHTML = ('0'+m);
      } else {
        minID.innerHTML = m;
      }
    }
    if (s < 10) {
      secID.innerHTML = ('0'+s);
    } else {
      secID.innerHTML = s;
    }
  }
    msID.innerHTML = ms;
  }, 12);
}

var i = 0;
function splitTimer() {
  i++;
  var ms = msID.innerHTML;
  var s = secID.innerHTML;
  var m = minID.innerHTML;
  var h = hourID.innerHTML;
  splitID.innerHTML += ('Split '+i+': '+h+':'+m+':'+s+'. '+ms+'<br>');
}

function stopTimer() {
  var ms = msID.innerHTML;
  var s = secID.innerHTML;
  var m = minID.innerHTML;
  var h = hourID.innerHTML;
  splitID.innerHTML += ('Stop: '+h+':'+m+':'+s+'. '+ms+'<br>');
  clearInterval(setTimer);
  stopButton.style.display = 'none';
  startButton.style.display = 'block';
}

function clearTimer() {
  stopTimer();
  i = 0;
  splitID.innerHTML = '';
  hourID.innerHTML = '00';
  minID.innerHTML = '00';
  secID.innerHTML  = '00';
  msID.innerHTML = '00';
}
