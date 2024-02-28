/*
// 1. Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
  const newArr1 = arr.filter(val => ((typeof val === 'number') && (val === 0)));
  const newArr2 = arr.filter(val => ((val !== 0)));
  return (newArr2.concat(newArr1));
}
  
*/

/*
// 2. This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:

function zero(value) {
  if (arguments.length === 0) {
    return 0
  }else {
    let expression = '0' + value;
    console.log(expression);
    let result = new Function ('return ' + expression)();
    console.log(result)
    return Math.floor(result);
  }
}

function one(value) {
  if (arguments.length === 0) {
    return 1
  }else {
    let expression = '1' + value;
    console.log(expression);
    let result = new Function ('return ' + expression)();
    console.log(result)
    return Math.floor(result);
  }
}

function two(value) {
  if (arguments.length === 0) {
    return 2
  }else {
    let expression = '2' + value;
    console.log(expression);
    let result = new Function ('return ' + expression)();
    console.log(result)
    return Math.floor(result);
  }
}

function three(value) {
  if (arguments.length === 0) {
    return 3
  }else {
    let expression = '3' + value;
    console.log(expression);
    let result = new Function ('return ' + expression)();
    console.log(result)
    return Math.floor(result);
  }
}

function four(value) {
  if (arguments.length === 0) {
    return 4
  }else {
    let expression = '4' + value;
    console.log(expression);
    let result = new Function ('return ' + expression)();
    console.log(result)
    return Math.floor(result);
  }
}

function five(value) {
  if (arguments.length === 0) {
    return 5
  }else {
    let expression = '5' + value;
    console.log(expression);
    let result = new Function ('return ' + expression)();
    console.log(result)
    return Math.floor(result);
  }
}

function six(value) {
  if (arguments.length === 0) {
    return 6
  }else {
    let expression = '6' + value;
    console.log(expression);
    let result = new Function ('return ' + expression)();
    console.log(result)
    return Math.floor(result);
  }
}

function seven(value) {
  if (arguments.length === 0) {
    return 7
  }else {
    let expression = '7' + value;
    console.log(expression);
    let result = new Function ('return ' + expression)();
    console.log(result)
    return Math.floor(result);
  }
}

function eight(value) {
  if (arguments.length === 0) {
    return 8
  }else {
    let expression = '8' + value;
    console.log(expression);
    let result = new Function ('return ' + expression)();
    console.log(result)
    return Math.floor(result);
  }
}

function nine(value) {
  if (arguments.length === 0) {
    return 9
  }else {
    let expression = '9' + value;
    console.log(expression);
    let result = new Function ('return ' + expression)();
    console.log(result)
    return Math.floor(result);
  }
}

function plus(num) {
  return `+${num}`
}
function minus(num) {
   return `-${num}`
}
function times(num) {
   return `*${num}`
}
function dividedBy(num) {
   return `/${num}`
}

*/

/* 3. function getInfo (member, year) {
  member.name = 'Frontend-master';
  year = '1947';
}

const person = { name: 'Backend-master' }
const year = '2024';

getInfo (person, year);
console.log (person, year);

output:- { name: 'Frontend-master' }, '2024' as we know that objects are reference data-types and hence when we pass them inside functions and modify them there then changes will also get reflected in original object that is that reference in memory is modified.
*/

/* 4. ( () => {
  let x = (y = 10);

})();

console.log(typeof x);
console.log(typeof y);

output:- 'undefined' 'number', so basically after breaking down this statement it is like:- y = 10 and then let x = y, as x will be collected as garbage value after iife finishes and y is not declared so, undeclared variables are added to the window object or global object in node. Now, when we try to access x in global context then it's type will be undefined and when we try to access y then it is present in global context bcoz it is undeclared so it's type will be 'number'.
*/

/* 5. const obj = { a: 'Mr. X', b: 21}
const dat = {c: true, ...obj}

console.log(dat);

output:- {c: true,  a: 'Mr. X', b: 21}
*/

















