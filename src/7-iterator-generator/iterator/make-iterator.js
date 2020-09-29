const makeIterator = () => {
    let i = 0;
    return {
        next() {
            return {
                done: i > 10,
                value: i++,
            }
        }
    }
}

let iterator = makeIterator()

let value;

while(!(value = iterator.next()).done) {
    console.log(value.value);
}
