const { sum } = require('./8-sum-arrays');

describe('sum of arrays', () => {
    it('function takes an array of numbers and returns the sum of the numbers', () => {
        expect.hasAssertions();
        expect(sum([])).toBe(0);
        expect(sum([1, 5.2, 4, 0, -1])).toBe(9.2);
        expect(sum([-2.398])).toBe(-2.398);
    });
});
