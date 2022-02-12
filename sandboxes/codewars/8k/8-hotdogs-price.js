/**
 * @desc Function returns a number that the customer need to pay
 * @param n
 * @returns {number}
 * @see {@link https://www.codewars.com/kata/571edd157e8954bab500032d}
 */
// eslint-disable-next-line consistent-return
exports.saleHotDogs = function saleHotDogs(n) {
    if (n < 5) return n * 100;
    if (n >= 5 && n < 10) return n * 95;
    if (n >= 10) return n * 90;
};
