var myVar = setInterval(setColor, 300);
 
function setColor() {
  var x = document.body;
  x.style.backgroundColor = x.style.backgroundColor == "grey" ? "yellow" : "grey";
}
 
function stopColor() {
  clearInterval(myVar);
}
console.log(stopColor());