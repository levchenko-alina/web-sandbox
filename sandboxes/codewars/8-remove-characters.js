/**
 * @desc Function removes first and last characters
 * @param str
 * @returns {*}
 * @see {@link https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0}
 */

exports.removeChar = function removeChar(str) {
    return str.slice(1, -1);
};
