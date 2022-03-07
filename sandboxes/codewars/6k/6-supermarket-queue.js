/**
 * @desc Function should return an integer, the total time required
 * @param customers
 * @param n
 * @returns {*}
 * @see {@link https://www.codewars.com/kata/57b06f90e298a7b53d000a86}
 */
exports.queueTime = function queueTime(customers, n) {
    const result = [];

    for (let i = 0; i < n; i += 1) result[i] = 0;

    for (let i = 0; i < customers.length; i += 1) {
        result[0] += customers[i];
        result.sort((a, b) => a - b);
    }

    return result[result.length - 1];
};
