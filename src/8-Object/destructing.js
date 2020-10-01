const { runTest } = require('../../utils/run-test.js');

const obj = {
    a: 1,
    b: 2,
    c: {
        d: 3
    }
};

const arr = ['a', 'b', ['c', 'd'], 'e'];

runTest(function simpleDestruct(obj) {
    const { a, b, c } = obj;
    console.log(a, b, c);
}, null, obj);

runTest(function namedDestruct(obj) {
    const { a: anotherName } = obj;
    console.log(obj.a, anotherName);
}, null, obj);

runTest(function arrayDestruct(arr) {
    const [a, b, [c, d], e] = arr;
    console.log(a, b, c, d, e);
}, null, arr);

runTest(function arrayIgnoreDestruct(arr) {
    // Print: ONLY destruct e
    const [, , , e] = arr;
    console.log(e);
}, null, arr);

runTest(function destructArrayAsObject(arr) {
    // Print: Destruct Array as Object 0:a
    const { '0': name } = arr;
    console.log(name);
}, null, arr);

runTest(function iterableItemDestruct() {
    // Print: You can destruct any iterable-object as an Array
    const arrayLike = {
        * [Symbol.iterator]() {
            yield 1;
        }
    };
    const [a] = arrayLike;
    console.log(a);
});

runTest(function defaultDestructingValue() {
    // Print: Get default value when destructing returns undefined.
    const [a = 1] = [];
    const [b = 1] = [undefined];
    console.log(a, b);

    // Print: You still get null when you destructing.
    const [nullable] = [null];
    console.log(nullable);
});


runTest(function nestedDestructing() {
    const nestedObj = {
        a: [
            {
                b: 1
            }
        ]
    };

    const { a: [{ b: anotherName }] } = nestedObj;

    console.log(anotherName);
})

