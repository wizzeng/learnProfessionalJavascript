const m = new Map();
const func = () => {};
const obj = {};
m.set('a', 'b').set('c', 'd').set(func, 'function').set(obj, 'object');
console.log(m.has(obj));
console.log(m.delete(obj));
console.log(m.has(obj));
console.log(m);

for (let [key, value] of m.entries()) {
    console.log(key, value);
}

m.set(NaN, 0);
console.log(m.has(NaN));

m.set('a', 'b');
console.log('Try to get a', m.get('a'));

console.log(m[Symbol.iterator] === m.entries);

m.clear();
console.log(m);

