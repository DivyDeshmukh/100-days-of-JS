
/*
// 1. 
const name = 'Divy';

console.log(name());

// output:- typeerror:- name is not a function              // when we treat other datatypes (any) as functions then we get this error
*/

/*
// 2.
let name = 'Dev';

function getName () {
    console.log(name);
    let name = 'Frontend Master';
}

getName ();

// output:- ReferenceError: Cannot access 'name' before initialization              // as during memory creation phase memory is allocated to all variables but variables declared with let are not hoisted that is not assigned with undefined so before there initialization they cannot be accessed otherwise reference error will come. Now, in this case as inner 'name' will be given preference and it is allocated memory during memory creation phase but it cannot be accessed before initiailization so reference error will come.
*/

/*
// 3. 
const one = false || {} || null;
const two = null || false || '';
const three = [] || 0 || true;

// output:- {} '' []                // as || operator assigns value at the right side if left side value is false and we can do chaining as well so, in one as false is a falsy value so {} which is a memory reference it will be assigned, then in two null is false false is false and lastly '' is assigned in two, lastly in three [] is assigned in three as it is a memory reference.
*/

/*
// 4. 
console.log(`${(x => x)('I Love')} JS`);

// output:- 'I Love JS'             // as inside template literal we have used iife.

*/

/*
// 5. 
let num = 1;
const list = ['A', 'B', 'C'];
console.log(list[num += 1]);

// output:- 'C'             // whenever we try to modify value of any variable inside console then we will get the new value of that variable as a result (eg:- console.log(a=5) is 5 or console.log(a *= 5) is 25) so num += 1 will make num to 2 and hence list[2] is 'C'.
*/