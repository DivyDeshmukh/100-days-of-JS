// // Leetcode Problems

// // 1. Given an array arr and a chunk size size, return a chunked array. A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

// // You may assume the array is the output of JSON.parse. In other words, it is valid JSON.

// // Please solve it without using lodash's _.chunk function.

// var chunk = function(arr, size) {
//     let chunkArr = [];
//     let chunk = [];

//     arr.forEach((val) => {
//         if ((chunk.length !== size) || (arr.indexOf(val) === arr.length-1)) {
//             chunk.push(val);
//         }

//         if ((chunk.length === size) || (arr.indexOf(val) === arr.length-1) ) {
//             chunkArr.push(chunk);
//             chunk = [];
//         }
//     });

//     return chunkArr;
// };

// // 2. Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

// // You may assume the array is the output of JSON.parse.

 

// // Example 1:

// // Input: nums = [null, {}, 3]
// // Output: 3
// // Explanation: Calling nums.last() should return the last element: 

// Array.prototype.last = function() {
//     if(this.length === 0) {
//         return -1;
//     }else {
//         return this[this.length-1]
//     }
// };

// // 3. Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.

// // A grouped array is an object where each key is the output of fn(arr[i]) and each value is an array containing all items in the original array with that key.

// // The provided callback fn will accept an item in the array and return a string key.

// // The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.

// // Please solve it without lodash's _.groupBy function.

// Array.prototype.groupBy = function(fn) {
//     let obj = {};

//    for (let val of this) {
//        if(obj.hasOwnProperty(fn(val))) {
//            obj[fn(val)].push(val);
//        }else {
//            // obj[] = [val];
//            obj[fn(val)] = []
//            obj[fn(val)].push(val);
//        }
//    }

//    return obj;
// };

// // 4. Given an array arr and a function fn, return a sorted array sortedArr. You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. sortedArray must be sorted in ascending order by fn output.

// // You may assume that fn will never duplicate numbers for a given array.

// var sortBy = function(arr, fn) {
//     return arr.slice().sort((a, b) => fn(a) - fn(b));
// };

// // Array.prototype.slice() is used to create a shallow copy of the input array arr. This ensures that the original array remains unmodified.

// // The comparison function subtracts the result of fn(b) from fn(a). If the result is negative, a will be placed before b, resulting in ascending order.
 

// 5. 

const arr1 = [
    {"id": 1, "x": 2, "y": 3},
    {"id": 2, "x": 3, "y": 6}
];

const arr2 = [
    {"id": 2, "x": 10, "y": 20},
    {"id": 3, "x": 0, "y": 0}
]

const newArr = arr1.map((val) => {
    for(var j = 0; j < arr2.length; j++) {
         if(val['id'] === arr2[j]['id']) {
            return arr2[j];
        }
    }

    return val;
});

arr2.forEach((val) => {
    if(!newArr.includes(val)) {
        newArr.push(val)
    }
})

console.log(newArr);

// 5. 

// Given two arrays arr1 and arr2, return a new array joinedArray. All the objects in each of the two inputs arrays will contain an id field that has an integer value. joinedArray is an array formed by merging arr1 and arr2 based on their id key. The length of joinedArray should be the length of unique values of id. The returned array should be sorted in ascending order based on the id key.

// If a given id exists in one array but not the other, the single object with that id should be included in the result array without modification.

// If two objects share an id, their properties should be merged into a single object:

// If a key only exists in one object, that single key-value pair should be included in the object.
// If a key is included in both objects, the value in the object from arr2 should override the value from arr1.

/* by own:- working but very inefficient
var join = function(arr1, arr2) {
    
    const newArr = arr1.map((val) => {
        for(var j = 0; j < arr2.length; j++) {
            if(val['id'] === arr2[j]['id']) {
                return arr2[j];
            }
        }

        return val;
    });

    arr2.forEach((val) => {
        if(!newArr.includes(val)) {
            newArr.push(val)
        }
    });

    // const key2 = Object.keys(arr2);

    newArr.forEach((val, i) => {
        for(let j = 0; j < arr1.length; j++) {
            if(val['id'] === arr1[j]['id']) {
                const key1 = Object.keys(arr1[i]);
                for(var i2 = 0; i2 < key1.length; i2++) {
                    if(!val.hasOwnProperty(key1[i2])) {
                        newArr[newArr.indexOf(val)][`${key1[i2]}`] = arr1[j][`${key1[i2]}`];
                    }
                }
            }
        }
    })

    return newArr;
};
*/


var join = function(arr1, arr2) {
    const idSet = new Set(); // to store unique id values
    const idMap = {}; // to store merged objects based on id
    
    // Merge elements from arr1 into idMap
    for (const obj of arr1) {
        idMap[obj.id] = { ...obj };
        idSet.add(obj.id);
    }
    
    // Merge elements from arr2 into idMap
    for (const obj of arr2) {
        if (!idMap.hasOwnProperty(obj.id)) {
            idMap[obj.id] = { ...obj };
        } else {
            // Merge properties of existing object with the same id
            Object.assign(idMap[obj.id], obj);
        }
        idSet.add(obj.id);
    }
    
    // Sort merged objects based on id
    const joinedArray = Array.from(idSet).sort((a, b) => a - b).map(id => idMap[id]);
    
    return joinedArray;
};