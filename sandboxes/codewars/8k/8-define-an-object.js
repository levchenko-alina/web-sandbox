/**
 * @desc Filling the information about animal from object
 * @param obj
 * @returns {`This ${string} ${string} has ${*} legs.`}
 * @see {@link https://www.codewars.com/kata/571f1eb77e8954a812000837}
 */
exports.animal = function animal(obj) {
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
};
