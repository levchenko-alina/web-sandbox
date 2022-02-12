/**
 * @desc Function define how much coffee you need to stay awake after your night
 * @param events
 * @returns {string|number}
 * @see {@link https://www.codewars.com/kata/57de78848a8b8df8f10005b1}
 */
exports.howMuchCoffee = function howMuchCoffee(events) {
    let coffee = 0;

    for (let count = 0; count < events.length; count += 1) {
        if (events[count] === 'cw' || events[count] === 'cat' || events[count] === 'dog' || events[count] === 'movie') {
            coffee += 1;
        }

        if (events[count] === 'CW' || events[count] === 'CAT' || events[count] === 'DOG' || events[count] === 'MOVIE') {
            coffee += 2;
        }

        if (coffee >= 4) {
            return 'You need extra sleep';
        }
    }

    return coffee;
};
