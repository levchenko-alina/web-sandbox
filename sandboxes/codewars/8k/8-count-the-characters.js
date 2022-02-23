/**
 * @desc Function will count the number of times that character appears in the string
 * @param string
 * @param char
 * @returns {number}
 * @see {@link https://www.codewars.com/kata/577ad961ae2807182f000c29}
 */
exports.countChar = function countChar(string, char) {
    return (string.match(new RegExp(char, 'ig')) || []).length;
};
