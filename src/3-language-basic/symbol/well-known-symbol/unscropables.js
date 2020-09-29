let o = {
    foo: 'bar',
};

with(o) {
    console.log(foo);
}

// property foo is inaccessible in `with` statement.
o[Symbol.unscopables] = {
    foo: true
};

with(o) {
    console.log(foo);
}