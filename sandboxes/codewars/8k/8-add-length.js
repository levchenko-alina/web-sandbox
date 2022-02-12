/**
 * @desc function takes a String and returns an array with the length of each word added to each element
 * @param str
 * @returns {*}
 * @see {@link https://www.codewars.com/kata/559d2284b5bb6799e9000047}
 */
exports.addLength = function addLength(str) {
    return str.split(' ').map((word) => {
        return `${word} ${word.length}`;
    });
};
