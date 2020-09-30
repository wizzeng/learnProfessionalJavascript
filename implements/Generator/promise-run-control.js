function mockAjax() {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve({
                    greeting: 'Hello',
                })
            } else {
                reject(new Error('Something wrong'))
            }
        }, 100);
    }));
}

function* fetchData() {
    const data1 = yield mockAjax();
    console.log('data1: ', data1);
    const data2 = yield mockAjax();
    console.log('data2: ', data2);
    return 1;
}

function co(gen, ...args) {
    return new Promise(((resolve, reject) => {
        let generatorOrResult = gen.apply(this, args);
        if (!generatorOrResult || generatorOrResult.next === undefined) resolve(generatorOrResult);
        const generator = generatorOrResult;

        onFulfilled();

        function onFulfilled(res) {
            let result;
            try {
                result = generator.next(res);
            } catch (err) {
                return reject(err);
            }
            next(result);
        }

        function onRejected(rej) {
            let result;
            try {
                result = generator.throw(rej);
            } catch (err) {
                return reject(err);
            }
            next(result);
        }

        function next(result) {
            if (result.done) return resolve(result.value);
            if (result.value) result.value.then(onFulfilled, onRejected);
        }
    }))
}

co(fetchData).then((data) => {
    console.log('Async End', data);
}).catch((err) => {
    console.log('Async Error', err);
});