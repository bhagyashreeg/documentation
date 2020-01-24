var ages = [33,40,8,12,55];
function checkAge(age){
    return age>=18;

}
function myAge(){
    //document.getElementById("check").innerHTML=ages.filter(checkAge);
    console.log(ages.filter(checkAge));
}
console.log(myAge());