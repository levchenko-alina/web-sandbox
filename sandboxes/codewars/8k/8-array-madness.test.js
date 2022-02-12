const { arrayMadness } = require('./8-array-madness');

describe('find sum of the squares and sum of the cubes', () => {
    it('function returns true if the sum of the squares of each element is a strictly greater than the sum of the cubes', () => {
        expect.hasAssertions();

        expect(arrayMadness([4, 5, 6], [1, 2, 3])).toBe(true);
        expect(arrayMadness([5, 6, 7], [4, 5, 6])).toBe(false);
        expect(arrayMadness([4, 5, 6], [3, 4, 5])).toBe(false);
        expect(arrayMadness([1, 2, 3, 4, 5], [2, 2, 2, 2, 2, 2, 1, 1, 1])).toBe(true);
    });
});
