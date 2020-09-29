const set = new Set();

set.add('a').add('a').add('a');
set.add({}).add({}).add({});

console.log(set);
console.log(set.size);
set.delete('a');

console.log(set);

for(let key of set) {
    console.log(key);
}


for (let entries of set.entries()) {
    console.log(entries);
}