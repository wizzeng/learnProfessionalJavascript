class Foo {
    async *[Symbol.asyncIterator]() {

    }
}

let f = new Foo();

console.log(f[Symbol.asyncIterator]());


class Emitter {
    constructor(max) {
        this.max = max;
        this.asyncIdx = 0;
    }

    // When using for-await-of statement,
    // the priority of `asyncIterator` is higher than `iterator`
    *[Symbol.iterator]() {
        yield 1;
    }

    // use for `for await`
    async *[Symbol.asyncIterator]() {
        while(this.asyncIdx < this.max) {
            yield new Promise((resolve => resolve(this.asyncIdx++)));
        }
    }
}

async function asyncCount() {
    let emitter = new Emitter(5);
    for await (const x of emitter) {
        console.log(x);
    }
}

asyncCount().then(() => {
    console.log('end');
});