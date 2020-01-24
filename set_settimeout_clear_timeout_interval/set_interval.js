var myVar = setInterval(myTimer, 1);

function myTimer() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  console.log(t)
}
console.log(myTimer());