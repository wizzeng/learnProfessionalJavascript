const buf = new ArrayBuffer(16);
const intArr = new Int32Array(buf);

console.log(intArr.length);


const int8Arr = new Float64Array([1, 2, 3, 4, 5]);
console.log(int8Arr.length);
console.log(int8Arr.byteLength);
console.log(int8Arr);

for (const i of int8Arr) {
    console.log(i);
}

const waitInserted = new Int8Array(4);
waitInserted.set([1, 2, 3, 4]);
waitInserted.set([1, 2], 2);

const subArr = waitInserted.subarray(0, 2);
console.log(subArr);
