/*
// 1. const {fName: fDev} = {fName: 'Mr X'};
const {fName: fDev} = {fName: 'Mr X'};
console.log(fDev);
*/

/*
// 2. 
function sum (n1, n2=10) {
    console.log(n1+n2);
}

sum (10);                   // 10
sum (10, 20);               // 30
*/

/*
// 3.

const newList = [2, 3].push(4);
console.log(newList.push(5));                   

// output:- It will result in an error as newList will be an integer type 3 bcoz push method returns length of new Array, and we cannot call push on integer so newList.push is not a function.

*/

/*
// 4. 

function getItems (list, ...args, moreItem) {
    console.log([...list, ...args]);
}

getItems([['apple', 'mango'], 'papaya', 'rasberry']);

// output:- This will result in an error because after rest operator we cannot pass anything it must be the last parameter.
*/

/*
// 5. 
function nums (a, b) {
    if (a > b) console.log('a is large');
    else console.log('b is large');
    return
    a+b;
}

console.log(nums(4, 2));
console.log(nums(1, 2));

/* output:- a is large
undefined
b is large
undefined

reason:- The return statement is followed by a line break, and JavaScript automatically inserts a semicolon. Therefore, the function actually returns at that point, and a + b is not part of the return statement. To fix this, you should either put a + b on the same line as return, or wrap it in parentheses:
*/