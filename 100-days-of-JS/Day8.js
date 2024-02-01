// Day 8

/*
// 1. Write a js function to clone an array
function cloneArr (arr) {
    // return [...arr];

    // const newArr = arr.map (val => val);
    // return newArr;

    let newArr = [];
    arr.forEach (val => {
        newArr.push(val);
    });
    return newArr;
}

console.log(cloneArr ([1,2, 3, 4, 5]));
*/

/*
// 2. Write a js function that accepts an argument and returns the type.
function findType (input) {
    return typeof input;
}

const sym = Symbol ('Key1');
console.log(findType (sym));
*/

/*
// 3. Write a js function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
function firstNElem (arr, n = 1) {              // by default n is 1.
    if(n < arr.length) {
        let newArr = [];
        for (let i = 0; i < n; i++) {
            newArr.push (arr[i]);
        }
        return newArr;
    }else {
        return "Na Ho Paega";
    }
}

console.log(firstNElem([1,2,3,4,5], 8));
*/

/*
// 4. Write a js function to find the most frequent item of an array
function freqItem (arr) {
    let obj = {};
    for (let val of arr) {
        if(obj.hasOwnProperty(val)) {
            obj[val] += 1;
        }else {
            obj[val] = 1;
        }
    }

    // let max = `${arr[0]}`;
    // for (let key in obj) {
    //     if (obj[key] > obj[max]) {
    //         max = key;
    //     }else {continue;}
    // }
    // return `${max}:- ${obj[max]} times`;

    var ans = Object.keys(obj).reduce(function (acc, num) {
        return obj[acc] > obj[num] ? acc : num;
    }, 0);
    return (ans);
}

console.log(freqItem([3, 32, 1, 3,2, 45,3, 4,6]));
*/
 
/*
// 5. Write a program to shuffle an array
function shuffleArr (arr) {
    
    for (let i=1; i<arr.length-1;i++) {
        let len = arr.length;
        len--;
        let randomNum = Math.floor(Math.random () * len);
        let temp = arr[len];
        arr[len] = arr[randomNum];
        arr[randomNum] = temp;
        
    }

    return arr;
}

console.log(shuffleArr([1, 2, 3, 4, 5]));
*/

