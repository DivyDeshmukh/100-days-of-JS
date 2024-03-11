/*
// 1.
const obj = {};

obj[obj["A"] = "B"] = "C";              // It's important to note that the behavior might vary slightly depending on the programming language you are using, but the general principle is that the result of the assignment is the value being assigned. The result of an assignment expression is indeed the value that is assigned.

console.log(obj);

// output:- { A: 'B', B: 'C' }  

/* breakdown the program:- 
const obj = {};
obj["A"] = "B";
const key = obj["A"];
obj[key] = "C";
*/

/*
// 2. 5 ways to create object

const obj1 = {name: 'Divy', age: 21};                // object literal notation
const obj2 = {...obj1, sub: 'cs'};
const obj3 = Object.assign({}, obj2);
const obj4 = Object.create(obj1);                      // remember, obj4 do not have its own props and that is why obj4 will be {}.
const obj5 = new Object({a: 1, b: 2});
console.log(obj1, obj2, obj3, obj4, obj5);

function test () {}
const obj6 = new test();
Object.setPrototypeOf(obj6, Object.prototype);              // this will inherit prototype of Object
console.log(obj1, obj2, obj3, obj4, obj5);
*/

/*
// 3. 
function test () {
    for (var i = 0; i<5; i++) {
        setTimeout(function() {
            console.log(i);
        }, 100);
    }
}

// output:- 5 5 5 5 5       // as variables declared with var are hoisted to the top and hence, i will be declared only once, next is that the callback inside setTimeout will run after loop ends and hence, calls final value of i that is 5. To solve this use let  and then in each iteration new varaible will be created. Another method is to use iife.

function test () {
    for (var i = 0; i<5; i++) {
        (function (val) {
            setTimeout(function() {
                console.log(val);
            }, 100);
        })(i);
    }
}

test();
*/

/*
// 4. const arr = [1, 2, 3];
console.log(arr[5]);

// output:- undefined           // as everything in js is an object and when we are accessing index 5 value then we are accessing a key 5 which do not exist. So, if we access a key that do present in an object then we generally get undefined.
*/

/*
// 5. 
function init (x, y, z) {}

function end (a, b=0, c) {}

console.log(init.length);
console.log(end.length);

// output:- 3 1             // as length property on function provides length of the arguments it expects, but parameters with default values are considered as optionals and after them all arguments are considered as optionals and hence they are not considered in length. If in inti we x = 0 then init.length will be 0.
*/