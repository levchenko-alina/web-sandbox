/**
 * @desc Traverse arr by using for loop
 * @param arr
 * @returns {[[],[]]}
 * @see {@link https://www.codewars.com/kata/5721a78c283129e416000999}
 */
exports.pickIt = function pickIt(arr) {
    const odd = [];
    const even = [];

    for (let i = 0; i < arr.length; i += 1) {
        const item = arr[i];
        if (item % 2 === 0) {
            even.push(item);
        } else {
            odd.push(item);
        }
    }

    return [odd, even];
};
