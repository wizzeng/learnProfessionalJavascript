const text = 'mom and dad and baby,mom and dad and baby,mom and dad and baby';
const pattern = /mom( and dad( and baby)?)?/i;

console.log(pattern);

let matches;
while (matches = pattern.exec(text)) {
    console.log(matches);
}
