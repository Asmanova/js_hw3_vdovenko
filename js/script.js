var msID = document.getElementById('ms');
var secID = document.getElementById('seconds');
var minID = document.getElementById('minutes');
var hourID = document.getElementById('hours');

var elem = document.getElementById('click1');
var elem2 = document.getElementById('click2');
var elem3 = document.getElementById('click3');
var elem4 = document.getElementById('click4');

var splitID = document.getElementById('split');


function time() {
  var ms = +msID.innerHTML;
  var s = +secID.innerHTML;
  var m = +minID.innerHTML;
  var h = +hourID.innerHTML;
  ms = ms + 12;

  if (ms == 996) {
    ms = 0;
    s++;
    if (s < 10) {
      secID.innerHTML = ('0'+s);
    } else {
      secID.innerHTML = s;
    }
  }
  if (s == 60) {
    s = 0;
    m++;
    if (m == 60) {
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
  msID.innerHTML = ms;
}

function go() {
  elem.style.display = 'none';
  elem2.style.display = 'block';
  var lo = setInterval(time, 12);

  function split() {
    var ms = msID.innerHTML;
    var s = secID.innerHTML;
    var m = minID.innerHTML;
    var h = hourID.innerHTML;
    splitID.innerHTML += ('Split: '+h+':'+m+':'+s+'. '+ms+'<br>');
  }

  elem4.addEventListener('click', split);

var i = 0;

  function stop() {
    var ms = msID.innerHTML;
    var s = secID.innerHTML;
    var m = minID.innerHTML;
    var h = hourID.innerHTML;
i++;
console.log(i);
    splitID.innerHTML += ('Stop: '+h+':'+m+':'+s+'. '+ms+'<br>');
    clearInterval(lo);
    elem2.style.display = 'none';
    elem.style.display = 'block';
  }
  elem2.addEventListener('click', stop);

  function clear() {
    clearInterval(lo);
    splitID.innerHTML = '';
    hourID.innerHTML = '00';
    minID.innerHTML = '00';
    secID.innerHTML  = '00';
    msID.innerHTML = '00';
  }

  elem3.addEventListener('click', clear);
}

elem.addEventListener('click', go);
