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
        callback('ERR', {
            greeting: 'Hello',
        })
    })
}

const ajax = Thunkify(mockAjax)('http://google.com', 'GET');

// like async
function* fetchData() {
    try {
        const data = yield ajax;
        console.log(data);
    } catch (err) {
        console.log('Error Occur inside', err);
    }
}

function run(gen) {
    const g = gen();

    function next(...[err, data]) {
        // throw error into generator
        if (err) g.throw(err);
        const result = g.next(data);
        if (result.done) return;
        result.value(next);
    }

    next()
}

run(fetchData);