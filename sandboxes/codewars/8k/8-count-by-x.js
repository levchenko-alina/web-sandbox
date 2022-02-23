/**
 * @desc function returns an array of the first (n) multiples of (x)
 * @param x
 * @param n
 * @returns {*[]}
 * @see {@link https://www.codewars.com/kata/5513795bd3fafb56c200049e}
 */
exports.countBy = function countBy(x, n) {
    const z = [];
    for (let i = x; i <= x * n; i += x) {
        z.push(i);
    }
    return z;
};
