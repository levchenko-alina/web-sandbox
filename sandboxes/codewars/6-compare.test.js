const { comp } = require('./6-compare');

describe('comparing arrays', () => {
    it('function checks whether the two arrays have the same elements', () => {
        expect.hasAssertions();

        const a1 = [121, 144, 19, 161, 19, 144, 19, 11];
        const a2 = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];
        expect(comp(a1, a2)).toBe(true);
    });
});
