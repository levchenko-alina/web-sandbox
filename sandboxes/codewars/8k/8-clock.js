/**
 * @desc Function returns the time since midnight in milliseconds
 * @param h
 * @param m
 * @param s
 * @returns {number}
 * {@link https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a}
 */
exports.past = function past(h, m, s) {
    return (h * 3600 + m * 60 + s) * 1000;
};
