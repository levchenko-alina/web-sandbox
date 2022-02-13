/**
 * @desc Function takes three arguments and generates a range of integers from min to max, with the step
 * @param min
 * @param max
 * @param step
 * @returns {*[]}
 * @see {@link https://www.codewars.com/kata/55eca815d0d20962e1000106}
 */
exports.generateRange = function generateRange(min, max, step) {
    const result = [];
    for (let i = min; i <= max; i += step) {
        result.push(i);
    }
    return result;
};
