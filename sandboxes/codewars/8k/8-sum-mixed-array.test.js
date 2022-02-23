const { sumMix } = require('./8-sum-mixed-array');

describe('sum of array', () => {
    it('function return the sum of the array values as if all were number', () => {
        expect.hasAssertions();

        expect(sumMix([9, 3, '7', '3'])).toBe(22);
        expect(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7])).toBe(42);
        expect(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0'])).toBe(41);
    });
});
