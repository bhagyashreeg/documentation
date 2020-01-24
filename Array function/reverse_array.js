
var fruits = ["Banana", "Orange", "Apple", "Pineapple"];
//document.getElementById("fruit").innerHTML = fruits;

function myFood() {
    fruits.sort();
    fruits.reverse();
    //document.getElementById("fruit").innerHTML = fruits;
    console.log(fruits);
}
console.log(myFood());  