const arr = [1,2,3,4,5,6,7];
const result = arr.reduce(((previousValue, currentValue, currentIndex) => {
    return [previousValue[0] + currentValue, ++previousValue[1]];
}), [0, 0]);
console.log(result);
