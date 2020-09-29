function Thunkify(fn) {
    return function (...args) {
        const ctx = this;
        return function (done) {
            let called = false;
            args.push((...doneArgs) => {
                if (called) return;
                called = true;
                done.apply(null, doneArgs);
            });
            try {
                fn.apply(ctx, args);
            } catch (err) {
                done.call(null, err);
            }
        }
    }
}

function mockAjax(url, method, callback) {
    console.log(`${method} - ${url}`);
    setTimeout(() => {
        callback({
            data: 'Hello',
        })
    })
}

const ajax = Thunkify(mockAjax)('http://google.com', 'GET');

function* fetchData() {
    const data = yield ajax;
    console.log(data);
}

function run(gen) {
    const g = gen();

    function next(data) {
        const result = g.next(data);
        if (result.done) return;
        result.value(next);
    }

    next();
}

run(fetchData);