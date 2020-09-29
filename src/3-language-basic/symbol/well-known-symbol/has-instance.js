function Foo() {
}

// You can't use Foo[Symbol.hasInstance] to define this function
// because key will be convert to string automatically by using `[]`
Object.defineProperty(Foo, Symbol.hasInstance, {
    value: function () {
        console.log('call')
        return Math.random() > 0.5;
    },
    enumerable: true,
    writable: true,
    configurable: true
});


let foo = new Foo();

console.log(foo instanceof Foo);
console.log(Foo[Symbol.hasInstance](foo));

class Bar {
    // defining static method of class equals to defining the same method to a function
    // function Bar() {}
    // Object.defineProperty(Bar, Symbol.hasInstance, {})
    static [Symbol.hasInstance]() {

    }
}