/**
 * @desc Function return the sum of the values in array
 * @param array
 * @returns {*}
 * @see {@link https://www.codewars.com/kata/532b4057484b0e58e8000766}
 */
exports.sum = function sum(array) {
    return array.reduce((acc, curV) => {
        return acc + curV;
    });
};
