/**
 * @desc Function return a string with a murmur
 * @param num
 * @returns {string}
 * {@link https://www.codewars.com/kata/53dc54212259ed3d4f00071c}
 */
exports.countSheep = function countSheep(num) {
    let result = '';

    for (let i = 1; i <= num; i += 1) {
        result += `${i} sheep...`;
    }

    return result;
};
