// // // function abc(num) {
// // //     this.num = num;
// // //     return num*5;
// // // }

// // // abc.power = 2;
// // // abc.exp = 4;
// // // console.log(abc(5));
// // // console.log(abc.power);
// // // console.log(abc);
// // // console.log(abc.prototype);                      // {} bcoz nothing is added using .prototype
// // // const arr = new Array(1, 2, 3, 4);
// // // const obj = new Object({
// // //     name: 'Divy',
// // //     age: 21
// // // })

// // // // console.log(obj);
// // // const fun = new Function('a', 'b', 'return a+b');                 // first n arguments are its parameters and last is function body
// // // console.log(fun(4,5));
// // // const a = new abc(5);

// // // abc.prototype.hello = () => {
// // //     console.log(hello);
// // // }
// // // console.log(abc.prototype);                 // only give properties or methods that are defined using .prototype

// // function createUser(username, score) {
// //     this.username = username;
// //     this.score = score;
// // }

// // createUser.prototype.increment = function () {
// //     this.score++; 
// // }

// // createUser.prototype.printMe = function () {
// //     console.log(`score is ${this.score}`);
// // }

// // const chai = new createUser('chai', 25);
// // const tea = createUser('tea', 250);

// // chai.printMe();

// // /*
// // Here's what happens behind the scenes when the new keyword is used:

// // A new object is created: The new keyword initiates the creation of a new JavaScript object.

// // A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

// // The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

// // The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.
// // */

// const User = {
//     name: "chai",
//     email: "chai@google.com"
// }

// const Teacher = {
//     makeVideo: true
// }

// const TeachingSupport = {
//     isAvailable: false
// }

// let TASupport = {
//     makeAssignment: 'JS Assignment',
//     fullTime: true,
//     __proto__: TeachingSupport
// }

// Teacher.__proto__ = User

// // Object.prototype.commonMethod = () => {
// //     console.log('now, every object can use this common method');
// // }

// // Teacher.commonMethod();
// // TeachingSupport.commonMethod();
// // TASupport.commonMethod();

// /*
// // how to make TASupport inherit props from TeachingSupport other than __proto__
// const TeachingSupport = {
//     isAvailable: false
// };

// let TASupport = Object.create(TeachingSupport);
// TASupport.makeAssignment = 'JS Assignment';
// TASupport.fullTime = true;

// console.log(TASupport.isAvailable); // false
// console.log(TASupport.makeAssignment); // 'JS Assignment'
// console.log(TASupport.fullTime); // true
// */

// // modern syntax (__proto__) is old
// Object.setPrototypeOf(TeachingSupport, Teacher);
// /*the use of Object.setPrototypeOf() to dynamically change the prototype of an object. While it is a valid technique, it's less common and can have some performance implications. So, the caution is about preferring more straightforward and conventional approaches (like class or Object.create()) over dynamic manipulation of prototypes unless there's a specific reason to use the latter.*/

// let anotherUserName = "ChaiAurCode             "
// // setting method on String prototype itself so that every instance of String can use it.
// String.prototype.trueLength = function () {
//     console.log(`${this}`);
//     console.log(this.constructor);
//     console.log(`True Length is ${this.trim().length}`);
// }

// anotherUserName.trueLength();
// "Divy           ".trueLength()
// "khushi         ".trueLength()
   
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


