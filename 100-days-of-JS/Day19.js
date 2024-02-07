// 1.
// var variable = 10;

// (() => {
//     console.log(variable);

//     variable = 20;

//     console.log(variable);
// })();

// console.log(variable);
// var variable = 30;
// console.log(variable);
//  When you use var to declare a variable in JavaScript, the variable is hoisted to the top of its containing scope during the compilation phase. This means that memory is allocated for the variable only once, regardless of how many times you declare it in the code. The multiple declarations are essentially treated as a single declaration. 
// In the case of let and const, the variable declaration and assignment are not separated during hoisting, and redeclaring a variable with the same name in the same scope is not allowed. 
// const iife = (() => {
//     console.log('Hello');       // Hello
// })();

// console.log(iife);          // undefined

/*
// 1. 
console.log("Value of Age is", age);

var age = 20;                              

console.log("Value of Age is", age);

// hoisting will work and variables created using var are generally assigned with undefined after allocating memory to them in the memory allocation phase.

// output:
/* Value of age is undefined
Value of age is 20 */

/*
// 2. 

age = 100;
console.log("Value of age is", age);
let age = 30;

// The term "temporal dead zone" is often used in the context of JavaScript programming, particularly with regard to the let and const declarations. In JavaScript, a temporal dead zone refers to the period between the start of the execution of a scope (such as a function or block) and the point where a variable is declared with let or const.
// so basically for let and const also memory is allocated but they are only assigned with values during execution phase and hence when we try to access it before its initialization then gives error.

// During this temporal dead zone, if you try to access the variable before its declaration, a ReferenceError will be thrown. This is different from variables declared with var, which are hoisted to the top of their scope and can be accessed throughout the entire scope, even before the actual declaration.

*/

// 3. 

myFun();

var myFun = function () {
    console.log("First");
}

myFun();

function myFun() {
    console.log("Second");
}

myFun();

// // First, var myFun is allocated memory and assigned with undefined, then myFun function is allocated memory and assigned with function definition, Now, when execution phase starts myFun() function will run, then myFun variable is reassigned with new function definition and hence, myFun(); will first, then it will ignore function myFun() {
//     console.log("Second");
// } and myFun(); will give 'first'
// Output:-
// Second
// First
// First

/*
// 4.
var variable = 10;

(() => {
    console.log(variable);
    variable = 20;
    console.log(variable);
})();

console.log(variable);
var variable = 30;              // no error for redeclaration as with var memory is only allocated once.
console.log(variable);

/* output:-
10
20
20
30
*/

/*
// 5.
foo = 30;
console.log('Foo', foo);

var foo = 100;

console.log('Foo', foo);

// output: -
/* Foo, 30
Foo, 100
*/


