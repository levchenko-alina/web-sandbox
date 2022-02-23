/**
 * @desc Function takes a size and returns a string from numbers
 * @param size
 * @returns {string}
 * @see {@link https://www.codewars.com/kata/563b74ddd19a3ad462000054}
 */
exports.stringy = function stringy(size) {
    let result = '';

    for (let i = 1; i <= size; i += 1) {
        result += i % 2;
    }
    return result;
};
