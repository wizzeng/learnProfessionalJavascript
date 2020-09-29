const weakMap = new WeakMap();

const obj = {};

weakMap.set(obj, 'a');

console.log(weakMap.get(obj));
