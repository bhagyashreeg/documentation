var numbers = [10.5, 6, 4.2, 1.1];

function mySum(total,num){
    return total+Math.round(num);
}

function myNumber(items){
    //document.getElementById("Digits").innerHTML=numbers.reduce(mySum,0);
    console.log(numbers.reduce(mySum,0));
}

console.log(myNumber());