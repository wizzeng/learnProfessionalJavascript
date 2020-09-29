function *gen(init) {
    console.log(init, yield);
    console.log(yield);
    console.log(yield);
}

let g = gen('a');
g.next('b');
g.next('c');