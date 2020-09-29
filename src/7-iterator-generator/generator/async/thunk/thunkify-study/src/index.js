const fs = require('fs');

function myThunkify(fn) {
    return function (...args) {
        const ctx = this;
        return function (done) {
            let called = false;
            args.push((...finishArg) => {
                if (called) return;
                called = true;
                done.apply(null, finishArg);
            });
            try {
                fn.apply(ctx, args);
            } catch (err) {
                done(err);
            }
        }
    }
}

let read = myThunkify(fs.readFile);
read('../test.json', 'UTF-8')((err, str) => {
    console.log(err, str);
});