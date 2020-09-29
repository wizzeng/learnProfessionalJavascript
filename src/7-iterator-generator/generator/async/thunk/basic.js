const fs = require('fs');

const Thunk = function(fn) {
    return function(...args) {
        return function(callback) {
            return fn.call(this, ...args, callback);
        }
    }
}

let readFileThunk = Thunk(fs.readFile)('test.json', 'UTF-8');

readFileThunk((err, data) => {
    console.log(data);
})
