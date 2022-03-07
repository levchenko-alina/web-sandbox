/**
 * @desc Moves all of the zeros to the end of string
 * @param arr
 * @returns {*}
 * @see {@link https://www.codewars.com/kata/52597aa56021e91c93000cb0}
 */
exports.moveZeros = function moveZeros(arr) {
    return arr.reverse().reduce((acc, curV) => {
        if (curV === 0) {
            acc.push(curV);
        } else {
            acc.unshift(curV);
        }

        return acc;
    }, []);
};
