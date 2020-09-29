function *gen() {
    yield 1;
    console.log('Say Hello');
}

let g = gen();

console.log(g);

console.log(g.next());


function *helloWorldGenerator() {
    yield 'Hello';
    yield 'World';
    return 'End';
}

let iter = helloWorldGenerator();

for (let i of iter) {
    console.log(i)
}
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

function *logGen() {
    console.log('Call me');
}

let logIter = logGen();
console.log(logIter.next());
