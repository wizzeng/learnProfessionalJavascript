const text = 'mom and dad and baby,mom and dad and baby,mom and dad and baby';
let pattern = /mom( and dad( and baby)?)?/i;

console.log(pattern.exec(text));
console.log(text.match(pattern));

pattern = /mom( and dad( and baby)?)?/gi;

console.log(pattern.exec(text));
console.log(text.match(pattern));

pattern = /mom( and dad( and baby)?)?/i;
console.log(pattern.test(text), pattern.lastIndex);
console.log(pattern.test(text), pattern.lastIndex);
console.log(pattern.test(text), pattern.lastIndex);
console.log(pattern.test(text), pattern.lastIndex);

pattern = /mom( and dad( and baby)?)?/gi;
console.log(pattern.test(text), pattern.lastIndex);
console.log(pattern.test(text), pattern.lastIndex);
console.log(pattern.test(text), pattern.lastIndex);
console.log(pattern.test(text), pattern.lastIndex);
