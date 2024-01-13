// Day 6

/*
// 1. How to empty an array w/o reset and using loop
var arr = [1, 2, 3, 4, 5, 6];
arr.length = 0;
console.log(arr);
*/

/*
// 2. How would you check if a number is an integer?
let num = 45;
console.log(Number.isInteger(num));

// another method
let a = 12;
if(a%1 === 0) {
    console.log("integer");
}else{
    console.log("not");
}
*/

/*
// 3. Make this work: duplicate([1, 2, 3, 4, 5]); o/p:- [1,2,3,4,5,1,2,3,4,5]
function duplicate (arr) {
    // arr = [...arr, ...arr];
    arr = arr.concat(arr);
    return arr;
}

console.log(duplicate([1,2,3,4,5]));
*/

/*
// 4. Write a js func that reverses a num
function revNum (num) {
    // let numArr = Array.from(num.toString(), function (val) {
    //     return Number(val);
    // });

    // return numArr.reverse().join('');

    // another way
    // return Number(num.toString().split("").reverse().join(''));

    // another way
    let revNum = [];
    let sum = 0;
    while(num !== 0) {
        revNum.push(num%10);
        num  = Math.floor(num/10);
    }
    let numOfDig = revNum.length;
    for (let val of revNum) {
        numOfDig--;
        sum = sum + (val * Math.pow(10, numOfDig));
    }
    return sum;
}

console.log(revNum(12345));
*/

/*
// 5. Check whether passed string is an palindrome or not
function strPalin (str) {
    let revStr = str.split('').reverse().join('');
    return (revStr === str);
}
console.log(strPalin("1234"));
*/