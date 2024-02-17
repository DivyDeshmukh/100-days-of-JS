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

/*
// 3. Print the distance between the first 100 prime numbers

function primeDist (n) {
    let count = 0;
    let primeArr = [];
    let isPrime;
    let sqrt;

    for (var i = 2; count < n; i++) {
        isPrime = true;
        sqrt = Math.sqrt(i);
        for (var j = 2; j <= sqrt; j++) {
            if (i % j === 0) {
                isPrime = false;
            }
        }

        if (isPrime) {
            primeArr.push(i);
            count++;
        }
    }

    let dist = primeArr.map((val, i) => (i !== 0) ? val - primeArr[i - 1] : null).filter(value => value !== null);

    return dist;

}

console.log(primeDist(100));
*/

/* revisit
// 4. Create a function that will return the number of words in a text
function numOfWords (str) {
    // const exclude = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?"];
    // convert above delimeters into regex:-
    // var delimiters = /\s+|,|;|\.|!|\?/;
    // const words = str.split(delimiters).filter(Boolean);                        // here, filter removes the empty string that is false from the final result.
    // return words.length;
}

console.log(numOfWords('I like to learn JavaScript with codeguppy'));
console.log(numOfWords('JavaScript!!!   '));
*/

/*
// 5.  Calculate the sum of numbers received in a comma delimited string

function sum (str) {
    return (str.split(', ').reduce((acc, curr) => (acc + parseFloat(curr)) , 0));
}

console.log(sum("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));
*/

