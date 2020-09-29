// && return the first operand if it is falsy.
// Otherwise, it returns the second operand.
const value = true && 'name';
console.log(value);
console.log(null && 'a');
console.log(NaN && 'b');
console.log('b' && NaN);
console.log(undefined && 10);
console.log(false && 10);