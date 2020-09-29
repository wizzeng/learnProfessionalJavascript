const obj1 = {
    * [Symbol.iterator]() {
        let i = 0;
        while (i < 5) {
            yield i++;
        }
    }
}

for (let i of obj1) {
    console.log(i);
}

const obj2 = {
    [Symbol.iterator]() {
        let i = 0;
        return {
            next() {
                return {
                    done: i > 5,
                    value: i++,
                }
            }
        }
    }
}

for (const i of obj2) {
    console.log(i);
}