const wrapper = (generatorFunc) => {
    return function (...args) {
        let generator = generatorFunc(args);
        generator.next();
        return generator;
    }
}

const myGen = wrapper(function *() {
    console.log(yield 1);
});

myGen().next(3);