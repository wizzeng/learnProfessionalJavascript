function co(gen) {

    const g = gen();

    function next(data) {
        const result = g.next(data);
        if(result.done) return;
        result.value.then(next);
    }

    next();
}

function mockAjax() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                greeting: 'Hello',
            })
        })
    })
}

co(function* () {
    const data = yield mockAjax();
    console.log(data);
});