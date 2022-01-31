/**
 * @desc Function takes an array of numbers and returns the sum of the numbers
 * @param numbers
 * @returns {number}
 * {@link https://www.codewars.com/kata/53dc54212259ed3d4f00071c}
 */
exports.sum = function sum(numbers) {
    if (numbers.length === 0) {
        return 0;
    }

    let result = 0;
    let i = 0;

    do {
        result += numbers[i];
        i += 1;
    } while (i < numbers.length);

    return result;
};
