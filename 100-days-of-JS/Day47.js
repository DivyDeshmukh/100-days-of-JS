/* 1.

let z = a = {};

a.name = 'JS';

console.log(z.name);

// output:- 'JS'            // as both z and a refers to the same data in memory

*/

/* 2. 

function task () {
    return new Promise ((res) => {
        res("daata");
    })
}

const result = task().then();

console.log(result);

// output:- Promise <pending>
// if no explicit return in then() then then() returns a promise which get resolves immediately.
*/

  
/* 3.

console.log(1);

// for invoking callback inside promise immediately
new Promise (function (res) {
    console.log(2);
});

// to call it when we want then wrap promise inside a function and then you can call that function whenever you want.

console.log(3);

// output:- 1 2 3
// Promise constructor invokes internal callback automatically.

*/

/* 4.
let x = 10;
let y = "A";

[x, y] = [y, x];

console.log({x, y});

// So, when you write console.log({x, y});, it is equivalent to writing console.log({x: x, y: y});. This creates an object with keys x and y, and their values are taken from the variables with the same names.
*/

/* 5.
let x = [typeof x, typeof y];
console.log(x);

// output:- ReferenceError: Cannot access 'x' before initialization             // as variables with let are not hoisted and hence, error but if we use var then we will get ['undefined', 'undefined'];. Also, as y is not declared and hence, it is considered as var so hoisted to the top and we get undefined in its place.
// . In JavaScript, when a variable is declared without the let, const, or var keyword, it becomes a global variable if it's declared in the global scope (outside of any function). If it's declared inside a function without any of those keywords, it becomes a variable with function scope, specific to that function's execution context.
*/
 
