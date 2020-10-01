const { performance } = require('perf_hooks');
const { colorConsole } = require('./print.js');
const TEXT_OPTIONS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
const COMMENT_REG = /\/\/\s+Print:\s*(.+)/g;
const CONSOLE_REG = /(console\.log\(.+\))(;)?/g;

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
        result += TEXT_OPTIONS[(Math.random() * 62).toFixed(0)];
    }

    return result;
}

/**
 * Convert comments start with 'Print' into executable print statement.
 * @param {string} bodyStr
 * @return {string}
 */
function createCommentPrintFunction(bodyStr) {
    return bodyStr.replace(/'/g, '"')
        .replace(COMMENT_REG,
            'colorConsole({ str: "Comment: $1", color: "yellow" })')
        .trim();
}

/**
 * Print console.log statement string when called it.
 * @param {string} bodyStr
 * @return { string }
 */
function replaceConsole(bodyStr) {
    return bodyStr.replace(CONSOLE_REG, 'colorConsole({ str: "// 👇 $1" , color: "green" }); $1;')
}

/**
 * Convert function to add extra feature.
 * @param fn
 * @param { {  comment: boolean, showTimeUsage: boolean } } [option]
 */
function convertExecutionFunction(fn, option) {
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
    let bodyStr = str.slice(beforeIndex + 1, lastIndex);

    if (!option || option.comment !== false) {
        bodyStr = createCommentPrintFunction(bodyStr);
    }
    if (!option || option.comment !== false) {
        bodyStr = replaceConsole(bodyStr);
    }

    return new Function(...args, bodyStr);
}

/**
 * Print Title
 * @param displayName
 * @param printTime
 */
function printTitle(displayName, printTime) {
    const date = new Date();
    if (printTime !== false) {
        colorConsole({
            str: `[${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}] `,
        }, {
            str: displayName,
            color: 'red',
        });
    } else {
        colorConsole({
            str: displayName,
            color: 'red',
        })
    }
}

module.exports = {
    /**
     * Run your function with comment printing and time-usage collection.
     * @param { function } fn
     * @param { {  comment: boolean, showTimeUsage: boolean, time: boolean } } [option]
     * @param { any } [args]
     */
    runTest: function (fn, option, ...args) {
        const displayName = `Knowledge ${fn.name || createRandomText()}`
        if (typeof fn !== 'function') return;
        fn = convertExecutionFunction(fn);
        printTitle(displayName, (option || {}).time);
        const startTime = performance.now();
        fn.apply(this, args);
        const timeUsage = performance.now() - startTime;
        if (!option || option.showTimeUsage !== false) {
            colorConsole({
                str: `Time Usage: `,
                color: 'blue'
            }, {
                str: `${timeUsage.toFixed(5)}ms`,
                color: 'black',
                bgColor: 'greenBG'
            });
        }
    }
}