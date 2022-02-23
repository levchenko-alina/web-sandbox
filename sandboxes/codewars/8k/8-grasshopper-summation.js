/**
 * @desc function finds the summation of every number from 1 to num
 * @param num
 * @returns {number}
 * @see {@link https://www.codewars.com/kata/55d24f55d7dd296eb9000030}
 */
exports.summation = function summation(num) {
    let result = 0;

    for (let i = 1; i <= num; i += 1) {
        result += i;
    }

    return result;
};
