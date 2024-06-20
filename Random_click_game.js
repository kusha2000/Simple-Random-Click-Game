var start = new Date().getTime();
var totalTime=0;
setTimeout(myFFunction, Math.random() * 500);

function myFFunction() {
  var topp = Math.random() * 600;
  var left = Math.random() * 500;
  var width = Math.random() * 100;
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  var bradius = Math.random() * 2;

  document.getElementById("shape").style.display = "block";
  document.getElementById("shape").style.left = left + "px";
  document.getElementById("shape").style.top = topp + "px";
  document.getElementById("shape").style.width = width + "px";
  document.getElementById("shape").style.height = width + "px";
  document.getElementById("shape").style.backgroundColor = "#" + randomColor;
  if (bradius > 1.5) {
    document.getElementById("shape").style.borderRadius = "50%";
  }

  start = new Date().getTime();
}

document.getElementById("shape").onclick = function () {
  document.getElementById("shape").style.display = "none";
  var end = new Date().getTime();
  var time = (end - start) / 1000;
  document.getElementById("time").innerHTML = time + "s";
  totalTime+=time
  document.getElementById("Ttime").innerHTML = totalTime.toFixed(3) + "s";
  setTimeout(myFunction, Math.random() * 500);

  function myFunction() {
    document.getElementById("shape").style.display = "block";
    myFFunction();
  }
};
