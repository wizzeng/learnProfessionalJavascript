// use boolean as a switch
let switch1 = false;
let switch2 = false;
let switch3 = false;

console.time('boolean');
switch2 = true;
switch3 = true;
console.timeEnd('boolean');

let bitwiseSwitch = 0;
console.time('bitwise');
bitwiseSwitch |= 3;
console.timeEnd('bitwise');