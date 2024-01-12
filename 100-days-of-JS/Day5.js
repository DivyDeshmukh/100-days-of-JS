// Day 5

/*
// 1. Program to find an Armstrong Number
const num = 1634;
const numArr = Array.from (num.toString(), function (val) {
    return Number(val);
});

let sum = 0;
let len = numArr.length;

for (let val of numArr) {
    sum += Math.pow (val, len);
}

(sum === num) ? console.log(`${num} is an Armstrong Number.`) : console.log(`${num} is not an Armstrong Number`);
*/

/*
// 2. what is the output of this function
let count = 0;
function printCount () {
    if (count === 0) {                          // here, the global variable will be considered but not the local 'count' variable because this local variable has its scope inside the block only.
        let count = 3;
        console.log("count1", count);               // here, local variable will be considered
    }
    console.log("count2", count);                   // here, again global variable
}
printCount();
*/

/*
// 3. What is the output of this function
console.log( typeof (2 + '2'));                   // this will concatenate, '22'
console.log(2 - '2');                   // remember all the arithemetic operators other than + will just convert the string into an number and then will perform the operation, 0
console.log('2' - 2);           // 0
*/

/*
// 4. Given a string, reverse each word in the sentence
var str = "Harsh bhai kaise ho";

// let arr = [];
// let arr2 = [];

// for (let val of str) {
//     if (val === ' ' || val === str[str.length-1]) {
//         if (val === str[str.length-1]) {
//             arr.push(val);
//             arr2.push (arr.reverse());
//         }else {
//             arr2.push (arr.reverse());
//             arr = [];
//         }
//     }else {
//         arr.push (val);
//     }
// }
// var arr3 = [];

// for (let val of arr2) { 
//     arr3.push(val.join(''))
// }
// console.log(arr3.join(' '));

// another method
// let arr = str.split(" ");               // on the basis of space we want to split
// let arr2 = []

// for (let val of arr) {
//     arr2.push(val.split('').reverse());
// }
// for (let val of arr2) {
//     arr2[arr2.indexOf(val)] = val.join('');
// }
// console.log(arr2.join(' '));

// another more efficient
var savedStr = str.split(' ').map(function (word) {
    return word.split("").reverse().join("");
});

console.log(savedStr.join(' '));
*/

/*
// 5. Check whether it is an array or not
function checkArr (elem) {
    return Array.isArray(elem);
}

console.log(checkArr([]));
console.log(checkArr({}));
*/