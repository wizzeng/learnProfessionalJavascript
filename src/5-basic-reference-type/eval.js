let outer = 'a';

function tryEval() {
    let inner = 'b';
    let result = eval(`console.log(outer); inner = 'c'; 'b'`)
    console.log(result, inner);
}

tryEval();


console.time('eval');
eval('console.log(outer)');
console.timeEnd('eval');


let func = new Function('outer', 'console.log(outer)')

console.time('strFunc');
func(outer);
console.timeEnd('strFunc');
