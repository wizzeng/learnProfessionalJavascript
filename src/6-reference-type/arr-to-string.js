let arr = [
    {
        toString() {
            console.log('call toString');
            return 'a';
        }
    },
    {
        valueOf() {
            return 'valueOf Call';
        }
    }
]

console.log(arr.toString());
console.log(arr.valueOf());
