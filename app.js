const getIndexToIns = (arr, num) => {
    arr.push(num);
    const sortedArr = arr.sort((a, b) => {
        return a - b;
    });
    return sortedArr.indexOf(num);
}

console.log( getIndexToIns([1, 2, 3, 4], 2.5) );