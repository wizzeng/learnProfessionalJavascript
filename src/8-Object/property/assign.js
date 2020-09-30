const { knowledge } = require('../../../utils.js');

knowledge(function () {
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


knowledge(function () {
    let src1 = {}
});
