// animation header
var i = 0;
var txt = "StopWatch";
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("header").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 250);
  }
}
window.onload = function () {
  typeWriter();
};

//starting stopwatch
var cSec = 0;
var Sec = 0;
var min = 0;
var field3 = document.getElementById("field3");
var field2 = document.getElementById("field2");
var field1 = document.getElementById("field1");

function add() {
  cSec += 1;
  field3.innerHTML = cSec;
  if (cSec < 10) {
    field3.innerHTML = "0" + cSec;
  }
  if (Sec < 10) {
    field2.innerHTML = "0" + Sec;
  }
  if (min < 10) {
    field1.innerHTML = "0" + min;
  }
  if (cSec < 100) {
    start();
  } else {
    cSec = 0;
    Sec += 1;
    field2.innerHTML = Sec;
    start();
  }
  if (Sec > 59) {
    Sec = 0;
    field2.innerHTML = "00";
    min += 1;
    field1.innerHTML = min;
  }
}
function stop() {
  document.getElementById("startfield").innerHTML = "Restart";
  clearInterval(timer);
}

function reset() {
  cSec = 0;
  Sec = 0;
  min = 0;
  field1.innerHTML = min + "0";
  field2.innerHTML = Sec + "0";
  field3.innerHTML = cSec + "0";
}
