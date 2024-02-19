//  push and unshift returns the new length of the array and shift and pop returns the element that has been removed

/*
// 1. create your own version of push

Array.prototype.myPush = function (value) {
    const len = this.length;
    this.length = len+1;
    this[this.length-1] = value;
    
    return this.length;
}

const arr = [1, 2, 3, 4, 5];

console.log(arr.myPush(6));
console.log(arr);

*/

/*
// 2. create your own version of pop

Array.prototype.myPop = function () {
    const elem = this[this.length-1];
    this.length = this.length-1;
    return elem;
}

const arr = [1, 2, 3, 4, 5];

console.log(arr.myPop());
console.log(arr);
*/

/*
// 3. create your own version of unshift

Array.prototype.myUnshift = function (value) {
  
    this.length = this.length + 1;
    for (var i = this.length-1; i >= 1; i--) {
        this[i] = this[i-1];
    }
    this[0] = value;
    return this.length;
}

const arr = [1, 2, 3, 4, 5];

console.log(arr.myUnshift(0));
console.log(arr.myUnshift(-1));
console.log(arr);
*/

/*
// 4. create your own version of shift

Array.prototype.myShift = function () {
    const elem = this[0];
    for (var i = 0; i < this.length-1; i++) {
        this[i] = this[i+1];
    }

    this.length -= 1;

    return elem;
}
const arr = [1, 2, 3, 4, 5];

console.log(arr.myShift());
console.log(arr);
console.log(arr.myShift());
console.log(arr);
*/

/*
// 5. create your own version of slice

Array.prototype.mySlice = function (startIndex, endIndex) {

    let newArr = [];

    if (arguments.length === 0) {
        return [...this];
    }else if (arguments.length === 1) {
        if (arguments[0] === 0) return this;
        startIndex = (arguments[0] > 0) ? arguments[0] : this.length + arguments[0];
        endIndex = this.length;
    }else if ((arguments.length === 2)) {
        startIndex = (arguments[0] >= 0) ? arguments[0] : this.length + arguments[0];
        endIndex = (arguments[1] > 0) ? arguments[1] : this.length + arguments[1];
        endIndex = (endIndex > this.length) ? this.length : endIndex;
    }

    for (var i = startIndex; i < endIndex; i++) {
        newArr.push(this[i]);
    }

    return newArr;
}
*/

/*
const arr = [1, 2, 3, 4, 5];
console.log(arr.slice(0, 3));
console.log(arr.slice(0, -3));
console.log(arr.slice(-1, -3));         // Since the end index is before the start index, and slice works by including elements from the start index up to, but not including, the end index, the result is an empty array ([])
console.log(arr.slice(3));          // starts from 3 and will go to last element
console.log(arr.slice(-3));         // starts from -3 and will go to last element
*/

// const arr = [1, 2, 3, 4, 5];
// console.log(arr.mySlice(0, 3));
// console.log(arr.mySlice(0, -3));
// console.log(arr.mySlice(3));
// console.log(arr.mySlice(-3));
// console.log(arr.mySlice(2, 4));
// console.log(arr.mySlice(-3, -1));
// console.log(arr.mySlice(0));
// console.log(arr.mySlice());
// console.log(arr.mySlice(3, 1));
// console.log(arr.mySlice(-1, -4));




