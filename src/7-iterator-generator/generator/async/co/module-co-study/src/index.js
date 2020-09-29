const fs = require('fs');

const readFile = function (fileName) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName, function (err, data) {
            if (err) return reject(err);
            resolve(data);
        })
    })
}

let gen = function* () {
    let f1 = yield readFile('../test.json');
    let f2 = yield readFile('../test.json');
    console.log(f1.toString());
    console.log(f2.toString());
}

// let g = gen();
// g.next().value.then((data) => {
//     g.next(data).value.then(function (data) {
//         g.next(data);
//     })
//
// });

function run(gen) {
    let g = gen();

    function next(data) {
        let result = g.next(data);
        if (result.done) return result.value;
        result.value.then((data) => {
            next(data);
        })
    }

    next();
}

run(gen);