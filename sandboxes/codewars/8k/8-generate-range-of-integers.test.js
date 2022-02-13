const { generateRange } = require('./8-generate-range-of-integers');

describe('generateRange', () => {
    it('takes three arguments and generates a range of integers from min to max, with the step', () => {
        expect.hasAssertions();

        expect(generateRange(2, 10, 2)).toStrictEqual([2, 4, 6, 8, 10]);
        expect(generateRange(1, 10, 3)).toStrictEqual([1, 4, 7, 10]);
    });
});
