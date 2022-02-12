const { summation } = require('./8-grasshopper-summation');

describe('summation of numbers', () => {
    it('function finds the summation of every number from 1 to num', () => {
        expect.hasAssertions();

        expect(summation(1)).toBe(1);
        expect(summation(8)).toBe(36);
    });
});
