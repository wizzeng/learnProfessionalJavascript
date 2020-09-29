const a = new Set(['a', 'b', 'c']);
const b = new Set(['c', 'd', 'e']);


const v1 = new Set([...a, ...b]);
const v2 = new Set([...a].filter(e => b.has(e)));
const v3 = new Set([...a].filter(e => !b.has(e)));

console.log(v1, v2, v3);
