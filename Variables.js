/******************************************************************************
 *  Execution       : default node          : cmd> node Variables.js
 *
 *
 *  @Purpose         : JavaScript basic questions
 *
 *  @file           : Variables.js
 *  @overview       : learn basic knowledge
 *  @author         : Bhupendra Singh <bhupendrasingh.ec18@gmail.com>
 *  @version        : 1.0
 *  @since          : 11-Apr-2021
 *
 ******************************************************************************/

'#######################################################################'
// const valConst;
// output =>>>> SyntaxError: Missing initializer in const declaration

let valLet;
// output =>>>> undefined

var valVar;
// output =>>>> undefined

'#######################################################################'

const a = 'Name';
// a = 2;
// output =>>>> TypeError: Assignment to constant variable.

let a2 = 'Name';
a2 = 2;
// output =>>>> 2

var a3 = 'Name';
a3 = 2;
// output =>>>> 2

'#######################################################################'

const b = [1, 2, 3];
// b = [2, 7];
// output =>>>> TypeError: Assignment to constant variable.

let b2 = [1, 2, 3];
b2 = [2, 7];
// output =>>>> [2, 7]

var b3 = [1, 2, 3];
b3 = [2, 7];
// output =>>>> [2, 7]

'#######################################################################'

const b1 = [1, 2, 3];
// b1.push('a');
// output =>>>> [ 1, 2, 3, 'a' ]

let b21 = [1, 2, 3];
// b21.push('a');
// output =>>>> [ 1, 2, 3, 'a' ]

var b31 = [1, 2, 3];
b31.push('a');
// output =>>>> [ 1, 2, 3, 'a' ]

'#######################################################################'

const c = { name: "myName" }
// c = { name: "new" };
// output =>>>> TypeError: Assignment to constant variable.

let c2 = { name: "myName" };
c2 = { name: "new" };
// output =>>>> { name: "new" }

var c3 = { name: "myName" };
c3 = { name: "new" };
// output =>>>> { name: "new" }

'#######################################################################'

const c1 = { name: "myName" }
c1.name = "new"
// output =>>>> { name : "new" }

let c21 = { name: "myName" }
c21.name = "new";
// output =>>>> { name: 'new' }

var c31 = { name: "myName" }
c31.name = "new";
// output =>>>> { name: 'new' }

'#######################################################################'

const p = 'name';
const q = p;
// output =>>>> p & q = name

let p2 = 'name';
let q2 = p2;
// output =>>>> p2 & q2 = name

var p3 = 'name';
var q3 = p3;
// output =>>>> p3 & q3 = name

'#######################################################################'

let valueLet = 2;
// let valueLet = "change";
// output =>>>> SyntaxError: Identifier 'value' has already been declared

var valueVar = 2;
var valueVar = "change";
// output =>>>> chanage

'#######################################################################'

//console.log(constBefore);
const constBefore = 'ok';
// output =>>>> ReferenceError: Cannot access 'letBefore' before initialization

// console.log(letBefore);
let letBefore;
// output =>>>> ReferenceError: Cannot access 'letBefore' before initialization

console.log(varBefore);
var varBefore;
// output =>>>> undefined


























