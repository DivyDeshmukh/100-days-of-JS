// // Day 11:- Promises and Async
// // Activity 1:- Understanding Promises

const promise1 = new Promise((res, rej) => {
    setTimeout(() => {
        res("Promise has been resolved.");
    }, 2000);
});

promise1
    .then ((res) => console.log(res))


const promise2 = new Promise((res, rej) => {
    setTimeout(() => {
        rej("Promise has been rejected.");
    }, 2000);
});

promise2
    .then ((res) => console.log(res))
    .catch((err) => console.log(err));

// // Activity 2:- Chaining Promises
fetch('https://fakestoreapi.com/products')
    .then((res) => {
        console.log(res);
        return res.json();
    })
    .then((data) => console.log(data))
    .catch((err) => {
        console.log(err);
    });

// Activity 3:- Using Async/Await
async function fetchData () {
    const response = await fetch ('https://fakestoreapi.com/products');
    const data = await response.json();
    console.log(data);
}

fetchData();

const rejectedPromise = () => {
    return new Promise((res, rej) => rej("Promise has been rejected"));
}

async function errorHandling () {
    try {
        const response = await rejectedPromise();
        console.log("response: ", response);
    } catch (error) {
       console.log(error); 
    }
}

errorHandling();

// activity 4:- Fetching Data from API
fetch('https://fakestoreapi.com/products')
    .then((res) => {
        console.log(res);
        return res.json();
    })
    .then((data) => console.log(data))
    .catch((err) => {
        console.log(err);
    });

(async function () {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
})();

// Activity 5:- Concurrent Promises
const p1 = new Promise((res, rej) => res("p1 resolved")); 
const p2 = new Promise((res, rej) => res("p2 resolved")); 
const p3 = new Promise((res, _) => res("p3 resolved")); 
const p4 = new Promise((res, rej) => rej("p4 rejected")); 

Promise.all([p1, p2, p3, p4])
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

/* All Promises Resolved: If all promises in the iterable passed to Promise.all are resolved, Promise.all returns a single Promise that resolves with an array of the results of the input promises.
One or More Promises Rejected: If any of the promises in the iterable passed to Promise.all are rejected, Promise.all returns a single Promise that rejects with the reason of the first promise that rejects. This means that as soon as one promise is rejected, the entire Promise.all is rejected. Yes, Promise.all only works with iterables */

Promise.allSettled([p1, p2, p3, p4])
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

// allSettled is for both either rejected or resolved. Promise.allSettled will wait for all promises to settle (either resolved or rejected) and provide an array of objects that describe the outcome of each promise.

Promise.race([p1, p2, p3, p4])
    .then ((res) => console.log(res))
    .catch((rej) => console.log(rej));

// Promise.race resolves or rejects as soon as one of the promises in the iterable settles.