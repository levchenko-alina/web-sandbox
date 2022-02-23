const { sum } = require('./7-calculate-the-sum');

describe('sum of array', () => {
    it('function return the sum of the values in array', () => {
        expect.hasAssertions();

        const test1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const test2 = [71, -548, 12.3, 83, -47, -1.7, -892, 58, 31415, 2718, -38];

        expect(sum(test1)).toBe(55);
        expect(sum(test2)).toBe(32830.6);
    });
});
