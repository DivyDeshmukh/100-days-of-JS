/*
// 1. Write a JavaScript program to find the largest element in a nested array.

function larElem (arr) {
    return Math.max(...arr.flat(Infinity));
} 

console.log(larElem([2, 3, [45, 1], [3, 9, [22, 90]]]));
*/

/*
// 2. Implement a debounce function in JavaScript that limits the frequency of a function’s execution when it’s called repeatedly within a specified time frame.

// Sample answer: By delaying the execution of the debounce function until the specified time frame has passed, the frequency can be limited. 

function debounce(func, delay) { 

    let timer; 
  
    return function() { 
  
      clearTimeout(timer); 
  
      timer = setTimeout(func, delay); 
  
    }; 
  
  } 

 const d1 = debounce(() => console.log('Debounce'), 1000);
 const d2 = debounce(() => console.log('Debounce2'), 1500);

d1();
d2();

// A debounce function delays the execution of a function until a specified time has passed since the last invocation, reducing the frequency of function calls.

use case: One use case for a debounce function is in handling user input, such as search suggestions or auto-complete. It delays the execution of a search function until the user has stopped typing, improving performance and reducing unnecessary API calls.
*/

/*
// 3. Write a function that takes an array of objects and a key, and returns a new array sorted based on the values of that key in ascending order. 

function sortArrOfObj (arr) {
    return arr.sort((a,b) => a[id] - b[id]);
}

var arrOfObj = [
    {
        id: 34,
        cc: 'ss'
    },
    {
        id: 21,
        cc: 'ss'
    },
    {
        id: 45,
        cc: 'ss'
    },
    {
        id: 55,
        cc: 'ss'
    }
]

const sortedArr = sortArrOfObj(arrOfObj);
console.log(sortedArr);
*/
/*
// 4. Implement a function that takes two sorted arrays and merges them into a single sorted array without using any built-in sorting functions. 

function sort (arr1, arr2) {
    const merge = [...arr1, ...arr2];
    const sorted = merge.sort((a, b) => a-b);
    return sorted;
}

arr1 = [1,2,3,4,10]
arr2 = [21, 6, 9, 8]

console.log(sort(arr1, arr2));
*/

/*
// 5. Write a function that reverses the order of words in a sentence without using the built-in reverse() method. 

function reverse (str) {
    const arr = str.split(" ");
    const reverseArr = arr.map ((val, i) => arr[(arr.length - i) - 1]);
    return reverseArr.join(' ');
}

str = 'Hey there My name is Divy Deshmukh'
console.log(reverse(str));

let max = 1;
const arr = [1, 2, 5, 21, 6, 9, 8];
let num1;
let num2;
arr.forEach((val) => {
    for (var i = 0; i < arr.length; i++) {
        let diff = val - arr[i];
        if (diff > max) {
            max = diff;
            num1 = val;
            num2 = arr[i];
        }
    }
});



console.log(`Max Difference: ${num1} - ${num2} = ${max}`);
*/
