const { countPositivesSumNegatives } = require('./8-count-positives-sum-negatives');

describe('count of positives and sum of negatives', () => {
    it('function return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers', () => {
        expect.hasAssertions();

        expect(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])).toStrictEqual([
            10, -65,
        ]);
    });
});
