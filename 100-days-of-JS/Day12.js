// Day 12

// Consider this array
const arrOfObj = [
    {firstName: 'Charlse', lastName: 'Campbell', DOB: '09/04/1977', department: 'Sales', salary: '42000'},
    {firstName: 'Tiffany', lastName: 'Lambert', DOB: '05/11/1990', department: 'Development', salary: '34000'},
    {firstName: 'Antonio', lastName: 'Gonzalez', DOB: '03/24/2002', department: 'Office Management', salary: '49000'},
    {firstName: 'Aaron', lastName: 'Garett', DOB: '09/04/2005', department: 'Development', salary: '39000'}
];

/*
// 1. What is the avg income of all the people in the given array

const avgIncome = (arrOfObj) => {

    // arrOfObj.forEach( (val, index) => {
    //     sum += Number(val['salary']);
    // });

    const sum = arrOfObj.reduce( (acc, curr) => {
        return acc+=Number(curr['salary']);
    }, 0);

    return (sum/arrOfObj.length);
}

console.log(avgIncome(arrOfObj));
*/

/*
// 2. Who are the people that are currently older than 30.

const arr = arrOfObj.filter (person => new Date().getFullYear() - new Date(person.DOB).getFullYear() > 30);

console.log(arr);
*/

/*
// 3. Get the list of people's fullname
const arr = arrOfObj.map( (val) => {
    return val['firstName'].concat(' ').concat(val['lastName']);
});

console.log(arr);
*/

/*
// 4. Get a list of people in the array ordered from youngest to oldest.
const arr = arrOfObj.sort((personA, personB) => {
    // youngest to oldest
    return -(new Date(personA.DOB) - new Date(personB.DOB));
    // oldest to youngest
    // return -(new Date(personA.DOB) - new Date(personB.DOB));
});

console.log(arr);
*/

// 5. How many people are there in each department
const peopleInDep = (arrOfObj) => {
    // let obj = {};
    // arrOfObj.forEach (function(val) {
    //     if(obj.hasOwnProperty(val['department'])) {
    //         obj[val['department']] += 1;
    //     }else {
    //         obj[val['department']] = 1;
    //     }
    // });

    // return obj;

    const arr = arrOfObj.reduce((acc, person) => ({...acc, [person.department]: acc[person.department] + 1 || 1}), {});

    return arr;
}

console.log(peopleInDep(arrOfObj));