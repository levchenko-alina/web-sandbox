const { grow } = require('./8-reduce-but-grow');

describe('multiplying the values in array', () => {
    it('function returns the result of multiplying the values together in order', () => {
        expect.hasAssertions();

        expect(grow([1, 2, 3])).toBe(6);
        expect(grow([4, 1, 1, 1, 4])).toBe(16);
        expect(grow([2, 2, 2, 2, 2, 2])).toBe(64);
    });
});
