// eslint-disable-next-line camelcase
const { find_average } = require('./8-calculate-average');

describe('find_average', () => {
    it('calculates the average of the numbers in a given list', () => {
        expect.hasAssertions();

        expect(find_average([1, 1, 1])).toBe(1);
        expect(find_average([1, 2, 3])).toBe(2);
        expect(find_average([1, 2, 3, 4])).toBe(2.5);
    });
});
