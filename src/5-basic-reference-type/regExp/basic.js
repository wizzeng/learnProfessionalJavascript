const reg = /[cb]at/i;

const printRegInfo = (reg) => {
    console.log(reg.flags);
    console.log(reg.global);
    console.log(reg.lastIndex);
    console.log(reg.multiline);
    console.log(reg.sticky);
    console.log(reg.source);
    console.log(reg.unicode);
    console.log(reg.dotAll);
    console.log(reg.ignoreCase);
}

printRegInfo(reg);

const result = reg.exec('cat');

console.log(result);

printRegInfo(reg);

