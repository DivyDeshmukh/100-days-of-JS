// Day 11

/*
// 1. Write a js function that accepts a string as a parameter and counts the number of vowels within the string
const numOfVow = (arr) => arr.filter (val => {
    if (val === 'a' || val === 'e' || val === 'i' || val === 'o' || val === 'u') return val
}
).length;

const uniqueArr = (str) => {
    return str.toLowerCase().split('').filter ((val, i) => {
        if (str.indexOf (val) === i) return val;
    });
}

console.log(numOfVow(uniqueArr("Divy Deshmukh")));
*/

/*
// 2. Write a js function to convert an amount to coins. Example input: 46 and possible coins 25, 10, 5, 2, 1 // output: 25, 10, 10, 1

// const amountToCoins = (amount, coinsArr =  [25, 10, 5, 2, 1]) => {
//     let sum = 0;
//     let coins = [];
//     for (let i = 0; sum !== amount; i++) {
//         let sum2 = 0;
//         while (!(sum2 >= amount)) {
//             sum2 += coinsArr[i] + sum;
//             if(sum2 <= amount) {
//                 coins.push(coinsArr[i]);
//                 sum += coinsArr[i];
//                 sum2 = 0;
//             }
//         }
//     }

//     return coins;
// }

// another method
// const amountToCoins = (amount, coinsArr =  [25, 10, 5, 2, 1]) => {
//     let sum = 0;
//     let coins = [];
//     for (let i = 0; i < coinsArr.length; i++) {
//         while (sum + coinsArr[i] <= amount) {
//             coins.push(coinsArr[i]);
//             sum += coinsArr[i];
//         }
//     }

//     return coins;
// }

// another efficient method
const countCoins = (money, coins = [25, 10,5, 2, 1]) => {
    const totalCoins = [];
    for (let i = 0; i<coins.length; i+=1) {
        const thisCoinNum = Math.floor(money / coins[i]);
        for(let y = 0; y < thisCoinNum; y++) {
            totalCoins.push(coins[i]);
        }
        money -= coins[i] * thisCoinNum;
    }

    return totalCoins;
}

console.log(countCoins(46));
// console.log(amountToCoins(59));
// console.log(amountToCoins(48));
*/

/*
// 3. Write a js function to extract unique characters from a string
// const uniqueChar = (str) => str.toLowerCase().split('').filter((char, i) => {
//     if (str.indexOf(char) === i && (char !== ' ' && char !== "'" && char !== ',')) return char;
// }
// );

// another method
const getUniqueChars = (str) => str.split('').filter(
    (item, index, arr) => 
        arr.slice(index+1).indexOf(item) === -1
    );

// console.log(uniqueChar("aaaaabbbbbcccc"));
console.log(getUniqueChars("aaabbbaaaccccbbb"));
*/

/*
// 4. 
// const getUniqueChars = (str) => str.split('').filter(
//     (item, index, arr) => 
//         {
//             if (arr.slice(0, index).concat(arr.slice(index+1)).indexOf(item) === -1) {
//                 return item;
//             }
//         }
//     );

// another method
const getUniqueChars = (str) => 
str.split('')
.filter((item, index, arr) => 
    arr.filter(arrItem => arrItem === item).length === 1
);
    
console.log(getUniqueChars('abacddbec'));
*/

// 5. Write a function groupBy that takes an array of objects and a property name, and returns an object where the keys are unique values of that property, and the values are arrays of objects that have the same value for that property.
/*
Should output:
{
    'A': [ { name: 'Alice', age: 20, grade: 'A' }, { name: 'Charlie', age: 21, grade: 'A' } ],
    'B': [ { name: 'Bob', age: 22, grade: 'B' }, { name: 'David', age: 20, grade: 'B' } ]
}
*/
const groupBy = (students) => {
    
}

const students = [
    { name: 'Alice', age: 20, grade: 'A' },
    { name: 'Bob', age: 22, grade: 'B' },
    { name: 'Charlie', age: 21, grade: 'A' },
    { name: 'David', age: 20, grade: 'B' },
];

console.log(groupBy(students));