var points = [40, 150, 1, 50, 25, 10];
//document.getElementById("num").innerHTML = points;    

function myNumeric() {
    points.sort(function(a, b){
        return a-b
    });
   // document.getElementById("num").innerHTML = points;
   console.log(points);
}
console.log(myNumeric());