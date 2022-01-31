/**
 * @desc it returns a string in which each character (case-sensitive) is repeated once
 * @param str
 * @returns {string}
 * @see {@link https://www.codewars.com/kata/56b1f01c247c01db92000076}
 */
exports.doubleChar = function doubleChar(str) {
    let s = '';

    for (let i = 0; i < str.length; i += 1) {
        s += str[i] + str[i];
    }
    return s;
};
