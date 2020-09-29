class Foo {
    max = 5;

    constructor(max) {
        if (max && typeof max === 'number') {
            this.max = max;
        }
    }

    * [Symbol.iterator]() {
        let i = 0;
        while (i < this.max) {
            yield i++;
        }
    }
}

class Bar {
    max = 5;
    i = 0;

    constructor(max) {
        if (max && typeof max === 'number') {
            this.max = max;
        }
    }

    [Symbol.iterator]() {
        let obj = {};
        obj.next = (function () {
            return {
                value: this.i++,
                done: this.i >= this.max + 1,
            }
        }).bind(this);
        return obj;
    }
}

let f = new Foo();
let b = new Bar();

for (const fooItem of f) {
    console.log(fooItem);
}

console.log('Bar Item')

for (const barItem of b) {
    console.log(barItem);
}