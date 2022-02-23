/**
 * @desc practice concat and join
 * @param arr
 * @returns {string}
 * @see {@link https://www.codewars.com/kata/5731861d05d14d6f50000626}
 */
exports.bigToSmall = function bigToSmall(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i += 1) {
        result = result.concat(arr[i]);
    }

    const sortingDesending = result.sort((c1, c2) => {
        if (c1 > c2) {
            return -1;
        }
        return 1;
    });
    return sortingDesending.join('>');
};
