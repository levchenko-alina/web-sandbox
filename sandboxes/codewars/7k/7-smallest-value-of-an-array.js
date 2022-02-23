/**
 * @desc Function returns the smallest value of an array or the index of that value
 * @param arr
 * @param toReturn
 * @returns {*}
 * @see {@link https://www.codewars.com/kata/544a54fd18b8e06d240005c0}
 */
// eslint-disable-next-line consistent-return
exports.min = function min(arr, toReturn) {
    const minVal = arr.reduce(
        (acc, currentVal, index) => {
            if (currentVal < acc.value) {
                return { value: currentVal, index };
            }

            return acc;
        },
        { value: arr[0], index: 0 },
    );

    if (toReturn === 'value') {
        return minVal.value;
    }
    if (toReturn === 'index') {
        return minVal.index;
    }
};
