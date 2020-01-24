function add(a,b,callback){
    console.log(`The sum of ${a} and ${b} is ${a+b}.` + "<br>");
    callback();
}
function disp(){
    console.log("It should be printed after addition");
}
add(5,4,disp);
