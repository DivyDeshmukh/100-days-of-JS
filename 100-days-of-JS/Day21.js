// Leetcode Questions

/*
// 1. Write a function createHelloWorld. It should return a new function that always returns "Hello World".
var createHelloWorld = function() {
    
  return function(...args) {
      return 'Hello World';
  }
};


const f = createHelloWorld();
console.log(f()); // "Hello World"
*/

/*
//2. Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

// Example 1:

// Input: 
// n = 10 
// ["call","call","call"]
// Output: [10,11,12]
// Explanation: 
// counter() = 10 // The first time counter() is called, it returns n.
// counter() = 11 // Returns 1 more than the previous time.
// counter() = 12 // Returns 1 more than the previous time.

var createCounter = function(n) {
    
  return function() {
      return n++;
  };
};


const counter = createCounter(10)
counter() // 10
counter() // 11
counter() // 12
*/

/*
// 3. Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.
// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

function expect(actual) {
    return {
      toBe(expected) {
        if (actual !== expected) {
          throw new Error("Not Equal");
        }
        return true;
      },
      notToBe(expected) {
        if (actual === expected) {
          throw new Error("Equal");
        }
        return true;
      }
    };
  }
  
  // Example usage:
  
  try {
    expect(5).toBe(5); // This will not throw an error
    expect(5).notToBe(10); // This will not throw an error
    expect("hello").toBe("world"); // This will throw an error: "Not Equal"
    expect(true).notToBe(true); // This will throw an error: "Equal"
  } catch (error) {
    console.error(error.message);
  }
*/

/*
  // 4. Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.
 

// Example 1:

// Input: init = 5, calls = ["increment","reset","decrement"]
// Output: [6,5,4]
// Explanation:
// const counter = createCounter(5);
// counter.increment(); // 6
// counter.reset(); // 5
// counter.decrement(); // 4

let prev;
var createCounter = function(init) {
    prev = init;
    return {
        increment: function () {
            return ++init;
        },
        decrement: function () {
            return --init;
        },
        reset: function () {
            return init = prev;
        }
    }
};

const counter = createCounter(5)
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
*/

/*
// // 5. Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

 

// Example 1:

// Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// Output: [2,3,4]
// Explanation:
// const newArray = map(arr, plusone); // [2,3,4]
// The function increases each value in the array by one.

var map = function(arr, fn) {
  let newArr = [];
  arr.forEach((val, i) => {
      let n = fn(val, i);
      newArr.push(n);
  });

  return newArr;
};

let arr = [1, 2, 3];
let fn = function plusone(n) {
  return n + 1;
}

const newArr = map(arr, fn);
console.log(newArr);
*/