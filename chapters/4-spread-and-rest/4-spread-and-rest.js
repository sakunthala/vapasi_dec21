/**
 * Spread operator on arrays
 */
var params = [3, 4, 5];
var other = [1, 2, ...params];
// [ 1, 2, "hello", true, 7 ]

/**
 * Spread operator on objects
 */
const veggies = {
  olive: 3,
  tomato: 4,
};

const pizzaIngredients = {
  base: 1,
  cheese: 2,
  ...veggies,
};

console.log(pizzaIngredients);

/**
 *  Rest parameter
 */
function f(x, y, ...a) {
  return (x + y) * a.length;
}

f(1, 2, "hello", true, 7) === 9;

/**
 * Default parameters
 */
function f(x, y = 7, z = 42) {
  return x + y + z;
}
f(1) === 50; // true

/**
 * String literals
 */
const name = "Js";
const message = `Hello ${name}`; // Hello Js
