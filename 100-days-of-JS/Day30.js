/*
// 1. Calculate the sum of digits of a positive integer number

function sumOfDig (num) {
    // const numArr = Array.from(String(num), Number);
    // const sum = numArr.reduce((acc, curr) => acc+ curr, 0);
    // return sum;

    // another method
    let sum =  0;
    while(num!==0) {
        sum += (num%10);
        num = Math.floor(num / 10);
    }

    return sum;
} 

console.log(sumOfDig(1234));

*/

/*
// 2. Create a function that will return in an array the first "nPrimes" prime numbers greater than a particular number "startAt"

function primeGreater (n, start) {
    let primeArr = [];
    let isPrime;
    for (var i = start; primeArr.length < n; i++) {
        isPrime = true;
        let sqrt = Math.sqrt(i);
        for (var j = 2; j <= sqrt; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primeArr.push(i);
        }
    }

    return primeArr;
}

console.log(primeGreater(10, 100));

// The break statement in a nested loop will only terminate the innermost loop that it is inside. It does not affect the flow of the outer loop. The break statement is designed to exit the loop it is immediately contained within.
*/

/*
// 3. Rotate an array to the left 1 position
/* If you are rotating an array to the left by 2 positions, you can think of it as adding 2 to each index of the original array. Conversely, if you are rotating the array to the right by 2 positions, it's like subtracting 2 from each index of the original array.

let ar = [1, 2, 3, 4, 5];
rotateLeft(ar, 2);
console.log(ar);

function rotateLeft(ar, n)
{
    for (var i = 1; i <= n; i++) {
        let first = ar.shift();             // shift() method returns removed element and updates the length of the array
        ar.push(first);
    }
}
*/

/*
// 4. Rotate an array to the right 1 position
let ar = [1, 2, 3, 4, 5];
rotateRight(ar, 2);
console.log(ar);
function rotateRight (arr, n) {
    for (var i = 1; i <= n; i++) {
        let last = ar.pop();                        // pop() method returns the removed element and updates the length of the array
        ar.unshift(last);
    }
}
*/

/*
// 5. Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both.

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 2, 3, 10];
composed(arr1, arr2);

function composed (arr1, arr2) {

    const mergedArr = [...arr1, ...arr2];

    const composedArr = mergedArr.filter((val) => {
        if (!((arr1.includes(val)) && (arr2.includes(val)))) return true;
    });

    console.log(composedArr);
}
*/

