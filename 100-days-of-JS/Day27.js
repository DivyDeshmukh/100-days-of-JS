// Leetcode Problems

/*
// 1. Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function.

The time limited function should follow these rules:

If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.
If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded". */

var timeLimit = function(fn, t) {
    
    return async function(...args) {
        return new Promise ((resolve, reject) => {
            const id = setTimeout(() => reject("Time Limit Exceeded"), t);
            fn(...args)
                .then((res) => resolve(res))
                .catch((err) => reject(err))
                .finally(() => clearTimeout(id));
        })
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */

// 2. Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

// The class has three public methods:

// set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.

// get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

// count(): returns the count of un-expired keys.

 

// Example 1:

// Input: 
// actions = ["TimeLimitedCache", "set", "get", "count", "get"]
// values = [[], [1, 42, 100], [1], [], [1]]
// timeDelays = [0, 0, 50, 50, 150]
// Output: [null, false, 42, 1, -1]
// Explanation:
// At t=0, the cache is constructed.
// At t=0, a key-value pair (1: 42) is added with a time limit of 100ms. The value doesn't exist so false is returned.
// At t=50, key=1 is requested and the value of 42 is returned.
// At t=50, count() is called and there is one active key in the cache.
// At t=100, key=1 expires.
// At t=150, get(1) is called but -1 is returned because the cache is empty.

class TimeLimitedCache {
    constructor() {
        this.cache = {};
    }

    set(key, value, duration) {
        const currentTime = new Date().getTime();
        const expirationTime = currentTime + duration;

        if (this.cache[key] && this.cache[key].expirationTime > currentTime) {
            // Key already exists and is not expired
            this.cache[key] = { value, expirationTime };
            return true;
        } else {
            // Key doesn't exist or is expired
            this.cache[key] = { value, expirationTime };
            return false;
        }
    }

    get(key) {
        const currentTime = new Date().getTime();

        if (this.cache[key] && this.cache[key].expirationTime > currentTime) {
            // Key exists and is not expired
            return this.cache[key].value;
        } else {
            // Key doesn't exist or is expired
            return -1;
        }
    }

    count() {
        const currentTime = new Date().getTime();
        let count = 0;

        for (const key in this.cache) {
            if (this.cache[key].expirationTime > currentTime) {
                // Key is not expired
                count++;
            }
        }

        return count;
    }
}

// Example usage
const cache = new TimeLimitedCache();
console.log(cache.set(1, 42, 100)); // false
console.log(cache.get(1)); // 42
console.log(cache.count()); // 1

// Simulate time passing
setTimeout(() => {
    console.log(cache.get(1)); // -1
    console.log(cache.count()); // 0
}, 150);


/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */

// 3. Given a function fn and a time in milliseconds t, return a debounced version of that function.

// A debounced function is a function whose execution is delayed by t milliseconds and whose execution is cancelled if it is called again within that window of time. The debounced function should also receive the passed parameters.

// For example, let's say t = 50ms, and the function was called at 30ms, 60ms, and 100ms. The first 2 function calls would be cancelled, and the 3rd function call would be executed at 150ms. If instead t = 35ms, The 1st call would be cancelled, the 2nd would be executed at 95ms, and the 3rd would be executed at 135ms.

// Debounce Schematic

// The above diagram shows how debounce will transform events. Each rectangle represents 100ms and the debounce time is 400ms. Each color represents a different set of inputs.

// Please solve it without using lodash's _.debounce() function.

 

// Example 1:

// Input: 
// t = 50
// calls = [
//   {"t": 50, inputs: [1]},
//   {"t": 75, inputs: [2]}
// ]
// Output: [{"t": 125, inputs: [2]}]
// Explanation:
// let start = Date.now();
// function log(...inputs) { 
//   console.log([Date.now() - start, inputs ])
// }
// const dlog = debounce(log, 50);
// setTimeout(() => dlog(1), 50);
// setTimeout(() => dlog(2), 75);

// The 1st call is cancelled by the 2nd call because the 2nd call occurred before 100ms
// The 2nd call is delayed by 50ms and executed at 125ms. The inputs were (2).

// 3. Given a function fn and a time in milliseconds t, return a debounced version of that function.

// A debounced function is a function whose execution is delayed by t milliseconds and whose execution is cancelled if it is called again within that window of time. The debounced function should also receive the passed parameters.

// For example, let's say t = 50ms, and the function was called at 30ms, 60ms, and 100ms. The first 2 function calls would be cancelled, and the 3rd function call would be executed at 150ms. If instead t = 35ms, The 1st call would be cancelled, the 2nd would be executed at 95ms, and the 3rd would be executed at 135ms.

// Debounce Schematic

// The above diagram shows how debounce will transform events. Each rectangle represents 100ms and the debounce time is 400ms. Each color represents a different set of inputs.

// Please solve it without using lodash's _.debounce() function.

 

// Example 1:

// Input: 
// t = 50
// calls = [
//   {"t": 50, inputs: [1]},
//   {"t": 75, inputs: [2]}
// ]
// Output: [{"t": 125, inputs: [2]}]
// Explanation:
// let start = Date.now();
// function log(...inputs) { 
//   console.log([Date.now() - start, inputs ])
// }
// const dlog = debounce(log, 50);
// setTimeout(() => dlog(1), 50);
// setTimeout(() => dlog(2), 75);

// The 1st call is cancelled by the 2nd call because the 2nd call occurred before 100ms
// The 2nd call is delayed by 50ms and executed at 125ms. The inputs were (2).

/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let id;
    return function(...args) {
        clearTimeout(id);
        id = setTimeout(() => fn(...args), t);
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */

// 4. 2721. Execute Asynchronous Functions in Parallel
// Medium
// Companies
// Given an array of asynchronous functions functions, return a new promise promise. Each function in the array accepts no arguments and returns a promise. All the promises should be executed in parallel.

// promise resolves:

// When all the promises returned from functions were resolved successfully in parallel. The resolved value of promise should be an array of all the resolved values of promises in the same order as they were in the functions. The promise should resolve when all the asynchronous functions in the array have completed execution in parallel.
// promise rejects:

// When any of the promises returned from functions were rejected. promise should also reject with the reason of the first rejection.
// Please solve it without using the built-in Promise.all function.

 

// Example 1:

// Input: functions = [
//   () => new Promise(resolve => setTimeout(() => resolve(5), 200))
// ]
// Output: {"t": 200, "resolved": [5]}
// Explanation: 
// promiseAll(functions).then(console.log); // [5]

// The single function was resolved at 200ms with a value of 5.

/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
    return new Promise((resolve, reject) => {
        const results = [];
        let completedCount = 0;

        if (functions.length === 0) {
            resolve(results);
            return;
        }

        functions.forEach((func, index) => {
            func().then(
                (result) => {
                    results[index] = result;
                    completedCount++;

                    if (completedCount === functions.length) {
                        resolve(results);
                    }
                },
                (reason) => {
                    reject(reason);
                }
            );
        });
    });
};

// Example usage:
const promise = promiseAll([
    () => new Promise((res) => setTimeout(() => res(5), 200)),
]);

promise.then(console.log).catch(console.error); // {"t": 200, "resolved": [5]}

// 5. Given an object or an array, return if it is empty.

// An empty object contains no key-value pairs.
// An empty array contains no elements.
// You may assume the object or array is the output of JSON.parse.

 

// Example 1:

// Input: obj = {"x": 5, "y": 42}
// Output: false
// Explanation: The object has 2 key-value pairs so it is not empty.
// Example 2:

// Input: obj = {}
// Output: true
// Explanation: The object doesn't have any key-value pairs so it is empty.
// Example 3:

// Input: obj = [null, false, 0]
// Output: false
// Explanation: The array has 3 elements so it is not empty.
 
/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    if(Object.entries(obj).length === 0) {
        return true;
    }else {
        return false;
    }
};
const obj = {"x": 5, "y": 42};
console.log(isEmpty (obj));