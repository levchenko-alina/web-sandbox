const { pickIt } = require('./8-traverse-arr');

describe('traverse arr by using for loop', () => {
    it('if element is odd number, push it to array odd, if it is a even number, push it to array even', () => {
        expect.hasAssertions();

        expect(pickIt([1, 2])).toStrictEqual([[1], [2]]);
        expect(pickIt([1, 2, 3])).toStrictEqual([[1, 3], [2]]);
        expect(pickIt([3, 2, 1])).toStrictEqual([[3, 1], [2]]);
        expect(pickIt([10, 20, 30])).toStrictEqual([[], [10, 20, 30]]);
        expect(pickIt([11, 21, 31])).toStrictEqual([[11, 21, 31], []]);
    });
});
