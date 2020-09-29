const iterableObj = {
    i: 0,
    next() {
        return {
            value: this.i++,
            done: this.i > 5,
        }
    },
    [Symbol.iterator]() {
        return this;
    }
}

console.log('iterableObj1')

for (let i of iterableObj) {
    console.log(i);
}

const str = 'abcdefg';
const strIterator = str[Symbol.iterator]();

let iterableObj2 = {
    i: 0,
    [Symbol.iterator]() {
        return {
            next: () => {
                return {
                    done: this.i > 10,
                    value: this.i++
                }
            }
        }
    }
}

console.log('iterableObj2')
for(let i of iterableObj2) {
    console.log(i);
}

class IterableImplementer {

    i = 0;

    [Symbol.iterator]() {
        return {
            next: () => ({
                done: this.i > 10,
                value: this.i++
            })
        }
    }
}

let iterableObj3 = new IterableImplementer();
console.log('iterableObj3')
for(let i of iterableObj3) {
    console.log(i);
}
