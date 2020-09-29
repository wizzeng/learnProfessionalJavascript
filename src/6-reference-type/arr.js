const iterableObj = {
    i: 0,
    [Symbol.iterator]() {
        return {
            next: () => {
                return {
                    value: this.i++,
                    done: (this.i > 10)
                }
            }
        }
    }
}

const arr = Array.from(iterableObj, (value, key) =>{
    return value % 2 + key;
});
const strArr = Array.from('abcdefg');

console.log(arr, strArr);


const valuesChangeArr = [];

// equals to [Symbol.iterator]
valuesChangeArr.values = function*() {
    let i = 0;
    while (i < 10) {
        yield i++;
    }
}

for (let i of valuesChangeArr.values()) {
    console.log(i);
}

const holeArr = Array.from('abc');
holeArr[99] = 'd';
console.log(holeArr);