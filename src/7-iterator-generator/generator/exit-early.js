function* createGenerator() {
    for (let i = 0; i < 5; i++) {
        yield i;
    }
}

const gen = createGenerator();
for (let i = 0; i < 2; i++) {
    console.log(gen.next());
}

console.log(gen.return(-100));
