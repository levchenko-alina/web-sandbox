/**
 * @desc function adds symbol between strings
 * @param arr
 * @returns {*}
 * @see {@link https://www.codewars.com/kata/572fdeb4380bb703fc00002c}
 */
exports.isolateIt = function isolateIt(arr) {
    return arr.map((x) => {
        if (x.length % 2 === 0) {
            return `${x.slice(0, x.length / 2)}|${x.slice(x.length / 2)}`;
        }

        return `${x.slice(0, x.length / 2)}|${x.slice(x.length / 2 + 1)}`;
    });
};
