// function doubleAfter2Seconds(x) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(x * 2);
//     }, 2000);
//   });
// }

// function addPromise(x) {
//   return new Promise(resolve => {
//     doubleAfter2Seconds(10).then((a) => {
//       doubleAfter2Seconds(20).then((b) => {
//         doubleAfter2Seconds(30).then((c) => {
//           resolve(c);
//         })
//       })
//     })
//   });
// }

// const test = (x) => console.log('output =>',x);

// addPromise(10).then((output) => {
//     console.log(output);
// });


// const p = new Promise((resolve, reject) => {
//   console.log('in promise');
//   // setTimeout(() => resolve('abc'), 1000);
//   setTimeout(() => reject('error occured'), 1000);
  
// }).then((arg) => console.log('in then',arg))
// .catch((e) => console.log(e));



