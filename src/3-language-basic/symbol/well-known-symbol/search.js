class FooSearcher {
    static [Symbol.search](target) {
        return target.indexOf('foo');
    }
}

console.log('foobar'.search(FooSearcher));
console.log('foo'.search('foo'));