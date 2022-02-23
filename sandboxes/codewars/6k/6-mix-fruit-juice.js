/**
 * @desc Function will receive an array of strings, each with the name of a fruit
 * @param arr
 * @returns {number}
 * @see {@link https://www.codewars.com/kata/5905871c00881d0e85000015}
 */
exports.mixFruit = function mixFruit(arr) {
    function getPrice(fruit) {
        switch (fruit.toLowerCase()) {
            case 'banana':
            case 'orange':
            case 'apple':
            case 'lemon':
            case 'grapes':
                return 5;
            case 'avocado':
            case 'strawberry':
            case 'mango':
                return 7;
            default:
                return 9;
        }
    }

    return Math.round(
        arr
            .map((fruit) => getPrice(fruit))
            .reduce((acc, val) => {
                return acc + val;
            }, 0) / arr.length,
    );
};
