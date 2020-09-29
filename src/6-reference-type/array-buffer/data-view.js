const buf = new ArrayBuffer(32);
const dv = new DataView(buf);

dv.setUint8(0, 0xA);

dv.getUint8(0);
console.log(dv.getUint16(0));
