function *errGen() {
    try {
        yield;
    } catch (e) {
        console.log('inside', e);
    }
}

let gen = errGen();
gen.next();

try {
    gen.throw('err');
    gen.throw('err2');
} catch (err) {
    console.log('outside', err);
}