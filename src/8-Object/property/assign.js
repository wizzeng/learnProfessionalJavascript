const { runTest } = require('../../../utils/run-test.js');

runTest(function () {
    let src1 = {
        set a(val) {
            this.a = val;
        },

        b: 1,
    }

    let src2 = {
        get a() {
            return 1;
        },
        b: 2,
    }

    let dest = Object.assign({
        set a(val) {
            this.c = val;
        },
    }, src2);

    console.log(Object.getOwnPropertyDescriptors(dest));
    console.log(dest.a);
});


runTest(function assignNotEnumerable() {
    let src1 = {};
    // Print: create an non-enumerable property
    Object.defineProperty(src1, 'p', {
        value: 1,
    });
    // Print: Copy this property using Object.assign to target
    const target = Object.assign({}, src1);
    // Print: copy FAILED
    console.log('Target description: ', Object.getOwnPropertyDescriptors(target));
});
