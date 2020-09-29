function Base() {

}

function Child() {

}

Child.prototype = Base.prototype;

console.log(Base.isPrototypeOf(Child));