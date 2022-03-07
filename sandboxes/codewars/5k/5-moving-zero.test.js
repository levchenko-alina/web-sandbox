const { moveZeros } = require('./5-moving-zero');

describe('moveZeros', () => {
    it('moves all of the zeros to the end', () => {
        expect.hasAssertions();

        expect(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])).toStrictEqual([1, 2, 1, 1, 3, 1, 0, 0, 0, 0]);
    });
});
