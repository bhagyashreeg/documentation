function myDigits(){
    var str="121115112461";
    var patt = /[^1]/g;
    var res = str.match(patt);
    console.log(res);
}

console.log(myDigits());
