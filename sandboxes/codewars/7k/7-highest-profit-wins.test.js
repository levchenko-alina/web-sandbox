const { minMax } = require('./7-highest-profit-wins');

describe('minMax', () => {
    it('returns both the minimum and maximum number of the given list/array', () => {
        expect.hasAssertions();

        expect(minMax([1, 2, 3, 4, 5])).toStrictEqual([1, 5]);
        expect(minMax([2334454, 5])).toStrictEqual([5, 2334454]);
    });
});
