/**
 * @desc Function will take the number of petals of each flower and return true if they are in love and false if aren't
 * @param flower1
 * @param flower2
 * @returns {boolean}
 * @see {@link https://www.codewars.com/kata/555086d53eac039a2a000083}
 */
exports.lovefunc = function lovefunc(flower1, flower2) {
    return (flower1 + flower2) % 2 !== 0;
};
