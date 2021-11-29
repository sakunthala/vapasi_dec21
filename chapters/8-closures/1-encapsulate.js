

const moduleFunction = () => {
    let data = 1;
    const incrementData = () => data ++;
    return {
        increase: incrementData,
        getData: () => data
    }
};

