/******************************************************************************
 *  Execution       : default node          : cmd> node ValueCompare.js
 *                      
 * 
 *  @Purpose         : JavaScript basic questions
 * 
 *  @file           : ValueCompare.js
 *  @overview       : Compare less than greater than values
 *  @author         : Bhupendra Singh <bhupendrasingh.ec18@gmail.com>
 *  @version        : 1.0
 *  @since          : 10-Apr-2021
 *
 ******************************************************************************/


console.log("1 => ", 2 < 12);
//  output =>>>> true

// When comparing a string with a number, JavaScript will convert the string to a number when doing the comparison. An empty string converts to 0. A non-numeric string converts to NaN which is always false.
console.log("2 => ", 2 < "12");
//  output =>>>> true

console.log("3 => ", 2 < "John");
//  output =>>>> false

console.log("4 => ", 2 > "John");
//  output =>>>> false

console.log("5 => ", 2 == "John");
//  output =>>>> false

console.log("6 => ", "2" < "12");
//  output =>>>> false

// When comparing two strings, "2" will be greater than "12", because (alphabetically) 1 is less than 2.
console.log("7 => ", "2" > "12");
//  output =>>>> true

console.log("8 => ", "2" == "12");
//  output =>>>> false

console.log("9 => ", 7 > 2 > 3 < 9);
//  output =>>>> true beacuse it will check one by one from beginning

console.log("10 => ", 1 > 2 < 3);
//  output =>>>> true beacuse it will check one by one from beginning

console.log("11 => ", 9 > 2 > 9 < 8 < 9);
//  output =>>>> true beacuse it will check one by one from beginning

console.log("12 => ", 9 > 8 > 7 > 9 > 5);
//  output =>>>> false beacuse it will check one by one from beginning