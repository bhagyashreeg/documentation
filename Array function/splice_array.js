
var fruits = ["Banana", "Orange", "Apple", "Mango"];
//document.getElementById("fruitt").innerHTML = fruits;

function myFood() {
    fruits.splice(2, 0, "Chikku", "Watermelon");
    //document.getElementById("fruitt").innerHTML = fruits;
    console.log(fruits);
}
console.log(myFood());