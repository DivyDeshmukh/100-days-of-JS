// Day 10

/*
// 1. Write a js program to extract the first half of a string even length

function halfStr (str) {
    let half = str.slice(0, str.length/2);
    return half;
}

console.log(halfStr("Hello"));
*/

/*
// 2. Write a js program to concatenate two strings except their first character.

const mixtureStr = (str1, str2) => {
    let concatenate = str1.slice(1).concat(str2.slice(1));
    return concatenate;
}

console.log(mixtureStr("Divy ", "Deshmukh"));
*/

/*
// 3. Write a js program to check a given string contains 2 to 4 occurences of a specified character

const check = (str, char) => {
    let count = 0;
    for (let val of str) {
        if (val === char) {
            count++;
        } 
    }

    return (count >= 2 && count <= 4) ? true : false;
}

console.log(check("Hello", 'l'));
*/

/*
// 4. Write a js program to check whether a given array of integers is sorted in ascending order

const isAscending = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i+1] < arr[i]) return false;
    }

    return true;
}

console.log(isAscending([1,2,3,4,5,6,7,8,9,10]));

console.log(isAscending([1,2,3,4,5,11,7,8,9,10]));
*/

/*
// 5. Write a js program to replace the first digit in a string (should contains at least one digit) with $ character

const replceFirstDigit = (str) => str.replace(/[0-9]/, '$');
console.log(replceFirstDigit('Abcd1Ab3434cde'));
*/


// 6. Write a js program to comapare two objects to determine if the first one contains the same properties as the secondone (which may also have additional properties)

// const compareObj = (obj1, obj2) => {
//     // let arr1 = Object.keys(obj1);
//     // let arr2 = Object.keys(obj2);

//     // for (let val of arr1) {
//     //     if (!arr2.includes(val)) return false;
//     // }

//     // return true;

//     return Object.keys(obj1).every(key => obj2[key]);
// }

// console.log(compareObj({name: "Divy", age: 21}, {name: "Khushi", sub: "ppppp"}));

// last ques explanation
// let obj = {
//     name: 'Divy',
//     age: 21
// }

// if(obj['sub']) {                        // as obj do not have a property sub then it returns undefined and as undefined is a falsy value so, above in every method false is returned if obj2 does not have a property that is inside obj1.
//     console.log('chala');
// }else {
//     console.log('galat');
// }
