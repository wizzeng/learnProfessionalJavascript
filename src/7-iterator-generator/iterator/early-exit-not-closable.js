const arr = Array.from('abcdefg');

arr[Symbol.iterator] = function () {
    let i = 0;
    return {
        next() {
            return {
                done: i > 5,
                value: i++,
            }
        },
        return() {
            console.log('Call me')
            return {
                done: true
            }
        }
    }
}

for (let i of arr) {
    console.log(i);
    if (i > 2) {
        break;
    }
}