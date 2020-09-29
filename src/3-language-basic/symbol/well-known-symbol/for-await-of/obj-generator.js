const asyncIterator = {
    [Symbol.asyncIterator]() {
        return {
            i: 0,
            next() {
                if (this.i < 3) {
                    return Promise.resolve({
                        value: this.i++,
                        done: false
                    });
                }
                return Promise.resolve({
                    done: true
                });
            }
        }
    }
};

const asyncIterator2 = {
    i: 0,
    async *[Symbol.asyncIterator]() {
        while (this.i < 3) {
            yield this.i++;
        }
    }
};

(async function() {
    for await (let num of asyncIterator2) {
        console.log(num);
    }
})();