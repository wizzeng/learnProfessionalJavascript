let text = 'cat,hat,pat,something,cat,nothing,hat';
let pattern = /.at,?/yg;

console.log(pattern.exec(text), pattern.lastIndex);
console.log(pattern.exec(text), pattern.lastIndex);
console.log(pattern.exec(text), pattern.lastIndex);
console.log(pattern.exec(text), pattern.lastIndex);
console.log(pattern.exec(text), pattern.lastIndex);
