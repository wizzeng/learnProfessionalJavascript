class Bar {
    [Symbol.toPrimitive](hint) {
        console.log('Hint: ', hint)
        return 3;
    }
}

let bar = new Bar();
console.log(bar + 1);
console.log(+bar);
console.log('' + bar);
console.log(String(bar));
console.log(Number(bar));