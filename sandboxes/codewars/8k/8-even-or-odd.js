/**
 * @desc Function takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers
 * @param number
 * @returns {string}
 * {@link https://www.codewars.com/kata/53da3dbb4a5168369a0000fe}
 */
exports.evenOrOdd = function evenOrOdd(number) {
    return number % 2 ? 'Odd' : 'Even';
};
