/*
// 1. 
const arr = [1, 2, 3];
console.log(arr[5]);

// output:- undefined
// explanation:- In other languages we can get an error but in js as everything can behave like an object so, it do not treat 5 as a address here, it treats it like an object and when we try to access a property on an object that do not exist then we get 'undefined' as an output. 
*/

/*
// 2.
function init(x, y, z) {}

function end(a, b=0, c) {}

console.log(init.length);
console.log(end.length);

// output:- 3 1
// explanation:- Basically, inside constructor property of function we have length property that returns the number of arguments that a function takes, but there are some exceptions that needs to be remember like, if we have given default value to a argument then that argument is not considered in the length and after that all the arguments are considered as optional and they are also not considered, that's why in end.length we get 1 bcoz b is not considered and after b no argument is considered.
*/

/*
// 3.
const Person = {
    lang:  'JS',
    show: function () {
        console.log(`Hi, ${this.lang}`);
    }
}

const fn = Person.show;             // reference of show comes inside fn
// fn();                               // and as fn is called in global context so the 'this' inside it will represent global object and as the global object do not have any property with name show so, it returned undefined.
// there can be two solutions to this first is either we can directly call show on Person or use call() and Person inside that so the fn will be called based on Person's context.
// Person.show();
fn.call(Person);
*/

/*
// 4.
console.log([] === []);
console.log({} === {});
console.log([] == []);
console.log({} == {});
console.log([1, 2] === [1, 2]);
console.log({name: 'divy', age: 21} === {name: 'divy', age: 21});
console.log([1, 2] == [1, 2]);
console.log({name: 'divy', age: 21} == {name: 'divy', age: 21});

// this all will result in false bcoz we are trying here to compare non-primitive data-types that basically represents some memory location and it does not matter whether they are empty or filled with same corresponding values it will anyway result in false bcoz, they represent memory locations and whenever we try to compare two memory locations they will always result in false.
*/

/*
// 5. 
if (function fn () {}) {
    console.log(fn);    
}
// this will result in an error bcoz whatever we pass as condition in if after getting evaluated it is collected as garbage value and after evaluating it has no existence so that is why when we try to log (fn) then will give an error that fn is not defined.
*/

