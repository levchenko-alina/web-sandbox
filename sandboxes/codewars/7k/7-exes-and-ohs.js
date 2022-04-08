/**
 * @desc checks same amount of elements
 * @param str
 * @returns {boolean}
 * @constructor
 * {@link https://www.codewars.com/kata/55908aad6620c066bc00002a/}
 */
exports.XO = function XO(str) {
    // eslint-disable-next-line camelcase
    const str_lover_case = str.toLowerCase();

    const x = str_lover_case.split('x').length;
    const o = str_lover_case.split('o').length;

    return x === o;
};
