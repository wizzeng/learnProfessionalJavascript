function* flatten(arr) {
    for (const arrElement of arr) {
        if (Array.isArray(arrElement)) {
            yield* flatten(arrElement);
        } else {
            yield arrElement;
        }
    }
}


for (const item of flatten([1, 2, 3, [4, 5, [6, 7, 8]]])) {
    console.log(item);
}

console.log([...flatten([1, 2, 3, [4, 5, [6, 7, 8]]])]);