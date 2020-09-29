const obj = {
    key: {},
}

const map = new WeakMap().set(obj.key, 'Value');
console.log(map);

delete obj.key;

