/*
// 1. Write a function that takes in an array of numbers and returns a new array where each element is doubled. However, if the number is even, add 1 to it before doubling.

const doubled = (arr) => {
    let newArr = [];

    for (let val of arr) {
        if (val % 2 === 0) {
            newArr.push (2 * (val + 1));
        } else {
            newArr.push (2 * val);
        }
    }

    return newArr;
}

const newArr = doubled([1, 2, 3, 4, 5]);
console.log(newArr);

*/

/*
// 2.  Given an array of strings representing names, write a function that filters out names starting with the letter 'A' and returns an array of uppercase versions of the remaining names.
// Required Materials (arr): ['Alice', 'Bob', 'Anna', 'James', 'Eva']

const filteredNames = (strArr) => {
    const removeNamesWithA = strArr.filter((str) => str[0] !== 'A');
    const uppercaseVersion = removeNamesWithA.map((str) => str.toUpperCase());
    return uppercaseVersion;
}

const modifiedStrArr = filteredNames(['Alice', 'Bob', 'Anna', 'James', 'Eva']);
console.log(modifiedStrArr);
*/

/*
// 3. Write a function that takes in an array of numbers and returns the product of all the numbers.

const prod = (numArr) => {
    return numArr.reduce((acc, curr) => acc*curr, 1);
}

const product = prod([2, 3, 4, 5]);
console.log(product);

*/

/*
// 4. Given an array of objects representing products with 'name' and 'price' properties, write a function that sorts the products by price in ascending order and returns an array of product names.
// Required Materials (arr): [{ name: 'Laptop', price: 1000 }, { name: 'Phone', price: 500 }, { name: 'Tablet', price: 800 }]

const sortByPrice = (arrOfObj) => {
    const sortArr = arrOfObj.sort((a, b) => a.price - b.price);
    const prodNames = sortArr.map ((item) => item.name);
    return prodNames;
}

const sortedProdNames = sortByPrice([{ name: 'Laptop', price: 1000 }, { name: 'Phone', price: 500 }, { name: 'Tablet', price: 800 }]);

console.log(sortedProdNames);

*/

/*
// 5. Question: Write a function that takes in two arrays of numbers and returns a new array containing only the unique elements that are common to both arrays.

// Required Materials (arr1, arr2): [1, 2, 3, 4, 5], [3, 4, 5, 6, 7]

const intersectArr = (arr1, arr2) => {
    const mergedArr = arr1.concat(arr2);

    const filterArr = mergedArr.filter((val, index, self) => (arr1.includes(val) && arr2.includes(val) && self.indexOf(val) === index));

    return filterArr;
}

const ans = intersectArr([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
console.log(ans);
*/