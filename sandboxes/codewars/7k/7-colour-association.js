/**
 * @desc colour finder
 * @param array
 * @returns {*}
 * @see {@link https://www.codewars.com/kata/56d6b7e43e8186c228000637}
 */
exports.colourAssociation = function colourAssociation(array) {
    return array.map((arr) => {
        return { [arr[0]]: arr[1] };
    });
};
