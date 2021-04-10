/******************************************************************************
 *  Execution       : default node          : cmd> node DataTypes.js
 *                      
 * 
 *  @Purpose         : JavaScript basic questions
 * 
 *  @file           : app.js
 *  @overview       : // JavaScript Data Types
 *  @author         : Bhupendra Singh <bhupendrasingh.ec18@gmail.com>
 *  @version        : 1.0
 *  @since          : 10-Apr-2021
 *
 ******************************************************************************/

console.log(Symbol() == Symbol() || Symbol() === Symbol());
//  output =>>>> false

console.log("1 => ", null == undefined);
//  output =>>>> true

console.log("2 => ", null === undefined);
//  output =>>>> false

console.log("3 => ", 0);
//  output =>>>> print 0 but value is false

console.log("4 => ", 0.2 || 1 || -1 || -0.4);
//  output =>>>> //  output =>>>> print given values which is true
