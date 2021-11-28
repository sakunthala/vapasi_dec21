

// const teach = () => {
//     let subject = 'es6';
//     console.log(`subject in parent ${subject}`);
//     return () => {

//         console.log(`in inner function ${subject} class`);
//     }
// };

// let t = teach();
// t();



// const teach = (subject) => {
//     console.log(`subject in parent ${subject}`);
//     return (id) => {

//         console.log(`in class id ${id} ${subject}`);
//     }
// };

// let third = teach('e6');
// third('3');

// let four = teach('js');
// four('4');


const moduleFunction = () => {
    let data = 1;
    const incrementData = () => data ++;
    return {
        increase: incrementData,
        getData: () => data
    }
};

// let handler1 = moduleFunction();
// handler1.increase();
// handler1.increase();
// console.log('data',handler1.getData());

// let handler2 = moduleFunction();
// handler2.increase();
// console.log('data',handler2.getData());

