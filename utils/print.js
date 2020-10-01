/**
 * @example \x1B[40;1m xxx => color: grey, bgColor: black
 */
const colorStrMapper = {
    'bright': '1m',
    'grey': '2m',
    'italic': '3m',
    'underline': '4m',
    'reverse': '7m',
    'hidden': '8m',
    'black': '30m',
    'red': '31m',
    'green': '32m',
    'yellow': '33m',
    'blue': '34m',
    'magenta': '35m',
    'cyan': '36m',
    'white': '37m',
}

const escapeChar = '\033[';
const clearBackgroundStr = `${escapeChar}0m`;

const backgroundColorStrMapper = {
    'blackBG': '40',
    'redBG': '41',
    'greenBG': '42',
    'yellowBG': '43',
    'blueBG': '44',
    'magentaBG': '45',
    'cyanBG': '46',
    'whiteBG': '47',
}

/**
 * Print colorful string into console.
 * @param { string } consoleObject.str
 * @param { string } [consoleObject.color]
 * @param { string } [consoleObject.bgColor]
 */
function colorConsole(...consoleObject) {
    if (!consoleObject.length) return;
    let renderObject = consoleObject;
    if (consoleObject.length === 1 && Array.isArray(consoleObject[0])) renderObject = consoleObject[0];
    const printStr = renderObject.reduce((prev, curr) => {
        const { str, color, bgColor } = curr;
        const fontColorStr = colorStrMapper[color] || colorStrMapper['grey'];
        const bgColorStr = backgroundColorStrMapper[bgColor]
            ? `${backgroundColorStrMapper[bgColor]}`
            : ''
        const coloredStr = `${escapeChar}${bgColorStr};${fontColorStr}${str}${clearBackgroundStr}`
        return `${prev}${coloredStr}`;
    }, '');
    console.log(`${printStr}`);
}

module.exports = {
    colorConsole
}