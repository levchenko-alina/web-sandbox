/**
 * @desc Function get the frequency of each and every character
 * @param message
 * @returns {*}
 * @see {@link https://www.codewars.com/kata/548ef5b7f33a646ea50000b2}
 */
exports.charFreq = function charFreq(message) {
    return message.split('').reduce((acc, curV) => {
        acc[curV] = (acc[curV] || 0) + 1;

        return acc;
    }, {});
};
