/**
 * @desc returns the list that the values increment by 1 for each index up to the maximum value
 * @param numbers
 * @returns {*[]}
 * @see {@link https://www.codewars.com/kata/56b29582461215098d00000f}
 */
exports.pipeFix = function pipeFix(numbers) {
    const maxNum = Math.max(...numbers);
    const minNum = Math.min(...numbers);

    const result = [];

    for (let i = minNum; i <= maxNum; i += 1) {
        result.push(i);
    }

    return result;
};
