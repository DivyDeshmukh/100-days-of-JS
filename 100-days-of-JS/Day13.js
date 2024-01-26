// Day 13

const orders = [
    { orderId: '123', customerId: '123', deliveryDate: '01-01-2020', delivered: true, items: [
        { productId: '123', price: 55 },
        { productId: '234', price: 30 },
    ]},
    { orderId: '234', customerId: '234', deliveryDate: '01-02-2020', delivered: false, items: [
        { productId: '234', price: 30 },
    ]},
    { orderId: '345', customerId: '234', deliveryDate: '05-01-2020', delivered: true, items: [
        { productId: '567', price: 30 },
        { productId: '678', price: 80 },
    ]},
    { orderId: '456', customerId: '345', deliveryDate: '12-01-2020', delivered: true, items: [
        { productId: '789', price: 12 },
        { productId: '890', price: 90 },
    ]},
        { orderId: '578', customerId: '456', deliveryDate: '12-01-2020', delivered: true, items: [
        { productId: '901', price: 43 },
        { productId: '123', price: 55 },
    ]},
];

// Exercises

/*
// 1) Get a list of the orders for the customer with the ID 234 that have not been delivered.
const arr = orders.filter ( (val) => (val.customerId === '234') && (!val.delivered) );
console.log(arr);
*/

/*
// 2) Create a new property on each order with the total price of items ordered.
// orders.forEach ( (val) => {
//     val['totalPrice'] = val['items'].reduce((acc, curr) => {
//         return acc+curr['price'];
//     }, 0)
// })

// another method
const newOorders = orders.map(order => ({...order, orderTotal: order.items.reduce((acc, item) => acc + item.price, 0)}) );

console.log(newOorders);
*/

/*
// 3) Have all the orders been delivered?
const check = orders.every ((val) => (val.delivered));
console.log(check);
*/

/*
// 4) Has the customer with ID '123' made any orders?
const check = orders.some(val => val.customerId === '123');                 // .some() is opposite of .every(), it checks for any element that satisfies the given condition, if yes then it returns true
console.log(check);
*/

/*
// 5) Have any products with ID 123 has been sold
const anyProductID123 = orders.some((order) => order.items.filter((product) => product.productId === "123").length > 0);
console.log("Have any products with an id of 123 been sold? --> ", anyProductID123);
*/
