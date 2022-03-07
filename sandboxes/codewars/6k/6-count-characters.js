/**
 * @desc To count all the occurring characters in a string
 * @param string
 * @returns {{}}
 * @see {@link https://www.codewars.com/kata/52efefcbcdf57161d4000091}
 */
exports.count = function count(string) {
    const arr = string.split('');
    const frequencies = {};

    // eslint-disable-next-line no-return-assign
    arr.forEach((c) => (frequencies[c] = frequencies[c] + 1 || 1));

    return frequencies;
};
