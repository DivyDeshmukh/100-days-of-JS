/* 1. 
const data = 100;
console.log(data.toString());
console.log(100.toString());                // error  Invalid or unexpected token

solution:- 
In JavaScript, when you use dot notation immediately after a numeric literal, like 100.toString(), it can result in a syntax error. This is because the JavaScript interpreter initially interprets the numeric literal 100. as a floating-point number rather than an object, and then it expects a valid property or method to be accessed with the dot notation.
two ways:-
1. console.log((100).toString())                        // To fix this, you can use parentheses to force the interpreter to treat the numeric literal as an object:
2. console.log(100..toString())                         // Adding an extra dot (.) after the numeric literal helps the interpreter understand that it should treat it as an object and not as a floating-point number.      
*/

/* 2. const obj = { a: "1", b: "2", a: "2" };
console.log(obj);

output:- { a: "2", b: "2" }                     // in case of duplicates properties the key that is added in the last will be used so in this a: "2"
*/

/* 3. function sayHi() {
    return (() => 0)();
}

console.log(typeof sayHi());

output:- number, because iife is executed immediately and it returned 0 and then sayHi method returned 0 so typeof 0 is 'number'.
*/

/* 4. console.log(typeof typeof 1);

output:- string,                because typeof 1 will be 'number' and typeof 'number' will be string.
*/

/* 5. 
const arr = [1, 2, 3];
arr[10] = 11;
console.log(arr);

output:- [ 1, 2, 3, <7 empty items>, 11 ]               // as js automatically handles this exceptions so on places where we have not filled anything it will fill that with empty items and if we had done same thing in other languages like In Java, if you try to access an out-of-bounds index, it will throw an ArrayIndexOutOfBoundsException at runtime, or In C++, if you try to access an out-of-bounds index, it may result in undefined behavior.
*/
