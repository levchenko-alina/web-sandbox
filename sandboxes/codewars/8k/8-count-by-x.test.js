const { countBy } = require('./8-count-by-x');

describe('multiples number', () => {
    it('function returns an array of the first (n) multiples of (x)', () => {
        expect.hasAssertions();

        expect(countBy(1, 10)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        expect(countBy(2, 5)).toStrictEqual([2, 4, 6, 8, 10]);
    });
});
