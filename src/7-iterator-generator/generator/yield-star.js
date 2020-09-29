function* numberGenerator() {
    yield* [1, 2, 3, 4, 5];
}

for (const i of numberGenerator()) {
    console.log(i);
}

function* baseGenerator() {
    console.log('1. base: ', yield 1);
    console.log('2. base: ', yield 2);
    console.log('3. base: ', yield 3);
    console.log('4. base: ', yield 4);
    console.log('5. base: ', yield 5);
    return -1;
}

function* composeGenerator() {
    console.log('1. Compose: ', yield* baseGenerator());
    console.log('2. Compose: ', yield* baseGenerator());
}

const generator = composeGenerator();
console.log(generator.next());
console.log(generator.next('a'));
console.log(generator.next('b'));
console.log(generator.next('c'));
console.log(generator.next('d'));
console.log(generator.next('e'));
console.log(generator.next('f'));
console.log(generator.next('g'));

for (let i of composeGenerator()) {
    console.log(i)
}

console.log('Recursion');
function *nTimes(n) {
    if (n > 0) {
        yield *nTimes(n - 1);
        yield n - 1;
    }
}

for (const i of nTimes(5)) {
    console.log(i);
}