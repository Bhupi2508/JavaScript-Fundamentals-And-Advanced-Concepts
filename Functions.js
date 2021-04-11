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

// #######################################################################################################################



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

// #######################################################################################################################



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

// ######################################################################################################################



// ###################################### Anonymous Function ############################################################
// Anonymous function are used in a place where functions are used as a values
// function () {
//     console.log("Anonymou");
// }
// output =>>>> SyntaxError: Function statements require a function name

// #######################################################################################################################



//################################################# Named Function Expression ############################################
var newE2 = function Named() {
    console.log("newE2 function called")
}
// newE2()
// output =>>>> newE2 function called
// Named()
// output =>>>> ReferenceError: Named is not defined (you can access this function inside that function but not outside)


// #######################################################################################################################



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
console.log(firstClass(second));

// #######################################################################################################################



//#######################################################################//

// #######################################################################################################################



//#######################################################################//

// #######################################################################################################################


//#######################################################################//

// #######################################################################################################################


//#######################################################################//

// #######################################################################################################################


//#######################################################################//

// #######################################################################################################################