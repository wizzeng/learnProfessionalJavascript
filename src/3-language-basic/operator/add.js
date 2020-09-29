const obj = {
    valueOf() {
        console.log('valueOf');
        return 1;
    },
    toString() {
        console.log('toString');
        return 'a';
    },
}

console.log(obj + 1);
console.log(1 + obj);
console.log('a' + obj);
console.log(obj + 'a');

console.log(obj - 1);
console.log(obj * 1);
