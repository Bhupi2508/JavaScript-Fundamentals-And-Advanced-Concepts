/******************************************************************************
 *  Execution       : default node          : cmd> node NaN.js
 *                      
 * 
 *  @Purpose         : JavaScript basic questions
 * 
 *  @file           : NAN.js
 *  @overview       : // NAN values
 *  @author         : Bhupendra Singh <bhupendrasingh.ec18@gmail.com>
 *  @version        : 1.0
 *  @since          : 10-Apr-2021
 *
 ******************************************************************************/

console.log("1 =>", NaN == NaN || NaN === NaN);
//  output =>>>> false

console.log("2 =>", isNaN() == isNaN() || isNaN() === isNaN());
//  output =>>>> true

console.log("3 =>", isNaN(1));
//  output =>>>> false

console.log("4 =>", isNaN(true));
//  output =>>>> false

console.log("5 =>", isNaN(false));
//  output =>>>> false

console.log("6 =>", isNaN('1'));
//  output =>>>> false

console.log("8 =>", isNaN(null));
//  output =>>>> false

console.log("7 =>", isNaN('A'));
//  output =>>>> true

console.log("9 =>", isNaN(undefined));
//  output =>>>> true