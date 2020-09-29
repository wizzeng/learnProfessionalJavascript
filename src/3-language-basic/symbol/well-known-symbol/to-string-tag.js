class Hello {
    // When toString() called to its instance, [object Hello] will be printed.
    [Symbol.toStringTag] = 'Hello';
}

const hello = new Hello();
console.log(hello.toString());
