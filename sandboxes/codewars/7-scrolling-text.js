/**
 * @desc Function takes a string, returns an array with all possible rotations of the given string, in uppercase
 * @param text
 * @returns {*[]}
 * @see {@link https://www.codewars.com/kata/5a995c2aba1bb57f660001fd}
 */
exports.scrollingText = function scrollingText(text) {
    const upperText = text.toUpperCase();
    const result = [];

    for (let i = 0; i < upperText.length; i += 1) {
        result.push(upperText.slice(i) + upperText.substr(0, i));
    }

    return result;
};
