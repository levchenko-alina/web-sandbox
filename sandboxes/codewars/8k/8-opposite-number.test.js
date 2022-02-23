const { opposite } = require('./8-opposite-number');

describe('creating an opposite number', () => {
    it('function returns an opposite number', () => {
        expect.hasAssertions();

        expect(opposite(1)).toBe(-1);
        expect(opposite(5)).toBe(-5);
        expect(opposite(15)).toBe(-15);
    });
});
