// Replacement for Array.prototype.map
const arrMap = [{ name: 'Amy' }, { name: 'Bob' }];
arrMap.map(it => it.name);
const mapResult = arrMap.reduce((prev, curr) => [...prev, curr.name], []);
console.log(mapResult);

// Replacement for Array.prototype.filter
const filterArr = [{ name: 'Amy', age: 16 }, { name: 'Bob', age: 20 }];
filterArr.filter(it => it.age > 18);
const filterResult = filterArr.reduce((prev, curr) => curr.age > 18 ? [...prev, curr] : [...prev], []);
console.log(filterResult);

// Replacement for filter + map
const filterMapArr = [{ name: 'Amy', age: 18 }, { name: 'Bob', age: 20 }];
filterMapArr.filter(it => it.age > 18).map(it => it.name);
const filterMapResult = filterMapArr.reduce((prev, curr) => curr.age > 18 ? [...prev, curr.name] : [...prev], []);
console.log(filterMapResult);

// Replacement for Array.prototype.some
const someAssertArr = [{ name: 'Amy', age: 18 }, { name: 'Bob', age: 20 }];
someAssertArr.some((item) => item.age > 18);
let someAssertResult = someAssertArr.reduce((prev, curr) => prev || curr.age > 18, false);
console.log(someAssertResult);

// Replacement for Array.prototype.every
const everyAssertArr = [{ name: 'Amy', age: 18 }, { name: 'Bob', age: 20 }];
everyAssertArr.every((item) => item.age > 18);
const everyAssertResult = everyAssertArr.reduce((prev, curr) => prev && curr.name > 18, true)
console.log(everyAssertResult);

// [1, 2, 3] => [1, 1, 2, 2, 3, 3]
const duplicateArr = [1, 2, 3];
const duplicateResult = duplicateArr.reduce((prev, curr) => [...prev, curr, curr], [])
console.log(duplicateResult);

// [1, 2, 3, 4] => [[1, 2], [3, 4]]
const groupArr = [1, 2, 3, 4];
// const groupArrResult = groupArr.reduce((prev, curr, index, origin) => index % 2 ? [...prev, [origin[index - 1], curr]] : [...prev],[]);
const groupArrResult = groupArr.reduce((prev, curr) => {
    prev[prev.length - 1].length >= 2 ? prev.push([curr]) : prev[prev.length - 1].push(curr);
    return prev
}, [[]])
console.log(groupArrResult);


// Compose Function
function compose(...funcArr) {
    // funArr是compose要组合的那些函数，arg是compose返回的函数的参数
    if (funcArr.length === 0) {
        // 如果没有传入函数，那么直接返回一个函数，函数的返回值就是传进来的参数
        return arg => arg
    }
    if (funcArr.length === 1) {
        // 如果只传入了一个函数，直接返回这个函数
        return funcArr[0]
    }

    return funcArr.reduce((all, current) => {
        return (...args) => {
            return all(current(...args))
        }
    })
}

const valCount = (val) => ++val;
const composedFunc = compose(valCount, valCount, valCount, valCount);

console.log(composedFunc(1));