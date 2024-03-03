/*
// 1. const animals = {}
let dog = {name: 'dog'}
let cat = {name: 'cat'}

animals[dog] = {...dog, price: 1200}
animals[cat] = {...cat, price: 3000}

console.log(animals[dog]);

// output:- {name: 'cat', price: 3000}
// basically as object keys are always strings and if we pass anyother data type it will be converted into string so dog and object will be converted into strings so, it will become '[object] [object]', but remember it is important that if we are passing any other datatype then must be defined above other wise reference error will come. Now, as if an object has same multiple keys then the key that has occurred at last will be given preference.
*/

/* 2. const user = {
    email: 'abc@domain.com',
    updateEmail: (email) => {
        this.email = email;
    }
} 

user.updateEmail ('latest@email.in');
console..log(user.email);

// output:- abc@domain.com
/* 
That's correct. Arrow functions in JavaScript inherit the this value from their enclosing (lexical) scope. If the arrow function is directly defined within an object, array, or any other non-function data type, it will capture the this from the surrounding lexical scope, which might be the global scope (window in a browser environment) or a non-arrow function's scope. ok so basically arrow function inherits only from non-arrow function that is present as its parent, if it has a parent like an object or array or anyother datatype then it will not inherit from them it will only inherit from non-arrow function 
*/

/* 3. const fruit = ['banana', 'apple', 'orange'];
fruit.slice(0, 1);
fruit.splice(0, 1);
fruit.unshift('grapes');
console.log(fruit);

// output:- ['grapes', 'apple', 'banana'];
*/

/* 4. let count = 0;
const nums = [1, 2, 3, 4];

nums.forEach (num => {
    if (num) {
        count += 1;
    }
})

console.log(count);

// output:- 3
*/

/* 5. const person = {
    name: 'Frontend master',
    address: {
        city: 'MDNDocs'
    }
}

Object.freeze(person);

person.name = 'afafafaf';
person.name.city = null;

console.log(person);

// output:- {name: 'Frontend master', address: { city: null }}              // as nested objects are not freezed
*/

/* When you declare a variable with the const keyword in JavaScript, it means that the identifier cannot be reassigned to a new memory reference. However, it doesn't mean that the data to which the variable points (if it's an object or an array) cannot be modified.*/
/* is it true that variables declared with const keyword can only point to one memory reference and they cannot be assigned with new memory reference although data present to reference to which they are pointing can be modified in case of reference data types*/
/* This behavior is different from other languages where const might imply both an immutable reference and immutable data. In JavaScript, const provides an immutable reference for variables but doesn't prevent modifications to the underlying data structures (if they are mutable, like objects or arrays).*/
