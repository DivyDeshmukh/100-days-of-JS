/*
// 1. 
console.log(4 + "4");
console.log(8 + +"8");

// output:- '44' 16             // When the + operator is used with different data types, JavaScript performs type coercion to try and convert the values to a common type before performing the operation. +true: JavaScript will try to convert the boolean value true to a number. true is equivalent to 1, so the result will be 1. +"9": JavaScript will convert the string "9" to a number. The result will be the number 9. Keep in mind that type coercion can have unexpected results, so it's a good practice to explicitly convert types if needed for clarity and to avoid potential issues.
*/

/*
// 2.
console.log(typeof jsIsAwesome);

// 'undefined'              // if we use an undeclared variable with typeof then it will not give an error but if we use it with any other operators then they will.
*/

/*
// 3. 
const data = new Array(100);

const len = data.length;
for (let i = 0; i<len; i++) {
    // some code
}

// so basically to optimize this code we have to stop calculating length in each iteration. 
*/

/*
// 4. 
function sum() {
    console.log('sum');
    return 2+2;
}

function sq() {
    console.log('sq');
    return 4*4;
}

let a = (sum(), sq());
console.log(a);

// in a 16 will come, bcoz everything will run from left to right and hence at last sq() will run and value will get assigned to a
*/

/*
// 5.
const obj = {name: 'X'};

delete obj.name;
obj?.name = 'Y';

 // error:-  Invalid left-hand side in assignment           // if obj is null or undefined, the expression obj?.name will result in undefined, and you cannot assign a value to a property of undefined.
 */

 