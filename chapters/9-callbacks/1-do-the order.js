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

