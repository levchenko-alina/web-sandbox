/**
 *  * @desc function returns a wolf position from sheep
 *  * @param {*[]}
 *  * @returns {string}
 *  * @see {@link https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15}
 */

// eslint-disable-next-line consistent-return
exports.warnTheSheep = function warnTheSheep(queue) {
    const reversedQueue = queue.reverse();

    if (reversedQueue[0] === 'wolf') {
        return 'Pls go away and stop eating my sheep';
    }

    for (let i = 1; i < reversedQueue.length; i += 1) {
        if (reversedQueue[i] === 'wolf') {
            return `Oi! Sheep number ${i}! You are about to be eaten by a wolf!`;
        }
    }
};
