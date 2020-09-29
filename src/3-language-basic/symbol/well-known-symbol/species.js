class Bar extends Array {

}

class Baz extends Array {
    static get [Symbol.species]() {
        console.log('call me')
        return Array;
    }
}

console.log(Baz[Symbol.species]);
console.log('species', Baz[Symbol.species] === Baz);

let bar = new Bar();
console.log(bar instanceof Array);
console.log(bar instanceof Bar);
bar = bar.concat('bar');
console.log(bar instanceof Array);
console.log(bar instanceof Bar);

let baz = new Baz();
console.log(baz instanceof Array);
console.log(baz instanceof Baz);
baz = bar.concat('baz');
console.log(baz instanceof Array);
console.log(baz instanceof Baz);
console.log(baz);
