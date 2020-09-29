function* createErrGen() {
    console.log('create some error');
    throw 'Error';
    console.log('Will be not executed');
}

let gen = createErrGen();

try {
    gen.next();
} catch (err) {
    console.log(err);
    console.log(gen.next());
}