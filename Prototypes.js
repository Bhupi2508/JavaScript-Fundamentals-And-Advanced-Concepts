/******************************************************************************
 *  Execution       : default node          : cmd> node Prototypes.js
 *
 *
 *  @Purpose         : JavaScript basic questions
 *
 *  @file           : Prototypes.js
 *  @overview       : // JavaScript Prototypes
 *  @author         : Bhupendra Singh <bhupendrasingh.ec18@gmail.com>
 *  @version        : 1.0
 *  @since          : 18-Apr-2021
 *
 ******************************************************************************/
let _a = 10;
console.log("1 ", _a);
function _first() {
    function _second() {
        console.log("2 ", _a);
        _a = 20;
        return function _third() {
            console.log("3 ", _a);
        }
    }
    _second()()

}
_first()