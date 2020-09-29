function* valueGenerator() {
    let i = 0;
    while (i < 5) {
        yield i++;
    }
}

let arr = [...valueGenerator()];
console.log(arr);