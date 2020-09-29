// Symbol.iterator returns an object with `next()` method
class IterableClass {
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

let iterObj = new IterableClass();
for (const i of iterObj) {
    console.log(i)
}


class ReferIterableClass {
    i = 0;
    next() {
        return {
            done: this.i > 10,
            value: this.i++
        }
    }
    [Symbol.iterator]() {
        return this;
    }
}

let iterObj2 = new ReferIterableClass();
for (const i of iterObj2) {
    console.log(i);
}


class ClosureIterableClass {
    [Symbol.iterator]() {
        let i = 0;
        return {
            next() {
                return {
                    done: i > 10,
                    value: i++,
                }
            }
        }
    }
}

let closureObj = new ClosureIterableClass();
for (const i of closureObj) {
    console.log(i);
}

let closureIterator = new ClosureIterableClass();
let iterator = closureIterator[Symbol.iterator]();

console.log(iterator, closureIterator[Symbol.iterator]);