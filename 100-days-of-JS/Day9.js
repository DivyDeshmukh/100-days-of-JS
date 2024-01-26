// Day 9
/*
// 1. Write a js function to compute the union of two arrays
function union (arr1, arr2) {
    let arr3 = [...arr1, ...arr2];
    // let set = new Set(arr3);
    // return [...set];

    let finalArr = arr3.filter ((val, i) => {
        return (arr3.indexOf(val) === i);
    });

    return finalArr;
} 

console.log(union([1,2,3], [100, 2, 1, 10]));
*/

/*
// 2. Write a js program to create a new string from a given string taking the first 3 characters and the last 3 characters of a string and adding them together. The string length must be 3 or more, if not, the original string is returned.

function newString(str) {
    const str1 = str.slice(0,3);
    const str2 = str.slice(-3);
    const newStr = str1.concat(str2);

    if (newStr.length >= 3) {
        return newStr;
    }else {
        return str;
    }
}

console.log(newString ("h"));
console.log(newString ("hello"));
*/

/*
// 3. Write a js program to get the extension of a filename

const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));

console.log(getFileExtension('index.html'));
console.log(getFileExtension('webpack.config.js'));
*/

/*
// 4. Write a js program to replace every character in a given string with the character following it in the alphabet
function replace(str) {
    let alphaStr = 'abcdefghijklmnopqrstuvwxyz';
    let newStr = str.toLowerCase().split('').map ((val, i) => {
        return alphaStr[alphaStr.indexOf(val)+1];
    });

    return newStr.join('');
}

console.log(replace("abcde"));
*/

/*
// 5. write a js program to get the current date.
const date = new Date();
console.log(`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`);
console.log(`${date.getMonth()+1}-${date.getDate()}-${date.getFullYear()}`);
console.log(`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`);
console.log(`${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`);
*/

/*
// 6. Write a js program to create a new string adding "New!" in front of a given string. If the given string begins with "New!" already then return the original string.

function newStr (str) {
    if(str.slice(0,4) !== 'New!') {
        str = "New! ".concat(str);
        return str;
    }else {
        return str;
    }
}

console.log(newStr("New!"));
*/