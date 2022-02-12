/**
 * @desc Metachronal rhythm wave in string
 * @param str
 * @returns {*}
 * @see {@link https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/}
 */
exports.wave = function wave(str) {
    return str
        .split('')
        .map((el, i, ar) => {
            const a = ar.slice();

            a[i] = a[i].toUpperCase();
            return a.join('');
        })
        .filter((el, i) => el[i] !== ' ');
};
