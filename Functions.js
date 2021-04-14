/******************************************************************************
 *  Execution       : default node          : cmd> node Functions.js
 *
 *
 *  @Purpose         : JavaScript basic questions
 *
 *  @file           : Functions.js
 *  @overview       : learn basic knowledge
 *  @author         : Bhupendra Singh <bhupendrasingh.ec18@gmail.com>
 *  @version        : 1.0
 *  @since          : 11-Apr-2021
 *
 ******************************************************************************/

//############################### Immediately Invoked Function Expression (IIFE) ########################################
(function a() {
    // console.log("a function called")
})();
// output =>>>> a function called
// **********************************************************************************************************************************






//########################################### Function calling with Hositing #############################################
function b(a) {                                     // a is the parameter
    // console.log("b function called")
}
b(1);                                               // 1 is arguments                                            
// output =>>>> b function called

c();
function c() {
    // console.log("c function called")
}
// output =>>>> c function called
// **********************************************************************************************************************************







//################################ Function Statment/Declaration and Function Expression ##################################
// Function statement/Declaration
function d() {
    // console.log("d function called")
}
d();
// output =>>>> d function called

// Function Expression
var newE = function () {
    // console.log("e function called")
}
newE();
// output =>>>> e function called
// ********************************** But Difference is Hoisting   ********************************
// d1();
// newE1();

// Function statement/Declaration
function d1() {
    // console.log("d function called")
}
// output =>>>> d function called

// Function Expression
var newE1 = function () {
    // console.log("e function called")
}
// output =>>>> TypeError: newE1 is not a function
// **********************************************************************************************************************************








// ###################################### Anonymous Function ############################################################
// Anonymous function are used in a place where functions are used as a values
// function () {
//     console.log("Anonymou");
// }
// output =>>>> SyntaxError: Function statements require a function name
// **********************************************************************************************************************************







//################################################# Named Function Expression ############################################
var newE2 = function Named() {
    console.log("newE2 function called")
}
// newE2()
// output =>>>> newE2 function called
// Named()
// output =>>>> ReferenceError: Named is not defined (you can access this function inside that function but not outside)
// **********************************************************************************************************************************






// #######################################  First Class Function/Citizens ################################################
// The ability of function to be used as values and can be passed to as arguments to another function and can be return 
// from the functions
var firstClass = function first(param) {
    return function () {
        console.log("inside function", param);
    }
}
function second() {
    console.log("inside fsssunction");
}
//console.log(firstClass(second));
// **********************************************************************************************************************************






//##################################################### Basic Functions ##############################################
function blabbermouth() { };   // **** Important  ***** //
console.log(blabbermouth.name);
// output =>>>> blabbermouth
// Functions have a name property that returns the name of a function. JavaScript functions are objects and can have properties like any other object.




var cat = function (x) {    // **** Important  ***** //
    return x * 2;
}
console.log(cat.name);
// output =>>>> ""
// The name property for anonymous functions returns an empty string.




blah = function () {
    return lala;
    lala = "hi";
};
console.log(blah());
// output =>>>> ReferenceError (due to return)
// This raises a ReferenceError because the lala variable cannot be returned before it's defined.




function foo() {
    return bar();
    function bar() {
        return "Poppin' bottles";
    }
}
console.log(foo());
// output =>>>> Poppin' bottles
// The bar() method is hoisted to the top of the foo() method, so it can be called before it's defined.




function sum(a, b) {
    return a + b;
}
console.log(sum(1, 2, 3, 4));
// output =>>>> 3
// too many arguments are supplied to a function they are simply ignored. The sum() function only takes 2 arguments so the extra arguments (3 and 4) are ignored in this example.




function a(x, y, z) {    // **** Important  ***** //
    return z;
}
console.log(a("blah"));
// output =>>>> undefined
// When too few arguments are supplied to a function, JavaScript assigns the missing arguments to undefined.




love_story = function (x, y) {
    console.log(arguments);
};
love_story("princess", "frog");
// output =>>>> princess, frog
// Arguments is an array-like object that corresponds with the parameters that are passed into a function.




function sum() {
    result = 0;
    arguments.forEach(function (num) {
        result += num;
    });
    return result;
}
sum(1, 2, 3);
// output =>>>> error
// This code raises an error because arguments is an array-like object, but it's not actually an array, so we can't use the forEach() method. According to Douglas Crockford, having arguments as an array-like object and not an actual array is a design flaw in the language.




function c(f) {
    return f();
}
function blub() {
    return "monsters";
}
c(blub);
// output =>>>> monsters
// **********************************************************************************************************************************








//#######################################################################//

// **********************************************************************************************************************************
