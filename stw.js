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
var startbut = document.getElementById("startbut");
var stopbut = document.getElementById("stopbut");
var resetbut = document.getElementById("resetbut");
var lapbut = document.getElementById("lapbut");
function add() {
  startbut.disabled = true;
  stopbut.disabled = false;
  resetbut.disabled = true;
  lapbut.disabled = false;
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
  }

  if (Sec > 60) {
    Sec = 0;
    field2.innerHTML = "00";
    min += 1;
    field1.innerHTML = min;
  }
}
function stop() {
  startbut.innerHTML = "Restart";
  startbut.disabled = false;
  stopbut.disabled = true;
  lapbut.disabled = true;
  resetbut.disabled = false;
  clearInterval(timer);
}

function reset() {
  cSec = 0;
  Sec = 0;
  min = 0;
  field1.innerHTML = min + "0";
  field2.innerHTML = Sec + "0";
  field3.innerHTML = cSec + "0";
  startbut.innerHTML = "Start";
  resetbut.disabled = true;
  stopbut.disabled = true;
  laps = [];
  lapfield.innerHTML = "";
  lapbut.disabled = true;
  lapfield.style.display = "none";
}

var laps = [];
var lapnum = laps.length;
var lapfield = document.getElementById("laplist");
function lap() {
  var lapnum = laps.length + 1;
  laps.push(
    lapnum +
      ". " +
      field1.innerText +
      ":" +
      field2.innerText +
      ":" +
      field3.innerText,
  );
  lapfield.style.display = "inline-block";
  lapfield.textContent = laps.join("\n");
}
