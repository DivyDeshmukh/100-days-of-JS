/*
// 1. 
const data = [..."Apple"];
console.log(data);

// output:- [ 'A', 'p', 'p', 'l', 'e' ]
// The spread operator (...) in JavaScript is primarily designed to work with iterable objects. Iterables include arrays, strings, maps, sets, and other objects that implement the Iterable protocol. When you use the spread operator with an iterable, it "spreads" or unpacks the individual elements of the iterable.
*/

/*
// 2.
console.log(20 + 30 + '10');

// output:- 5010
*/

/*
// 3. 
console.log(parseInt('10+2'));
console.log(parseInt('7FM'));

// output:- 10 7
*/

/*
// 4. 
const box = {x: 10, y: 20}

Object.freeze(box);

const shape = box;

shape.x = 100;
shape.z = 20;

console.log(shape);

// as box is pointing to the memory location where this  {x: 10, y: 20} is stored and then shape is also pointing to the same location and hence shape will contain same original object. Object.freeze is about freezing the properties of an object, not the references to the object. The reference itself can still be reassigned, but the properties of the frozen object cannot be modified or extended. However, it's behavior can vary depending upon strict mode enabled or not, if we try to modify props values or add new props to obj then in strict mode it will throw an error but in non-strict no error and object do not change.
// output:- { x: 10, y: 20 }
*/

// 5. 
// function addItem (item, list) {
//     list.push(item);
//     return list;
// }

// const arr = ['a']
// const result = addItem ('b', arr);
// console.log(result);                            // [ 'a', 'b' ]
// console.log(arr);                               // [ 'a', 'b' ]         as reference of arr is passed and hence if we alter that reference then changes will reflect in arr also bcoz list and arr pointing to same arr.


/*
'use strict'
const obj = {
    name: 'Divy',
    age: 22
}

Object.freeze(obj);

obj.sub = 'cs';                     //  Cannot add property sub, object is not extensible
console.log(obj);
obj.name = 'abc'                    // Cannot assign to read only property 'name' of object '#<Object>'
console.log(obj);
*/
