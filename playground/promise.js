new Promise((res) => {
    console.log('1');
    res();
}).then(() => {
    console.log('2')
});

console.log('3')