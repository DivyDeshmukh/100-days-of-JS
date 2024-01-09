//Day 2

/*
//1. How to find vowels from string in js
// function vowels (str) {

// let vowels = [];

// for (let char of str) {
//     if (!vowels.includes(char)) {
//         if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//             vowels.push (char);
//         }
//     }
// }

// return vowels;

// }

// let str = "Divy Deshmukh";
// console.log(vowels(str.toLowerCase()));

// Another Method
function vowels(str) {
    // Using a regular expression to match vowels
    const vowelMatches = str.toLowerCase().match(/[aeiou]/g);

    // If there are matches, return the array of vowels; otherwise, return an empty array
    return vowelMatches ? vowelMatches : [];
}

let str = "Divy Deshmukh";
console.log(vowels(str)); 

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
function palindrome (num) {
    num = Array.from(String(num), Number).join('');
    console.log(num);
    let revNum = num.split('').reverse().join('');
    if (num === revNum) {
        return "Yes Palindrome";
    }else {
        return "Not Palindrome";
    }
}

console.log(palindrome(1232981)); // Not Palindrome
console.log(palindrome(12321));   // Yes, Palindrome
*/

/*
//4. How to swap two variable w/o using third variable in js
let a = 4;
let b = 5;

 let arr = [a,b];
 [a,b] = [b, a];                // array destructuring
*/

/*
 // 5. how to merge two arrays and sort them in js
 let arr1 = [5, 4, 3, 2, 1];
 let arr2 = [6, 7, 8, 9, 10];

//  let arr = [...arr1, ...arr2];
let arr = arr1.concat(arr2);

 console.log(arr.sort((a,b) => a-b));
*/


