/**
 * @desc Function return the digits of this number within an array in reverse order
 * @param n
 * @returns {number[]}
 * @see {@link https://www.codewars.com/kata/5583090cbe83f4fd8c000051}
 */
exports.digitize = function digitize(n) {
    const arr = `${n}`.split('');
    return arr.map(Number).reverse();
};
