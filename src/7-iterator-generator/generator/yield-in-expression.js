function* expressionYieldGen() {
    console.log(1 + (yield 10));
}

let g = expressionYieldGen();
let { value } = g.next();
console.log('Yield value: ', value);
g.next(++value);

