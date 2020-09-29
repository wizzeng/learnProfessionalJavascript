const map = new Map([['a', 'b'], ['c','d'], [{key: 'a', value: 'b'}, 1]]);
console.log(map);

const genMap = new Map({
    *[Symbol.iterator]() {
        let i = 0;
        while(i++ < 10) {
            yield [i, i+1];
        }
    }
})

console.log(genMap);