// Day 3

// 1. How to find factors of a given integer in js

// function factors (num) {
//     let factArr = [];

//     for (let i = 1; i <= 24; i++) {
//         if (num % i === 0) {
//             factArr.push (i);
//         }
//     }

//     return factArr;
// }

// console.log(factors (24));

// 2. How to make a calculator in js

// const operator = '+';
// const num1 = 45
// const num2 = 55

// let result;

// switch (operator) {
//     case '+':
//         result = num1+num2;
//         break;

//     case '-':
//         result = num1 - num2;
//         break;

//     case '*':
//         result = num1 * num2;
//         break;

//     case '/':
//         result = num1 / num2;
//         break;

//     default:
//         break;
// }

// console.log(result);

/*
// 3. How to compare two arrays are equal or not in js
// function compare (arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return false;
//     }else {
//         for (let val of arr1) {
//             if (!arr2.includes(val)) {
//                 return false;
//             } 
//         }
//     }

//     return true;
// }

// if (compare ([1, 2, 3, 4], [2, 3, 8, 4])) {
//     console.log("Yes they are equal");
// }else {
//     console.log("No they are not equal");
// }

// Another efficient method
let arr1 = [1, 2, 3, 4, 5]
let arr2 = [3, 2, 4, 1, 6]
const test = arr1.every ( (el, i, arr) => {
    return (arr2.includes(el));
    // if (!arr2.includes(el)) {
    //     return false;
    // }else {
    //     return true;
    // }
});
console.log(test);
*/

/*
// 4. How to find intersection of two array/sets in js
// function intersection (arr1, arr2) {
//     let intersectionArr = [];
//     for (let val of arr1) {
//         if (arr2.includes(val)) {
//             intersectionArr.push (val);
//         }
//     }

//     return intersectionArr;
// }
*/

// function intersection (arr1, arr2) {
//     const intersectionArr = arr1.filter( (val) => (arr2.includes(val)));
//     return intersectionArr;
// }

// console.log(intersection([1, 2, 3, 4], [2, 3, 8, 4]));

/*
// 5. How to find union of two arrays in js
// function union(arr1, arr2) {
//     const arr = arr1.concat(arr2);

//      to remove duplicates
//     const unionArr = arr.filter(function (val, i, self) {
//         return self.indexOf(val) === i;
//     });

//     return unionArr;
// }

function union(arr1, arr2) {
    const arr = [...arr1, ...arr2];

    // to remove duplicates
    const unionArr = new Set (arr);

    return [...unionArr];           // spreaded all the elements inside an array and wrapped them inside it
}

console.log(union([1, 2, 3, 4], [2, 3, 8, 4]));

*/
