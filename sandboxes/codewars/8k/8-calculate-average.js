/**
 * @desc Function calculates the average of the numbers in a given list
 * @param array
 * @returns {number}
 * {@link https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/}
 */

// eslint-disable-next-line camelcase
exports.find_average = function find_average(array) {
    if (array.length === 0) {
        return 0;
    }
    return array.reduce((a, b) => a + b, 0) / array.length;
};
