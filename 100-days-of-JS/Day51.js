/*
// 1. Removing and Replacing the First Element in an Array
// Problem: Write a function replaceFirst(arr, elementToRemove, elementToReplace) that takes an array, an element to remove, and an element to replace it with. It should remove the first occurrence of the elementToRemove from the array and replace it with the elementToReplace. The function shouldn't modify the original array but return a new one.

function replaceFirst (arr, elemToRemove, elemToReplace) {
    let newArr = [...arr];
    for (let val of newArr) {
        const index = newArr.indexOf (val);
        console.log(index);
        if (val === elemToRemove) {
            newArr[index] = elemToReplace
        }
    }

    return newArr;
}

const myArray = ["apple", "banana", "cherry", "orange"];
const newArray = replaceFirst(myArray, "banana", "grape");
console.log(newArray);

*/

/* 
2. Removing and Replacing the First Character in a String
Problem: Write a function replaceFirstChar(str, charToRemove, charToReplace) that takes a string, a character to remove, and a character to replace it with. It should remove the first occurrence of the charToRemove from the string and replace it with the charToReplace. Return the modified string. 

function replaceFirstChar (str, charToRemove, charToReplace) {
    return charToReplace.concat(str.slice(1, str.length));
}

const newStr = replaceFirstChar("Hello World", 'H', 'Y');
console.log(newStr);
*/

/*
// 3. Problem 3: Merging Object Properties

Task: Write a function mergeObjects(obj1, obj2) that takes two objects and merges their properties into a new object. If both objects have the same property name, the value from obj2 should take precedence.
Allowed Methods: slice (consider if it's necessary), spread operator (...) (consider if it breaks the constraint)

const mergeObjects = (obj1, obj2) => {
    let obj = {};

    for (let val of Object.keys(obj1)) {
        for (let val2 of Object.keys(obj2)) {
            if (val === val2) {
                obj[val2] = obj2[val2];
            }
        }
    }

    for (let val of Object.keys(obj1)) {
        if (!obj.hasOwnProperty(val)) {
            obj[val] = obj1[val];
        }
    }

    for (let val of Object.keys(obj2)) {
        if (!obj.hasOwnProperty(val)) {
            obj[val] = obj2[val];
        }
    }

    console.log(obj);
}

const obj1 = {
    a: 2,
    b: 3,
    c: 5
}

const obj2 = {
    a: 4,
    d: 8,
    f: 6,
    c: 45
}

console.log(mergeObjects(obj1, obj2));

*/

/* 4. Problem 4: Building a Shopping Cart

Task: Write a function addToCart(cart, item, quantity) that simulates adding items to a shopping cart. The cart is represented as an object with item names as keys and their quantities as values. The function should update the cart object, adding the new item or incrementing its quantity if it already exists.
Allowed Methods: some, slice (consider if it's necessary)

const addToCart = (cart, item, quantity) => {
    if (cart.hasOwnProperty(item)) {
        cart[item] += quantity;
        return cart;
    }

    cart[item] = quantity;
    return cart;
}

console.log(addToCart({apples: 2, bananas: 1}, "apples", 3));
console.log(addToCart({apples: 2, bananas: 1}, "grapes", 3));
*/

/* Problem 5: Text Analysis

Task: Write a function analyzeText(text) that takes a string of text and returns an object with the following properties:
wordCount: The total number of words in the text.
averageWordLength: The average length of words (rounded to two decimal places).
mostFrequentWord: The single most frequent word (case-insensitive) and its count.
Allowed Methods: split, slice, some (consider if it's necessary)

const analyzeText = (text) => {
    let obj = {};

    const splitText = text.toLowerCase().split(" ");
    obj['wordCount'] = splitText.length;
    const sum = splitText.reduce((acc, curr) => {
        return acc + curr.length;
    }, 0);
    const avg = sum / splitText.length;

    obj['avg'] = avg.toFixed(2);

    let mostFrequent = {};
    for (let val of splitText) {
        if (mostFrequent.hasOwnProperty(val)) {
            mostFrequent[val] += 1;
        } else {
            mostFrequent[val] = 1;
        }
    }
    console.log(mostFrequent);

    const frequentCount = Math.max(...Object.values(mostFrequent));
    const frequentWord = Object.keys(mostFrequent).find ((item) => mostFrequent[item] === frequentCount);

    obj['mostFrequentCount'] = frequentCount;
    obj['mostFrequentWord'] = frequentWord;

    // console.log(obj);
    return obj;
}

const textAnalysis = analyzeText("Hey there! I am Divy and I love to code.");
console.log(textAnalysis);

*/