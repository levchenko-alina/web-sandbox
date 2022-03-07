/**
 * @desc To convert a string to a new string with braces
 * @param word
 * @returns {string}
 * @see {@link https://www.codewars.com/kata/54b42f9314d9229fd6000d9c}
 */
exports.duplicateEncode = function duplicateEncode(word) {
    const arrWord = word.toLowerCase().split('');

    // eslint-disable-next-line no-return-assign
    const lettersCounter = arrWord.reduce((acc, ltr) => (acc[ltr] = (acc[ltr] || 0) + 1), []);
    return arrWord.map((char) => (lettersCounter[char] === 1 ? '(' : ')')).join('');
};
