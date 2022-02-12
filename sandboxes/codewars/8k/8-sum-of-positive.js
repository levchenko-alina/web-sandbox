/**
 * @desc Function returns the sum of all the positives numbers
 * @param arr
 * @returns {number}
 * @see {@link https://www.codewars.com/kata/5715eaedb436cf5606000381}
 */
exports.positiveSum = function positiveSum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }

    return sum;
};
