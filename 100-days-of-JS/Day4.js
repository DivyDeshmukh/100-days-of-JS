// Day 4

/*
// 1. Program to convert first letter of a string in to uppercase in js

function strUpp (str) {
    let firstLetter = str.slice(0, 1).toUpperCase();
    let restOfStr = str.slice (1, str.length).toLowerCase();

    return `Hey, ${firstLetter}${restOfStr}`;
}

console.log(strUpp('divy'));
*/

/*
// 2. Program to find fibonacci sequence in js
// function fib (n) {
//     let arr = [];
//     for (let i = 0; i < n; i++) {
//         if (i === 0) {
//             arr.push(i);
//         }else if (i === 1) {
//             arr.push(i);
//         }
//         else {
//             arr[i] = arr[i-1] + arr[i-2];
//         }
//     }

//     return arr;
// }

// Another method
function fib (n) {

    let sum;
    let prev = 0;
    let curr = 1;

    for (let i = 0; i <n; i++) {
        if (i === 0) {
            console.log(prev);
        }else if (i === 1) {
            console.log(curr);
        }else {
            sum = prev + curr;
            prev = curr;
            curr = sum;
            console.log(sum);
        }
    }
}

console.log(fib (10))
*/

/*
// 3. Program to print star and number patterns right triangle, pyramid, Diamond shape in js
// function rightTri (rows) {
//     for (let i = 1; i <= rows; i++) {
//         for (let j = 1; j <= i; j++) {
//             process.stdout.write('*');
//         }
//         console.log();
//     }
// } 

// rightTri(10);

// function pyramid (rows) {
//     for (let i = 1; i <= rows; i++) {
//         for (let j = 1; j <= rows-i; j++) {
//             process.stdout.write(" ");
//         }
//         for (let j = 1; j <= i; j++) {
//             process.stdout.write("* ");
//         }
//         console.log();
//     }
// }

// pyramid(10);

function diamond (rows) {
    let num = 1;
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= rows-i; j++) {
            process.stdout.write(" ");
        }
        for (let j = 1; j <= i; j++) {
            process.stdout.write(num.toString() + " ");
        }
        num++;
        console.log();
    }

    for (let i = rows; i >= 1; i--) {
        for (let j = 1; j <= rows-i; j++) {
            process.stdout.write(" ");
        }
        for (let j = 1; j <= i; j++) {
            process.stdout.write(num.toString() + " ");
        }
        num--;
        console.log();
    }
}

diamond(8);
*/

/*
// 4. Program to find number of occurences of a character in a string in js

function numOfOccur (str, char) {
    var count = 0;
    for (let val of str) {
        if (val.toLowerCase() === char.toLowerCase()) {
            count++;
        }
    }

    return count;
}

console.log(numOfOccur ("Divy Deshmukh", 'h'));
*/

// 5. Program to print the table of any user defined number using function in js
function table (num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num*i}`);
    }
}

table(10)