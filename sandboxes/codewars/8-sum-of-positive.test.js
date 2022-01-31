const { positiveSum } = require('./8-sum-of-positive');

describe('gets sum of all the positives numbers', () => {
    it('function get an array of numbers, return the sum of all of the positives ones', () => {
        expect.hasAssertions();

        expect(positiveSum([1, 2, 3, 4, 5])).toBe(15);
        expect(positiveSum([1, -2, 3, 4, 5])).toBe(13);
        expect(positiveSum([])).toBe(0);
        expect(positiveSum([-1, -2, -3, -4, -5])).toBe(0);
    });
});
