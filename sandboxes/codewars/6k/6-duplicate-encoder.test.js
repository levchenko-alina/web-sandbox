const { duplicateEncode } = require('./6-duplicate-encoder');

describe('duplicateEncode', () => {
    it('converting a string to a new string with braces', () => {
        expect.hasAssertions();

        expect(duplicateEncode('din')).toBe(')))');
        expect(duplicateEncode('recede')).toBe('))))))');
        expect(duplicateEncode('(( @')).toBe('))))');
    });
});
