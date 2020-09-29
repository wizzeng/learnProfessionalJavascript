function* generator() {
    yield 0;
    yield 1;
    yield Promise.resolve(2);
    yield Promise.resolve(3);
    yield 4;
}

// async to await promise.resolve
(async function () {
    // waiting for the result of Promise.resolve
    for await (let num of generator()) {
        console.log(num);
    }
})();


// return value and pending Promise as well.
for (let result of generator()) {
    console.log(result);
}


