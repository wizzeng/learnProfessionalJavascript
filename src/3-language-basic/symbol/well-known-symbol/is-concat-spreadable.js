const initial = ['foo'];
const array = ['bar'];

// the default value is undefined, whose effect equals to true
console.log(array[Symbol.isConcatSpreadable]);
// will be flattened when `concat` called.
console.log(array.concat(initial));

Object.defineProperty(array, Symbol.isConcatSpreadable, {
    value: false,
});

// if `Symbol.isConcatSpread` is set to false, calling `concat`
// will not flat the array/array-like-object.
console.log(array.concat(initial));


const arrayLikeObject = {
    0: 'for',
    length: 1
};

// array-like-object will not be flatten when calling `concat`, the effect of
// `undefined` is equals to the effect of `false`
Object.defineProperty(arrayLikeObject, Symbol.isConcatSpreadable, {
    value: true,
});

console.log(array.concat(arrayLikeObject));