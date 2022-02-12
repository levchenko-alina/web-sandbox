/**
 * @desc Function return the sum of the array values as if all were numbers
 * @param x
 * @returns {*}
 * @see {@link https://www.codewars.com/kata/57eaeb9578748ff92a000009}
 */
exports.sumMix = function sumMix(x) {
    return x.reduce((acc, curV) => {
        return acc + Number(curV);
    }, 0);
};
