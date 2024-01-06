/*
// 1. Max-Min in an array
// function minmax (arr) {
//     let newArr = [];

//     let max = Math.max(...arr);
//     let min = Math.min(...arr);

//     newArr.push(max, min);
//     return newArr;
// }

// console.log(minmax([1, 2, 3, 4, 5]));

// Another method using reduce
// const arr = [1, 2, 3, 4, 5];
// const maxFunc = (arr) => {
//     return arr.reduce(function(acc, curr) {
//         if (acc < curr) {
//             return curr;
//         }
//     }, 0);
// }
// const minFunc = (arr) => {
//     return arr.reduce(function(acc, curr) {
//         if (acc <= curr) {
//             return acc;
//         }
//     }, arr[0]);
// }
// console.log(maxFunc(arr));
// console.log(minFunc(arr));
*/

/*
// 2. find second largest and remove first largest
function secLar (arr) {
    let max = Math.max(...arr);
    // for (let i = 0; i < arr.length; i++) {
    //     var index = i;
    // }
    let index = arr.findIndex(val => val === max);
    // let index = arr.indexOf(max)

    arr.splice (index, 1);

    max = Math.max (...arr);
    console.log(arr);
    return max;
}

console.log(secLar([1, 2, 3, 4, 5, 6]));
*/

function missing (arr) {
    let miss=[];
    for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
        // if (!arr.includes(i)) {
        //     miss.push(i);
        // }
        if (arr.indexOf(i) < 0) {
            miss.push(i);
        }

    }
    return miss;
}

console.log(missing([1,2,3,4,5,7,9,10]));
