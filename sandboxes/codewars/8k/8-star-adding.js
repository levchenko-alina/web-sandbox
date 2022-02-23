/**
 * @desc Adding a star to string
 * @param str
 * @param n
 * @returns {string|*}
 * @see {@link https://www.codewars.com/kata/57216d4bcdd71175d6000560}
 */
exports.padIt = function padIt(str, n) {
    if (n === 0) {
        return str;
    }

    let newStr = str;
    const star = '*';
    let i = 0;

    while (i < n) {
        newStr = i % 2 === 0 ? star + newStr : newStr + star;
        i += 1;
    }

    return newStr;
};
