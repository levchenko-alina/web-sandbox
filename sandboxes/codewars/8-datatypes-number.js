/**
 * @desc Setting the appropriate value for the two variables in every functions
 * @type {number}
 * @returns {number}
 * @see {@link https://www.codewars.com/kata/571edd157e8954bab500032d}
 */
const v1 = 50;
const v2 = 100;
const v3 = 150;
const v4 = 200;
const v5 = 2;
const v6 = 250;

exports.equal1 = function equal1() {
    return v1 + v1;
};

exports.equal2 = function equal2() {
    return v4 - v2;
};

exports.equal3 = function equal3() {
    return v1 * v5;
};
exports.equal4 = function equal4() {
    return v4 / v5;
};
exports.equal5 = function equal5() {
    return v6 % v3;
};
