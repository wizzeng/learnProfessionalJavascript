function asyncMethod() {
    setTimeout(() => {
        iter.next(1);
    }, 1000);
}

function *executeAsync() {
    const value = yield asyncMethod();
    console.log('value from async: ', value);
}

const iter = executeAsync();
iter.next();