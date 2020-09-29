function *gen() {
    let url = 'https://api.github.com/users/github';
    let result = yield fetch(url);
    console.log(result.bio);
}

let g = gen();
let result = g.next();

result.value.then((data) => {
    return data.json();
}).then((data) => {
    console.log(data);
    g.next(data);
});

