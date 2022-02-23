/**
 * @desc Function returns the result of multiplying the values together in order
 * @param x
 * @returns {*}
 * @see {@link https://www.codewars.com/kata/57f780909f7e8e3183000078}
 */
exports.grow = function grow(x) {
    return x.reduce((acc, curV) => {
        return acc * curV;
    });
};
