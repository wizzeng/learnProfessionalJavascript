const sym = Symbol('key');

const obj = {};

Object.defineProperty(obj, sym, {
    value: 'something',
    writable: true,
    enumerable: true,
    configurable: true,
});

console.log(Object.getOwnPropertyNames(obj));
// if you lost a reference to a symbol of object,
// you can traverse the properties of this object and recover the reference.
console.log(Object.getOwnPropertySymbols(obj));
console.log(Object.getOwnPropertyDescriptors(obj));

// When you set a property for a obj using symbol,
// dot accession will failed because the name will
// convert to string automatically.
console.log(obj[sym]);