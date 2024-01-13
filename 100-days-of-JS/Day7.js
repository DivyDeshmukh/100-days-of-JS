// Day 7

/*
// 1. Write a js function that returns a passed string with letters in alphabetical order
function alpha (str) {
    return str.split('').sort().join('');
}

console.log(alpha ("apple"));
*/

/*
// 2. Write a js function that accepts a string as a parameter and converts the first letter of each word of the string in upper case
function upperCase(str) {
    var strArr = str.split(' ');
    const allUpp = strArr.map(val =>
        //  (val.slice(0,1).toUpperCase().concat(val.slice(1, val.length).toLowerCase())));
            val.charAt(0).toUpperCase() + val.substring(1, val.length)
        );

    return allUpp.join(' ');
}

console.log(upperCase("Or bhai sab badiya"));
*/

/*
// 3. Write a js func to get the number of occurences of each letter in specified string
function numOfOcc (str, letter) {
    let obj = {};
    let arr = str.split('');
    for (let val of arr) {
       if(obj.hasOwnProperty(val)) {
        obj[val] += 1;
       }else{
        obj[val] = 1;
       }
    }

    return obj;
}

console.log(numOfOcc("Deshmukh"));
*/

/*
// 4. In an array of numbers and strings, only add those members which are not strings
function add (arr) {
    let sum = 0;
    for (let val of arr) {
        if (typeof val === 'number') {
            sum += val;
        }else {
            continue;
        }
    }

    return sum;
}

console.log(add([1, 2, 3, 4, "Divy", "okow", 100, "pop"]));
*/

// 5. Loop an array of objects and remove all objects which do not have gender's value male
function remove(arr) {
    // for (let val of arr) {
    //     if (val['gender'] !== 'male') {
    //         arr.splice(arr.indexOf(val), 1);
    //     }else {continue}
    // }

    let newArr = arr.filter( val => {
        return val['gender'] === 'male';
    });
    
    return newArr;
}

console.log(remove(
    [
        {
            age: 19,
            gender: 'male'
        }
    ,
    {
        age: 19,
        gender: 'female'
    },
    {
        age: 19,
        gender: 'male'
    },
    {
        age: 19,
        gender: 'female'
    },
    {
        age: 19,
        gender: 'male'
    }]
));
