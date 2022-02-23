/**
 * @desc Fixing the bug in unfinished loop
 * @param number
 * @returns {*[]}
 * @see {@link https://www.codewars.com/kata/55c28f7304e3eaebef0000da}
 */
exports.createArray = function createArray(number) {
    const newArray = [];

    for (let counter = 1; counter <= number; counter += 1) {
        newArray.push(counter);
    }

    return newArray;
};
