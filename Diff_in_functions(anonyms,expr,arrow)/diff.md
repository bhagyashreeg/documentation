**Difference between arrow function,function epression and anonymous function**


In **function expression** The function keyword is used to define a function inside an expression. wheareas An **anonymous function** is a function that was declared without any named identifier to refer to it. and an **arrrow function** is an alternative to regular function expression,and they cannot be used as constructors.

# -------------------------------

**Arrow()**

* It allows to write shorter function syntax.
Like example --

var hello;

hello = () => {
    return "Hi";
}
console.log(hello());

* It will return the Hi in hello().

# ----------------------

**function expression()**

* Syntax :
    var myFunction = function [name]([param1[, param2[, ..., paramN]]]) {
        statements
    };

Example :
    let sayHi = function() {
        alert( "Hello" );
    };

* Here, the function is created and assigned to the variable explicitly, like any other value.
    1. The Function Declaration (1) creates the function and puts it into the variable named sayHi.
    2. Line (2) copies it into the variable func
    3. Now the function can be called as both sayHi() and func().


# --------------------------------

**Anonymous function**

* anonymous function is usually not accessible after its initial creation
