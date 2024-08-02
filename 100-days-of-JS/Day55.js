// Day 12:- Error Handling
// Activity 1:- Basic Error handling with try-catch
function throwError (value) {
    if (value < 0) {
        throw new Error('Intentionally Error');
    }

    return value;
}

try {
    const value = throwError(1);
    console.log(value);
} catch (error) {
    console.log(error);
}   

function divide (num1, num2) {
    if (num2 === 0) {
        throw new Error('Denominator cannot be zero');
    }

    return num1 / num2;
}

try {
    const value = divide(23, 2);
    console.log(value);
} catch (error) {
    console.log(error);
}

// Activity 2:- Finally Block
function checkExec(cb, value) {
    if (value < 0) {
        throw new Error("Invalid value");
    }

    cb();
}

try {
    checkExec(() => console.log("First Run"), 2);
    checkExec(() => console.log("Second Run"), -1);
} catch (error) {
    console.log("catch: ", error);
} finally {
    console.log("Completed");
}

// Activity 3:- Custom Error Objects
class customError extends Error {
    super () {
        console.log("Custom Error Class Running");
    }
}

function throwSomeErr () {
    throw new customError("This error is thrown by a throwSomeErr");
}

try {
    const response = throwSomeErr();
    console.log(response);
} catch (error) {
    console.log(error);
}

function validateInput (str) {
    if (str.trim() === "") {
        throw new Error("Invalid String");
    }

    return str;
}   

try {
    const response = validateInput("");
    console.log(response);
} catch (error) {
    console.log(error);
}

// Activity 4:- Error Handling in Promises
const promise = new Promise((res, rej) => {
    const isResolved = Math.random() > 0.5;
    setTimeout(() => {
        if (isResolved) {
            res("Resolved");
        } else {
            rej("Rejected");
        }
    }, 1000);
});

promise.
    then ((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });

function randomPromise () {
    return new Promise((res, rej) => {
        const isResolved = Math.random() > 0.5;
        setTimeout(() => {
            if (isResolved) {
                res("Resolved");
            } else {
                rej("Rejected");
            }
        }, 1000);
    });
}

(async function () {
    try {
        const response = await randomPromise();
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}) ();

// Activity 5:- Graceful Error Handling in Fetch
fetch('https://invalidurljj.com')
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log("Invalid url");
    });

(async function () {
    try {
        const res = await fetch('https://slknslnslgnslgnslgns.com');
        console.log(res);
    } catch (error) {
        console.log("error: ", error);
    }
})();
