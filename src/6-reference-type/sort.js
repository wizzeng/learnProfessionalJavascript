const arr = [1, 3, 5, 3, 1, 6, 7, 2, 2];


// arr.sort((first, second) => (first < second ? 1 : first === second ? 0 : -1));
arr.sort((first, second) => second - first);
console.log(arr);

// performance
setTimeout(() => {
    console.time('sort');
    arr.sort(() => 1);
    console.timeEnd('sort');
}, 3000);

setTimeout(() => {
    console.time('reverse');
    arr.reverse();
    console.timeEnd('reverse');
}, 1000)
