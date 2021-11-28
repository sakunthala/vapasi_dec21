const f1 = (cb) => {
    //create a delay of 1 sec
    setTimeout(() => {
        console.log('in f1');
        cb();
    },1000);
    

};

const f2 = () => {
    console.log('in f2');
}

f1(f2);




// const f1 = (city, callback) => {
//     console.log('fn', callback);
//     return callback(city);
// }

// const print = (name) => console.log(`Name ${name}`);

// f1('chennai', print);