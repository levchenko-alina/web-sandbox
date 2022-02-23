const { stringy } = require('./8-stringy-strings');

describe('stringy', () => {
    it('takes a size and returns a string from numbers', () => {
        expect.hasAssertions();

        expect(stringy(6)).toBe('101010');
        expect(stringy(4)).toBe('1010');
        expect(stringy(12)).toBe('101010101010');
    });
});
