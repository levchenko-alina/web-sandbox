/**
 * @desc Removes every second element from the array
 * @param arr
 * @returns {*}
 * @see {@link https://www.codewars.com/kata/5769b3802ae6f8e4890009d2}
 */
exports.removeEveryOther = function removeEveryOther(arr) {
    return arr.filter((array, element) => {
        return element % 2 === 0;
    });
};
