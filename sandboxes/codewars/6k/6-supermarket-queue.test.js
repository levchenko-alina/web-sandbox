const { queueTime } = require('./6-supermarket-queue');

describe('queueTime', () => {
    it('should return an integer, the total time required', () => {
        expect.hasAssertions();

        expect(queueTime([], 1)).toBe(0);
        expect(queueTime([1, 2, 3, 4], 1)).toBe(10);
        expect(queueTime([2, 2, 3, 3, 4, 4], 2)).toBe(9);
        expect(queueTime([1, 2, 3, 4, 5], 100)).toBe(5);
    });
});
