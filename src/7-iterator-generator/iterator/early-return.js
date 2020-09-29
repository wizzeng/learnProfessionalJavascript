class Counter {
    constructor(limit) {
        this.limit = limit;
    }

    [Symbol.iterator]() {
        let count = 1,
            limit = this.limit;
        return {
            next() {
                if (count <= limit) {
                    return {
                        done: false,
                        value: count++
                    }
                } else {
                    return {
                        done: true
                    }
                }
            },
            // When iterator terminated early, `return()` will be called
            return() {
                console.log('Exiting early');
                // Object typed `IteratorResult` should be returned
                return {
                    done: true,
                }
            }
        }
    }
}

let counter = new Counter(5);
for (let i of counter) {
    if (i > 2) {
        break;
    }
    console.log(i);
}

let counter2 = new Counter(5);
try {
    for (let i of counter2) {
        if (i > 2) {
            throw 'err';
        }
        console.log(i);
    }
} catch (e) {
    console.log(e);
}

if(counter[Symbol.iterator]().return) {
    console.log('This iterator can be terminated early.');
}

let counter3 = new Counter(5);
for (let i of counter3) {
    console.log(i);
}
