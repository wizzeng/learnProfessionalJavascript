function* generatorWithRejectedPromises() {
    yield 0;
    yield 1;
    yield Promise.resolve(2);
    yield Promise.reject(3);
    yield 4;
    throw 5;
}

(async function () {
    const iterator = generatorWithRejectedPromises();
    let finish = false;
    while (!finish) {
        try {
            for await (let num of iterator) {
                console.log(num);
            }
            finish = true;
        } catch (e) {
            console.log('catch', e);
        }
    }
})();