const { pipeFix } = require('./8-lario-and-muigi-pipe-problem');

describe('lario and Muigi Pipe Problem', () => {
    it('returns the list that the values increment by 1 for each index up to the maximum value', () => {
        expect.hasAssertions();

        expect(pipeFix([1, 2, 3, 5, 6, 8, 9])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        expect(pipeFix([-1, 4])).toStrictEqual([-1, 0, 1, 2, 3, 4]);
        expect(pipeFix([6, 9])).toStrictEqual([6, 7, 8, 9]);
    });
});
