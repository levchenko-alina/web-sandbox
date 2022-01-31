const { boolToWord } = require('./8-boolean-to-string');

describe('boolean to string', () => {
    it('function takes a boolean and return a "Yes" string for true, or a "No" string for false', () => {
        expect.hasAssertions();

        expect(boolToWord(true)).toBe('Yes');
        expect(boolToWord(false)).toBe('No');
    });
});
