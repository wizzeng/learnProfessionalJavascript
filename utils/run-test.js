const { performance } = require('perf_hooks');
const { colorConsole } = require('./print.js');
const textOptions = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'

// the function created by new Function() can only access global scope
global.colorConsole = colorConsole;

/**
 * Create a string with giving length.
 * @param length
 * @returns {string}
 */
function createRandomText(length = 5) {
    let result = '';

    for (let i = 0; i < length; i++) {
        result += textOptions[(Math.random() * 62).toFixed(0)];
    }

    return result;
}

/**
 * Print any comment in function when execute it.
 * @param {function} fn
 * @return {function}
 */
function createCommentPrintFunction(fn) {
    const str = fn.toString();
    const beforeIndex = str.indexOf('{');
    const lastIndex = str.lastIndexOf('}');
    const beforeText = str.slice(0, beforeIndex);
    const args = beforeText.slice(
        beforeText.indexOf('(') + 1,
        beforeText.lastIndexOf(')')
    )
        .replace(/\s/g, '')
        .split(',');
    const bodyStr = str.slice(beforeIndex + 1, lastIndex);

    const commentReg = /\/\/\s+Print:\s*(.+)/g;
    const replacedBody = bodyStr.replace(/'/g, '"')
        .replace(commentReg,
            'colorConsole({ str: \'Comment: $1\', color: "yellow" })')
        .trim();

    return new Function(...args, replacedBody);
}

module.exports = {
    /**
     * Run your function with comment printing and time-usage collection.
     * @param { function } fn
     * @param { {  comment: boolean, showTimeUsage: boolean } } [option]
     * @param { any } [args]
     */
    runTest: function (fn, option, ...args) {
        const displayName = `Knowledge ${fn.name || createRandomText()}`
        if (typeof fn !== 'function') return;
        if (!option || option.comment !== false) {
            fn = createCommentPrintFunction(fn);
        }
        const date = new Date();
        colorConsole({
            str: `[${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}] `,
        }, {
            str: displayName,
            color: 'red',
        })
        const startTime = performance.now();
        fn.apply(this, args);
        const timeUsage = performance.now() - startTime;
        if (!option || option.showTimeUsage !== false) {
            colorConsole({
                str: `Time Usage ${displayName}: `,
                color: 'blue'
            }, {
                str: `${timeUsage.toFixed(5)}ms`,
                color: 'black',
                bgColor: 'greenBG'
            });
        }
    }
}