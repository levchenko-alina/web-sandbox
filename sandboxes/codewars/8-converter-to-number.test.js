const { numberToString } = require('./8-converter-to-number');

describe('function converting to number from string', () => {
    it('function can transform a number into a string', () => {
        expect.hasAssertions();

        expect(numberToString(67)).toBe('67');
        expect(numberToString(5)).toBe('5');
        expect(numberToString(100)).toBe('100');
    });
});
