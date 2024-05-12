/*
// 1. 
function checkAge (data) {
    if (data === {age: 18}) {
        console.log('You are an adult');
    }else if (data == {age: 18}) {
        console.log('You are not an adult');
    }else {
        console.log('No Age');
    }
}

checkAge({age: 18});
// as this object represent memory reference and hence they are not equal even if there values are equal, we are comparing memory references
*/

/*
// 2.
function getType (...args) {
    console.log(typeof args);
}

getType(108);
*/

/*
// 3. 
function getAge () {
    'use strict';
    salary = 8212;
    console.log(salary);
}

getAge();

// error:- salary is not defined because we have used use strict and when it enforces us to declare variables.
*/

/*
// 4.
var num = 8;
var num = 10;
console.log(num);

// 10:- bcoz of variable hoisting and scope concept
*/

/*
// 5.
const obj = {1: 'a', 2: 'b', 3: 'c'};
const set = new Set ([1, 2, 3, 4, 5]);

console.log(obj.hasOwnProperty("1"));
console.log(obj.hasOwnProperty(1));

console.log(set.has("1"));
console.log(set.has(1));

// The Set constructor expects a single iterable as its argument. If you want to pass multiple values, you need to use an iterable container like an array.

*/
