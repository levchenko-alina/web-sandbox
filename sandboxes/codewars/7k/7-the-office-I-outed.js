/**
 * @desc To assess the overall happiness rating of the group
 * @param meet
 * @param boss
 * @returns {string}
 * @see {@link https://www.codewars.com/kata/57ecf6efc7fe13eb070000e1}
 */
exports.outed = function outed(meet, boss) {
    let score = 0;
    let i = 0;

    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const person in meet) {
        i += 1;
        score += person !== boss ? meet[person] : meet[person] * 2;
    }

    return score / i <= 5 ? 'Get Out Now!' : 'Nice Work Champ!';
};
