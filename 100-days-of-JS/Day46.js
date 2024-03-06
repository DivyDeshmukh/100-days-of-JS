/*
// 1. 
const person = {
    name: 'Frontend master'
}

Object.seal(person);

person.name = 'Backend Master';
person.skill = 'js';

delete person.name;

console.log(person);

// seal() method only allows modifications no addition of new properties and no deletion of existing properties and it's counter is Object.freeze that neither allows modification nor deletion and nor addition of new properties.
*/

/*
// 2. 
const message = 108
function getInfo () {
    console.log(message);
    const message = 'sadgamaya';
}

getInfo();

// output:- ReferenceError:- cannot access message before initialization
*/

/*
// 3. 
const pets = ['dog', 'sher'];
({ item: pets[2] } = { item: 'cat' });
console.log(pets);
// as we have written above statement in () so it will be treated as a expression. */

/*
// 4. 
const foo = 'frontendMaster';
console.log(!typeof foo == 'object');
console.log(!typeof foo == 'string');

// output:- false false                     // basically, first !typeof foo expression will be evaluated and it will be false in both cases bcoz typeof foo is 'string' and when we negate that 'string' it will become false and on comparing false with 'object' or  'string' we will get false.
*/

/* 5.
var foo = function test() {
    console.log('inside test');
    test(); // fine, will run and can be used for recursive purposes.
}

test();

// output:- ReferenceError: test is not defined
// this is bcoz we cannot call anonymous function outside of it.
// another method is to replace foo with test and remove test from anonymous function.
*/