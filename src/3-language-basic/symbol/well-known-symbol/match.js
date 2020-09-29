const reg = /bar/;
const originMatch = reg[Symbol.match];
reg[Symbol.match] = function (target) {
    console.log('Call modifiers');
    return originMatch.call(reg, target);
}
console.log('barfoo'.match(reg));


class FooMatcher {
    static [Symbol.match](target) {
        return target.includes('foo')
    }
}

const barMatcher = {
    [Symbol.match](target) {
        return !target.includes('bar');
    }
}

console.log('foobar'.match(FooMatcher));
console.log('foobar'.match(barMatcher));
