let s1 = Symbol('foo'),
    s2 = Symbol('bar'),
    s3 = Symbol('baz');

let o = {
    [s1]: 'foo val'
};

Object.defineProperty(o, s2, {
    value: 'bar val',
    enumerable: true,
});

Object.defineProperties(o, {
    [s3]: { value: 'baz val', enumerable: true }
});

console.log(Reflect.ownKeys(o));