/**
 * Array
 */
var list = [1, 2, 3];
var [first, second, third] = list;
console.log(fourth);

/**
 * Object
 */
// const obj = { a: 1, b: 2, c: 3 };
// let { b } = obj;
// console.log(b);

/**
 * Property shorthand
 */
// const headphone = 'motorola';
// const gadgets = { headphone };
// console.log(gadgets);

/**
 * With default values
 */
var obj = { a: 1 };
var list = [1];
var { a, b = 2 } = obj;
var [x, y = 2] = list;

console.log(a, b, x, y);
