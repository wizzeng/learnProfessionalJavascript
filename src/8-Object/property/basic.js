let obj = {};

Object.defineProperty(obj, 'p', {
    configurable: false,
    enumerable: true,
    writable: true,
    value: 1,
});

Object.defineProperty(obj, 'p', {
    configurable: false,
    value: 1,
    writable: false,
})

obj.a = '1';

Object.freeze(obj);

