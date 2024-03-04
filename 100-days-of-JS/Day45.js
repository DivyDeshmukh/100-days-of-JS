/*
1. const myFunc = ({x, y, z}) => {

    console.log(x, y, z);
}

myFunc(1, 2, 3);
// it is interpreted like this:- const { x, y, z } = 1;
output:- undefined undefined undefined                              // When you call the function with separate arguments, the destructuring will not work as expected, and the variables x, y, and z will be undefined. The corrected explanation is that you will not get an error, but the values of x, y, and z will be undefined.
*/

/*
// 2. 
const add = (x) => (y) => (z) => {
    console.log(x, y, z);
    return x + y + z;
}

console.log(add(10)(20)(30));
add(10)(20)(30);

/* output:- 10 20 30
60
10 20 30
*/

// this is the concept of currying in js....the above function can be iterpreted like this:
/* 
function (x) {
    return function (y) {
        return function (z) {
            return x + y + z;
        }
    }
}

add (10)(20)(30);
*/

/*
// 3. const groceries = ['apples', 'grapes'];

if (groceries.indexOf('apples')) {
    console.log('We have apples');
}else {
    console.log('We don't have apples');
}

// output:- We don't have aaples
*/

/*
// 4. 
const obj = { name: "JS" }
obj.ref = obj;
// obj.ref = {name: "JS"}                                      // This JSON representation shows two distinct objects in memory: the main object with the property name, and another object assigned to the ref property. They are not the same memory location.
const str = JSON.stringify (obj);

console.log (str);

// output:- TypeError: Converting circular structure to JSON.           // this is bcoz we have an object inside which we are referring to the same obj as a key and JSON.stringify do not support circular references that is obj inside obj. 
*/

/* 5. 

var arr = 900
function arr () {
    console.log('Magic');
}

console.log(arr);

// output:- 900     
/* let's breakdown this 
function magic () {
    console.log("magic");
}

var magic;

magic = 900;
console.log(magic);
*/

// function magic () {
//     console.log("magic");
// }

// var magic = 900;
// console.log(magic());

/* During hoisting:

Memory space is allocated for the function magic.
Memory space is also allocated for the variable magic, but it's initially uninitialized.
Later in the code, when you do magic = 900;:

The memory space allocated for the function magic is overwritten with the value 900. Now, magic refers to the variable holding the value 900, and the function reference is lost.*/