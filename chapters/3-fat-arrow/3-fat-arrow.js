/**
 * Intro
 */
function sum(x, y) {
  return x + y;
}
// const sum = (x, y) => 
// { return x + y }

/**
 * Makes declarative code easier to write
 */

const evens = [0, 2, 4];
evens.map(function (v) {
  return v + 1;
});
//  const odds = evens.map(x => x + 1)

/**
 * Lexical this
 */
// function Fives() {
//     this.nums = [3,4,5];
//     this.fives = [];
//     this.nums.forEach(function(v) {
//       if (v % 5 === 0)
//         this.fives.push(v)
//     });
// }

// const ob = new Fives();

// console.log(ob.fives);

/**
 * Explain this
 */