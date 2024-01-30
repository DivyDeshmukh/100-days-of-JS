//Day 2

/*
//1. How to find vowels from string in js
function vowels (str) {

let vowels = [];

for (let char of str) {
    // if (!vowels.includes(char)) {
    //     if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    //         vowels.push (char);
    //     }
    // }

    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        vowels.push (char);
    }
}
    // return vowels;

    return [...new Set(...[vowels])];

}

let str = "Hello kese ho";
console.log(vowels(str.toLowerCase()));

// Another Method
// function vowels(str) {
//     // Using a regular expression to match vowels
//     const vowelMatches = str.toLowerCase().match(/[aeiou]/g);

//     // If there are matches, return the array of vowels; otherwise, return an empty array
//     return vowelMatches ? vowelMatches : [];
// }

// let str = "Divy Deshmukh";
// console.log(vowels(str)); 
*/

/*
// 2. How to reverse a string in js
function revStr (str) {
    // let revStr = str.split('').reverse().join('');
    let revStr = Array.from(str).reverse().join('');
    return revStr;
}

console.log(revStr("Divy"));
*/

/*
// 3. How to find a palindrome in js

// function palindrome(num) {
//     num = Array.from(String(num), Number);

    // const num = Array.from(String(num), function(val) {
    //     return Number(val);
    // } );

//     let mid = Math.floor(num.length / 2);
//     let arr1 = num.slice(0, mid);
//     let arr2 = num.slice(-mid).reverse();

//     for (let i = 0; i < mid; i++) {
//         if (arr1[i] === arr2[i]) {
//             continue;
//         } else {
//             return "Not Palindrome";
//         }
//     }

//     return "Yes, Palindrome";
// }

//another efficient method
function palindrome(num) {
    const numStr = String(num);
    const length = numStr.length;

    for (let i = 0; i < Math.floor(length / 2); i++) {
        if (numStr[i] !== numStr[length - 1 - i]) {
            return "Not Palindrome";
        }
    }

    return "Yes, Palindrome";
}

// more efficient method
function isPalindrome(num) {
    num = String(num);
    let revNum = num.split('').reverse().join('');
    return num === revNum ? "Yes, Palindrome" : "No, Not Palindrome";
}

console.log(palindrome(1232981)); // Not Palindrome
console.log(palindrome(12321));   // Yes, Palindrome
*/

/*
//4. How to swap two variable w/o using third variable in js
let a = 4;
let b = 5;

[a,b] = [b, a];                // array destructuring, i.e. creating variables and assigning them with values inside array or object's property.
 // here, no new variables are created instead we have reassigned the values to a and b that are created above.
*/

/*
 // 5. how to merge two arrays and sort them in js
 let arr1 = [5, 4, 3, 2, 1];
 let arr2 = [6, 7, 8, 9, 10];

//  let arr = [...arr1, ...arr2];
let arr = arr1.concat(arr2);

 console.log(arr.sort((a,b) => a-b));
*/

// Quick Notes
// let arr = [1, 2, 3, 4, 5];

// let [a, b, ...others] = arr;
// console.log(a);
// b = 4;
// console.log(b);
// console.log(others);
// console.log(arr);

// let obj = {
//     name: 'Divy',
//     age: 21,
//     id: 28,
//     sub: 'cs'
// }

// let {name, age, ...otherInfo} = obj;

// console.log(name);
// age = 22
// console.log(age);
// console.log(otherInfo);
// console.log(obj);

//The behavior of the rest syntax depends on the context in which it is used. In function parameters, it collects arguments into an array. In object destructuring, it collects remaining properties into an object.

/* Yes, the statement also applies to array and object destructuring. When you destructure an object into variables, the variables are new and independent references to the values of the original object properties. Any changes made to these variables do not affect the original object.*/

// Also, the variables that are created before are reassigned with new values
