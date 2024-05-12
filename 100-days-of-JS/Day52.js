/*
// 1 Write a function that takes in an array of numbers and returns the sum of all the numbers that are even and greater than 10.

function sumEvenGreaterThanTen (arr) {
    return arr.reduce((acc, curr) => {
        if (curr % 2 === 0 && curr > 10) {
            return acc + curr;
        }
        /*
            The issue in your code is that the reduce function expects you to always return a value from the callback, but in the case where the condition (curr % 2 === 0 && curr > 10) is not met, you're not returning anything explicitly.
        return acc;
    }, 0);
}

const sum = sumEvenGreaterThanTen([2, 90, 33, 56, 77, 89, 80, 32, 46, 18, 22, 12]);
console.log(sum);
*/

/*
// 2. Given an object representing a person's shopping list with items as keys and quantities as values, write a function that takes two parameters: the shopping list object and an item name. The function should return true if the item is present in the list and false otherwise.

const isPresent = (shoppingList, itemName) => {
    const keys = Object.keys(shoppingList);

    if (keys.includes(itemName)) {
        return true;
    }

    return false;
}

const shoppingList = {
    apples: 5,
    bananas: 3,
    milk: 1,
    bread: 2
};

console.log(isPresent(shoppingList, 'grapes'));
*/

/*
// 3. Write a function that takes in an array of objects representing people (each object has a 'name' and 'age' property) and sorts them based on their age in ascending order.

const sortByAge = (people) => {
    return people.sort((a, b) => a.age - b.age);
}

const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
];

console.log(sortByAge(people));
*/

/*
// 4. Write a function that takes in an object representing a student's grades (keys are subject names and values are grades) and returns the average grade.

const averageGrades = (studentGrades) => {
    return (Object.values(studentGrades).reduce((acc, curr) => acc + curr, 0)) / Object.values(studentGrades).length;
}

const studentGrades = {
    math: 90,
    science: 85,
    history: 80
};

console.log(averageGrades(studentGrades));

*/

/*
// 5. Given an array of objects representing books (each object has 'title', 'author', and 'pages' properties), write a function that filters out books with less than 200 pages and returns an array of titles of the remaining books.

const filterBooks = (booksArr) => {
    const books = booksArr.filter((book) => book.pages < 200);

    return books.map((book) => book.title);
}

const books = [
    { title: 'Book 1', author: 'Author 1', pages: 150 },
    { title: 'Book 2', author: 'Author 2', pages: 250 },
    { title: 'Book 3', author: 'Author 3', pages: 180 }
];

console.log(filterBooks(books));
*/