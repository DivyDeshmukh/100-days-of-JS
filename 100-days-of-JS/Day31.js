/*
// 1. Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 2, 3, 10];
composed(arr1, arr2);

function composed (arr1, arr2) {

    const mergedArr = [...arr1, ...arr2];

    const composedArr = mergedArr.filter((val) => {
        if ((arr1.includes(val)) && !(arr2.includes(val))) return true;
    });

    console.log(composedArr);
}
*/

/*
// 2. Calculate the sum of first 100 prime numbers

function sumOfPrime(n) {
    let sum = 0;
    let sqrt;
    let isPrime;
    let count = 0;
    for(var i = 2; count < n; i++) {
        isPrime = true;
        sqrt = Math.sqrt(i);
        for (var j = 2; j <= sqrt; j++) {
            if (i % j === 0) {
                isPrime = false;
            }
        }
        if (isPrime) {
            sum += i;
            count++;
        }
    }

    return sum;
}

console.log(sumOfPrime(100));
*/

