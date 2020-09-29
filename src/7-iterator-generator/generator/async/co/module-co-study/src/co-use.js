const co = require('co');

function mockAjax() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                greeting: 'Hello',
            })
        }, 100);
    })
}

co(function* () {
    const data = yield mockAjax();
    console.log(data);
}).then(data => {
    console.log(data);
});

co(function() {
    console.log('Run');
    return 1;
}).then(fn => {
    console.log(fn);
});