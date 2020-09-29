function printRaw(strings) {
    console.log('Actual characters');
    for(const string of strings) {
        console.log(string);
    }

    console.log('Escaped characters');
    console.log(typeof strings);

    for(const rawString of strings.raw) {
        console.log(rawString);
    }
}

// printRaw`\u00A9 ${'and'} \n`;
printRaw(`\u00A9 ${'and'} \n`);

