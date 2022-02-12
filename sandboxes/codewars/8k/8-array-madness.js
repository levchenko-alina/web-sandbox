/**
 * @desc Function returns true if the sum of the squares of each element is a strictly greater than the sum of the cubes
 * @param a
 * @param b
 * @returns {boolean}
 * @see {@link https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1}
 */
exports.arrayMadness = function arrayMadness(a, b) {
    return a.reduce((acc, curV) => acc + curV ** 2, 0) > b.reduce((acc, curV) => acc + curV ** 3, 0);
};
