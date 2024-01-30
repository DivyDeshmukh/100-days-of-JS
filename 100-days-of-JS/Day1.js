// Day 1

/*
// Ques 1: How to find the missing number in a given integer array of 1 to 10
function misNum (arr) {
    let miss = [];
    for (let i = Math.min(...arr); i <= Math.max (...arr); i++) {
        if (arr.indexOf(i) < 0) {
            miss.push(i);
        }
    }

    return miss;
}

console.log(misNum([1, 2, 3, 4, 5, 6, 9, 10]));
*/

/*
// Ques 2: How to find even or odd number in a given array in js

// function evenOdd (arr) {
//     let even = [];
//     let odd = [];

//     for (let elem of arr) {
//         if (elem % 2 === 0) {
//             even.push(elem);
//         }else {
//             odd.push(elem);
//         }
//     }

//     return {
//         even: even,
//         odd: odd
//     };
// }

// from filter method
function evenOdd (arr) {
    const even = arr.filter ( val => val % 2 === 0);
    const odd = arr.filter (val => val % 2 ==! 0);

    return {
        even: even,
        odd: odd
    }
}

console.log(evenOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
*/

/*
// Ques 3: How to find the sum of all elements in a given array in js
// function arrSum (arr) {
//     const sum = arr.reduce (function (acc, curr) {
//         return acc+curr;
//     }, 0);

//     return sum;
// }

function arrSum (arr) {
    let sum = 0;
    for (let val of arr) {
        sum += val;
    }

    return sum;
}

console.log(arrSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
*/

/*
// QUes 4: How to find factorial (n!) of a given number in js

function factorial (num) {

    if (typeof num !== 'number' || isNaN(num) || !Number.isInteger(num) || num < 0) {
        return 'Enter a valid number';
    } // check for validating the input is a integer or not

    if (num === 0) {
        return 1;
    }

    let fact = 1;
    for (let i = 2; i <= num; i++) {
        fact *= i;
    }

    return fact;
}

console.log(factorial("oiajfoafoajfa5454"));
*/

/*
// Ques 5: How to find a prime number in js
// function primeNum (num) {

    
//     if (typeof num !== 'number' || isNaN(num) || !Number.isInteger(num) || num <= 0) {
//         return 'Enter a valid number';
//     } // check for validating the input is a integer or not

//     let count = 0;

//     for (let i = 1; i <= num; i++) {
//         if (num % i === 0) {
//             count++;
//         }
//     }

//     return count;
// }

// let num = 17;

// if (num === 1) {
//     console.log("Neither prime nor composite");
// }else {
//     if (primeNum(num) === 2) {
//         console.log(`Yes, ${num} is a prime number.`);
//     }else {
//         console.log(`No, ${num} is not a prime number`);
//     }
// }

// another method
function isPrime(num) {
    if (typeof num !== 'number' || isNaN(num) || !Number.isInteger(num) || num <= 0) {
        return "Enter a valid natural number";
    } else if (num === 1) {
        return "Neither prime nor composite";
    } else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return `No, ${num} is not a prime number.`;
            }
        }
        return `Yes, ${num} is a prime number.`;
    }
}

console.log(isPrime(9));
*/


