function createRandomText(length = 5) {
    const textOptions = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'
    let result = '';

    for (let i = 0; i < length; i++) {
        result += textOptions[(Math.random() * 62).toFixed(0)];
    }

    return result;
}

module.exports = {
    knowledge: function (fn, ...args) {
        if (typeof fn !== 'function') return;
        const displayName = `Knowledge ${fn.name || createRandomText()}`
        const date = new Date();
        console.log(`[${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}] ${displayName}`);
        console.time(displayName);
        fn.apply(this, args);
        console.timeEnd(displayName)
        console.log('');
    }
}