let a = 6;
let b = 9;

function simpleTag(strings, aValExpression, bValExpression, sumExpression) {
    console.log(strings);
    console.log(aValExpression);
    console.log(bValExpression);
    console.log(sumExpression);
    return 'foobar';
}

function simpleTag2(strs, ...exps) {
    console.log(strs, exps);
    return 'a';
}

// let untaggedResult = `${a} + ${b} = ${a+b}`;
// let taggedResult = simpleTag`${a} + ${b} = ${a+b}`

// console.log(simpleTag2`${a} + ${b} = ${a+b}`)
// console.log(untaggedResult, taggedResult);


function zipTag(strings, ...expressions) {
    return strings[0] + expressions.map((e, i) => `${e}${strings[i+1]}`).join('');
}

console.log(zipTag`${a} + ${b} = ${a+b}`);