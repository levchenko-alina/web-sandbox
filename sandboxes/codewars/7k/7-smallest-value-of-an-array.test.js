const { min } = require('./7-smallest-value-of-an-array');

describe('find and return smallest value of an array', () => {
    it('function returns the smallest value of an array or the index of that value', () => {
        expect.hasAssertions();

        expect(min([1, 2, 3, 4, 5], 'value')).toBe(1);
        expect(min([1, 2, 3, 4, 5], 'index')).toBe(0);
    });
});
