// Leetcode

// 1.
// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

// The fn function takes one or two arguments:

// arr[i] - number from the arr
// i - index of arr[i]
// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

// Please solve it without the built-in Array.filter method.

var filter = function(arr, fn) {
    let i;
    let newArr = [];

    for (i = 0; i < arr.length; i++) {
        if(fn(arr[i], i)) {
            newArr.push(arr[i]);
        }
    }

    return newArr;
};

// 2. Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.

// This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.

// If the length of the array is 0, the function should return init.

// Please solve it without using the built-in Array.reduce method.

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let val;
    let i;

    if (nums.length === 0) return init;

    for (i = 0; i < nums.length; i++) {
        // if(i===0) 
        // {
        //     val = fn(init, nums[i])
        // }else {
        //     val = fn(val, nums[i]);
        // }

        val = (i===0) ? fn(init, nums[i]) : fn(val, nums[i]);

    }

    return val;
};

//3. Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

// The function composition of an empty list of functions is the identity function f(x) = x.

// You may assume each function in the array accepts one integer as input and returns one integer as output.

 

// Example 1:

// Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
// Output: 65
// Explanation:
// Evaluating from right to left ...
// Starting with x = 4.
// 2 * (4) = 8
// (8) * (8) = 64
// (64) + 1 = 65

var compose = function(functions) {
  
    return function(x) {
        let result = x;
       for(let i = functions.length-1; i >= 0; i--) {
           result = functions[i](result);
       } 
       return result;
    //    return function(result)
    }
};

// 4. Write a function argumentsLength that returns the count of arguments passed to it.

// Example 1:

// Input: args = [5]
// Output: 1
// Explanation:
// argumentsLength(5); // 1

// One value was passed to the function so it should return

var argumentsLength = function(...args) {
    return args.length;
};

// 5. Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

// The first time the returned function is called, it should return the same result as fn.
// Every subsequent time it is called, it should return undefined.
 

// Example 1:

// Input: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
// Output: [{"calls":1,"value":6}]
// Explanation:
// const onceFn = once(fn);
// onceFn(1, 2, 3); // 6
// onceFn(2, 3, 6); // undefined, fn was not called

var once = function(fn) {
    let count = 0;
    return function(...args){
        let val;
        if(count===0) {
            val = fn(...args);
             count++;
            return val;
        }

    }
};