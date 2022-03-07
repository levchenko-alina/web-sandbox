/**
 * @desc It returns both the minimum and maximum number of the given list/array
 * @param arr
 * @returns {[*,*]}
 * @see {@link https://www.codewars.com/kata/559590633066759614000063}
 */
exports.minMax = function minMax(arr) {
    const result = arr.sort((a, b) => a - b);
    return [result[0], result[result.length - 1]];
};
