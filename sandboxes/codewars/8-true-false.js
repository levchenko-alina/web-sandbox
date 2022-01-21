/**
 * @desc Basic data types-Boolean and conditional statements 'if-else'
 * @param val
 * @returns {string}
 * @see {@link https://www.codewars.com/kata/571f832f07363d295d001ba8}
 */
exports.trueOrFalse = function trueOrFalse(val) {
    if (Boolean(val) === false) {
        return 'false';
    }

    return 'true';
};
