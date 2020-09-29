function *createGen() {
}

const g = createGen();
g.next();

console.log(g instanceof createGen);

