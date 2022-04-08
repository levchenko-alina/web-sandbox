/**
 * @desc Removes all of the vowels from the comments
 * @param str
 * @returns {string}
 * @see {@link https://www.codewars.com/kata/52fba66badcd10859f00097e}
 */
exports.disemvowel = function disemvowel(str) {
    const vowels = {
        a: true,
        e: true,
        i: true,
        o: true,
        u: true,
    };

    let result = '';

    for (let i = 0; i < str.length; i += 1) {
        const letter = str[i].toLowerCase();
        if (!vowels[letter]) {
            result += str[i];
        }
    }
    return result;
};
