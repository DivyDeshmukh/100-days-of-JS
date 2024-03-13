/*
// 1. 
const arr = ["ab", "cd", "ef"];
const str = "abcdef";

const strMatch = str.includes("a");
const arrMatch = arr.includes("a");

console.log(strMatch, arrMatch);

// output:- true false                          
/*
The String.prototype.includes() method in JavaScript searches for a specific substring within a string and returns true if the substring is found, otherwise false. It indeed searches for both the string itself and its substrings. 
On the other hand, the Array.prototype.includes() method in JavaScript searches for a specific element in an array and returns true if the element is found, otherwise false. It doesn't deal with substrings since arrays contain elements, not strings.
*/

/*
// 2. 
console.log(false == []);
console.log(false == ![]);

// output:- true true
/*
here, as == do not compare data types and only values so to make comparison successful it performs type coercion. Type coercion is the process by which JavaScript automatically converts values from one data type to another when performing operations or comparisons. It happens implicitly in many cases, particularly when using operators like == or when mixing different data types in expressions. so, here to compare false with [] first it converted false to a number that is 0, and then it converted [] to a '' bcoz it cannot be converted to a number as it will be undefined. so now 0 == '' now again '' is converted to false then false to 0 so 0 == 0 is true.
*/

/*
// 3. 
console.log(888888888888888888);                // 18 times 8
console.log(Number.MAX_SAFE_INTEGER);

// output:- 888888888888888800      // 16 times 8 and 2 times 0 bcoz we cannot use a number bigger than MAX_SAFE_INTEGER so after that 0s will be added.
*/

/*
// 4. 
// function show () {
//     {
//         var x = 9;
//         var y = 10;
//     }
//     console.log(x, y);
// }

// show();

// output:- 9 10        // now problem statement that write a code so that this x and y cannot be accessed outside of a block scope but without using let and const. so solution is to wrap x and y inside a function so that they are contained inside a function scope.

function show () {
    {
       (function () {
        var x = 9;
        var y = 10;
       })();
    }
    console.log(x, y);
}

show();

// ReferenceError: 
*/

/*
// 5. 
console.log('A');
(async function () {
    const x = await 5;
    console.log("C");
})();

console.log("B");
*/




