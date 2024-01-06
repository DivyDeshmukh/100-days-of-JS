// Coding Problems based on Array, Objects, and Date Objects

// Arrays
/*
// 1. Remove Duplicates
function removeDuplicates (arr) {
    let duplicates = [];

    for (let val of arr) {
        if (duplicates.includes (val)) {
            continue;
        }else {
            duplicates.push(val);
        }
    }

    return duplicates;
}

console.log(removeDuplicates ([2, 32, 45, 1, 0, 2, 3, 45, 0]));
*/

/*
// 2. Sum of two numbers in an array
function arrSum (arr, targetSum) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] + arr[j] === targetSum) {
                return [i, j];
            }
        }
    }
}

console.log(arrSum ([3, 7, 2, 8, 10], 10));
*/

/*
// 3. Rotate Array
function rotate (orgArr, numOfSteps) {
    let rotatedArr = [];

    for (let i = numOfSteps; i > 0; i--) {
        rotatedArr.push (orgArr[orgArr.length - i]);
    }

    for (let i = 1; i <= numOfSteps; i++) {
        orgArr.pop();
    }

    for (let i = 0; i < orgArr.length; i++) {
        rotatedArr.push (orgArr[i])
    }

    return rotatedArr;
}

//better method
function rotate (orgArr, n) {
    var numOfSteps = n % orgArr.length;
    var splice = orgArr.splice (orgArr.length - (numOfSteps), orgArr.length - 1);
    
    for (let i = splice.length - 1; i >= 0; i--) {
        orgArr.unshift(splice[i]);
    }
    return orgArr;
}

//more efficient
function rotate(orgArr, numOfSteps) {
    // Calculate the effective number of steps to avoid unnecessary full rotations
    numOfSteps = numOfSteps % orgArr.length;

    // Use array slicing to create the rotated array
    let rotatedArr = orgArr.slice(-numOfSteps).concat(orgArr.slice(0, -numOfSteps));
    // negative index in slice are used to extract elements from end
    //eg:- orgArr.slice(-3): Extract the last 3 elements from the array ([8, 9, 10]).
    //orgArr.slice(0, -3): Extract all elements from the beginning up to, but not including, the last 3 elements ([1, 2, 3, 4, 5, 6, 7]).

    return rotatedArr;
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));

console.log(rotate ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11));
*/
 //4. Array Intersection
// function arrIntersection (arr1, arr2) {
//     let intersectedArr = [];
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i] === arr2[j]) {
//                 intersectedArr.push(arr1[i]);
//             }
//         }
//     }
//     return intersectedArr;
// }

/*
// better way by using sets
function arrIntersection(arr1, arr2) {
    // Create a set to store unique elements
    let set = new Set();

    // Iterate through the first array and add elements to the set
    for (let i = 0; i < arr1.length; i++) {
        set.add(arr1[i]);
    }

    // Create an array to store the intersection
    let intersectedArr = [];

    // Iterate through the second array and check for intersection
    for (let j = 0; j < arr2.length; j++) {
        if (set.has(arr2[j])) {
            intersectedArr.push(arr2[j]);
            // Remove the element from the set to avoid duplicates
            set.delete(arr2[j]);
        }
    }

    return intersectedArr;
}

// more effiecient as set do not have duplicates
function arrIntersection(arr1, arr2) {
    // Use filter to create an array containing elements present in both arrays
    let intersectedArr = arr1.filter(element => arr2.includes(element));

    // Use Set to remove duplicates
    return [...new Set(intersectedArr)];
}

console.log(arrIntersection([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [5, 6, 7, 8, 9, 10]));


console.log(arrIntersection([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [5, 6, 7, 8, 9, 10]));

console.log(arrIntersection ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [5, 6, 7, 8, 9, 10]));
*/

/*
//5. Max Subarray
function maxSubarraySum(arr) {
    if (arr.length === 0) {
        return { sum: 0, subarray: [] };
    }

    let currentSum = arr[0];
    let maxSum = arr[0];
    let start = 0;
    let end = 0;
    let tempStart = 0;

    for (let i = 1; i < arr.length; i++) {
        if (currentSum < 0) {
            currentSum = arr[i];
            tempStart = i;
        } else {
            currentSum += arr[i];
        }

        if (currentSum > maxSum) {
            maxSum = currentSum;
            start = tempStart;
            end = i;
        }
    }

    return { sum: maxSum, subarray: arr.slice(start, end + 1) };
}

const result = maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
console.log(result);
*/

// Objects

/*
//1 Object Deep Comparison
function objCompare (obj1, obj2) {
    let keys1 = Object.keys(obj1).sort();                   // by default sort() will sort lexicographically
    let keys2 = Object.keys(obj2).sort();

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let i = 0; i < keys1.length; i++) {
        let key = keys1[i];
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;
}

if(objCompare({id: 1, name: 'Divy'}, {name: "Divy", id: 1})) {
    console.log('Yes they are equal');
}else {
    console.log("They are not equal");
}
*/

/*
//2 arr to obj Transformation
function conversion (arrOfObj) {
    const obj = arrOfObj.reduce( (acc, curr) => {
        acc[curr.id] = curr;
        return acc;
    }, {});

    return obj;
}

console.log(conversion ([
    {id: 'a', name: "Divy"},
    {id: 'b', age: 30, name: "khushi"},
    {id: 'c', name: "jbp", rollNo: '0823'}
]));
*/

/*
//3 Object Filtering
function check (obj, key, value) {
    let returnObj = [];
    for (let elem of obj) {
        if (elem[key] === value) {
            returnObj.push(elem)
        }
    }
    return returnObj;
}

const obj = [
    {id: 'a', name: "Divy", age: 29},
    {id: 'b', name: "Khushi", age: 29},
    {id: 'c', name: "bob", age: 54}
];
var a = check(obj, 'age', 29);

if (a.length > 0) {
    console.log("present", a);
}else {
    console.log('Not Present');
}

*/

/*
//4 Flattening Object
function flattenObject(obj, parentKey = '') {           // ES6 feature used to give default value to a function parameter, will be replaced if user passes value inside the argument
    let result = {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            let newKey = parentKey ? `${parentKey}.${key}` : key;

            if (typeof obj[key] === 'object' && obj[key] !== null) {
                Object.assign(result, flattenObject(obj[key], newKey));
            } else {
                result[newKey] = obj[key];
            }
        }
    }

    return result;
}

// Example usage:
const nestedObject = {
    person: {
        name: {
            first: 'John',
            last: 'Doe'
        },
        age: 30,
        address: {
            city: 'New York',
            zip: '10001'
        }
    },
    company: 'ABC Corp'
};

const flattenedObject = flattenObject(nestedObject);
console.log(flattenedObject);
*/
