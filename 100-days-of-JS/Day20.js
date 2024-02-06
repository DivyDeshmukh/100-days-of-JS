/*
// 1.

variable = 10;

(() => {
    foo = 100;
    console.log(variable);
    var foo = 100;
    variable = 20;
    console.log(variable);
})();

console.log(foo);
console.log(variable);
var variable = 30;

// error because foo is not defined in the scope of global execution context. 
// the IIFE is anonymous; it doesn't have a name. The memory for the function and its variables is allocated during the memory creation phase, and the function is immediately invoked during the execution phase.
*/

// 2. 
for (var i = 0; i < 10; i++) {
    setTimeout(() => console.log(i), 0);
}

// When you declare a variable using var in JavaScript, the variable is hoisted to the top of its containing function or global scope during the compilation phase. During this hoisting process, memory is allocated for the variable, and subsequent declarations of the same variable within the same scope do not result in additional memory allocations.
// loop will run 10 times and same i is increasing everytime by one, and setTimeout gets registered 10 times. Now, after loop runned event handler of setTimeout will run and the value of i will be 10 at the time.

/*output:
10 times 10*/

// 3. 
for (let i = 0; i < 10; i++) {
    setTimeout(() => console.log(i), 0);
}

// When you use let in a for loop declaration, a new lexical environment (scope) is created for each iteration. This means that for each iteration, a new variable i is created and initialized to the value of the loop counter for that specific iteration.

// In the first iteration, a new i is created with a value of 0.
// In the second iteration, a new i is created with a value of 1.
// This continues for each iteration until the loop completes

// output: 0 to 9

/*
// 4

var fullname = "divy"

var obj = {
    fullname: "Hacked full Name",

    prop: {
        fullname: "Inside Prop",
        getFullname: function () {
            return this.fullname;           // Inside Prop
        },
    },

    getFullname: function () {
        return this.fullname;               // Hacked full name
    },

    getFullnameV2: () => this,      // arrow function represents global object

    getFullnameV3: (function () {
        return this.fullname;
    })(),
};

console.log(obj.prop.getFullname());
console.log(obj.getFullname());
console.log(obj.getFullnameV2());
console.log(obj.getFullnameV3);
*/

// In this case, you are correct that you cannot store the reference to the IIFE itself because it's not explicitly returning anything. You are storing the result of the IIFE.

/*
Inside Prop
Hacked full Name
{}
undefined
*/

/*
// 5.
const divy = {
    name: "Divy",
    sayName: function () {
        console.log(this.name);
    },
};

const jhon = {
    name: "Jhon Doe",
    sayName: function () {
        console.log(this.name);
    },
};

jhon.sayName.call(divy);              // call will give execution context of piyush to jhon and hence calling sayName on jhon will return name of "Divy";
*/
