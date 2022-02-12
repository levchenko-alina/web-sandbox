/**
 * @desc Function checks whether the two arrays have the same elements
 * @param array1
 * @param array2
 * @returns {boolean}
 * @see {@link https://www.codewars.com/kata/550498447451fbbd7600041c}
 */
exports.comp = function comp(array1, array2) {
    if (array1 === null || array2 === null) return false;

    return (
        array1
            .map((el) => el * el)
            .sort()
            .join('') === array2.sort().join('')
    );
};
