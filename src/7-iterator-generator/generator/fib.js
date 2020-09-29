function* fib() {
    let [prev, curr] = [0, 1];
    while (true) {
        yield curr;
        [prev, curr] = [curr, prev + curr];
    }
}

for (const fibItem of fib()) {
    if (fibItem > 10000) break;
    console.log(fibItem)
}
