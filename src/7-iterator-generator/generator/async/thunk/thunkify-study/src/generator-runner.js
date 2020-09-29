const fs = require('fs');
const thunkify = require('thunkify');
const readFileThunk = thunkify(fs.readFile);

function run(fn) {
    const gen = fn();

    function next(err, data) {
        const result = gen.next(data);
        if(result.done) return;
        result.value(next);
    }

    next();
}

let gen = function* () {
    let r1 = yield readFileThunk('../test.json');
    console.log(r1.toString());
    let r2 = yield readFileThunk('../test.json');
    console.log(r2.toString());
}

run(gen);

