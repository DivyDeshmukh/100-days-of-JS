console.log("Hey there! This is Divy, I am sharing some basic js programs.\n");

console.log("\nFibonacci Series:");

function fib (n) {
    var arr = [0, 1];
    var sum = 0;

    if (n == 0) {
        console.log("Please enter a valid number\n");
    }
        
    else if (n == 1) {
        console.log(n);
    }
        
    else if (n == 2) {
        console.log(n);
        console.log(n+1);
    }

    else {
        for (i = 2; i < n; i++) {
            sum = arr[i-1] + arr[i-2];
            arr.push(sum);
        }
    }

    return arr;
}

console.log(fib(10));

console.log("\nPrime or Not:");

function prime1 (num) {

    let i;
    let count = 0;

    for (i = 1; i <= num; i++) {
        if (num % i == 0)
            count ++;
    }

    if (count == 2)
        console.log(`${num} is a prime number\n`);
    else 
        console.log(`${num} is not a prime number\n`);
}

console.log(prime1 (19));

console.log("\nPrime numbers from 1 to 100:");

function prime () {

    for (var j = 1; j <= 100; j++) {

        let i;
        let count = 0;

        if (j == 1)
            console.log("1 is Neither prime nor composite");
    
        else { 
            for (i = 1; i <= j; i++) {
                if (j % i == 0)
                count++;
            }

            if (count == 2)
                console.log(`${j} is a prime number.`);
            else 
                console.log(`${j} is not a prime number.`);
        }

    }
}

prime();

console.log("\nFinding sum of a five digit number:");

function posSum (num) {

    var sum = 0;
    var rem;
    
    if (num <= 0) {
        console.log("Please enter a valid number\n");
    }
    else {
        while(num !== 0) {
            rem = num % 10;
            num = Math.floor(num / 10);
            sum = sum + rem;
        }
    }

    return sum;
}

console.log(posSum (12345));