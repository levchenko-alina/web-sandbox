/**
 * @desc Function return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers
 * @param input
 * @returns {[*,*]|*[]}
 * @see {@link https://www.codewars.com/kata/576bb71bbbcf0951d5000044}
 */
exports.countPositivesSumNegatives = function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0) {
        return [];
    }

    const posSum = input.reduce((acc, curV) => (curV <= 0 ? acc : acc + 1), 0);

    const negSum = input.reduce((acc, curV) => {
        if (curV <= 0) {
            return acc + curV;
        }

        return acc;
    }, 0);

    return [posSum, negSum];
};
