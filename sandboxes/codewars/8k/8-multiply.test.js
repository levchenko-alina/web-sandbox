const { multiply } = require('./8-multiply');

describe('test multiply function', () => {
    it('multiplies numbers', () => {
        expect.hasAssertions();

        expect(multiply(1, 1)).toBe(1);
        expect(multiply(2, 1)).toBe(2);
        expect(multiply(2, 2)).toBe(4);
        expect(multiply(3, 5)).toBe(15);
    });
});
