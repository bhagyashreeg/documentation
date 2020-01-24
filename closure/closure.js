// function number(){
//     var b=1;
//     function num(){
//         return b;
//     }
//     return num;
// }
// var get_fun_num = number();

// console.log(get_fun_num());
// console.log(get_fun_num());
// console.log(get_fun_num());


function outernumber(){
    var num= 100;

    function innernumber(){
        console.log(num);
    }
    return innernumber;
}
var innefunc = outernumber();
innefunc();