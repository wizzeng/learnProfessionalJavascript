const co = require('co');

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
    }))
}

function* fetchData() {
    try {
        const data1 = yield mockAjax();
        console.log('data1: ', data1);
        const data2 = yield mockAjax();
        console.log('data2: ', data2);
    } catch (err) {
        console.log('Error inside');
        throw 'ERROR FROM INSIDE';
    }
    return 1;
}

co(fetchData).then((data) => {
    console.log('Async End', data);
}).catch((err) => {
    console.log('Async Error', err);
});