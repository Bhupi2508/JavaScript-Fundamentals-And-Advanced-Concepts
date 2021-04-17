/******************************************************************************
 *  Execution       : default node          : cmd> node Loops.js
 *
 *
 *  @Purpose         : JavaScript basic questions
 *
 *  @file           : Loops.js
 *  @overview       : learn basic knowledge
 *  @author         : Bhupendra Singh <bhupendrasingh.ec18@gmail.com>
 *  @version        : 1.0
 *  @since          : 14-Apr-2021
 *
 ******************************************************************************/


/**
 * @description :- Closure means that an inner function always has access to the vars and parameters of its outer function, even after the outer function has returned.
 *
 */
//############################### For loop with let and var #############################################
// function A() {
//     for (var i = 1; i <= 5; i++) {
//         setTimeout(() => {
//             // console.log(i)
//         }, i * 1000);
//     }
// }
// A();
// // Output ===>>>   5, 5, 5, 5, 5 (Because of global var and js will not wait for anyone)



// function B() {
//     for (let i = 1; i <= 5; i++) {
//         setTimeout(() => {
//             //  console.log(i)
//         }, i * 1000);
//     }
// }
// B();
// // Output ===>>>   1, 2, 3, 4, 5 (Because of global var and js will not wait for anyone)




//       <<< ===== >>>                   OR              <<<  ===== >>>             //



// function C() {
//     for (var i = 1; i <= 5; i++) {
//         function closure(j) {
//             setTimeout(() => {
//                 // console.log(j)
//             }, i * 1000);
//         }
//         closure(i)
//     }
// }
// C();
// // Output ===>>>   1, 2, 3, 4, 5 (Because of global var and js will not wait for anyone)