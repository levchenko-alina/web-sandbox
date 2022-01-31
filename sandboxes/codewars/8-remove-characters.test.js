const { removeChar } = require('./8-remove-characters');

describe('removes characters', () => {
    it('function removes first and last characters', () => {
        expect.hasAssertions();

        expect(removeChar('eloquent')).toBe('loquen');
        expect(removeChar('country')).toBe('ountr');
        expect(removeChar('person')).toBe('erso');
        expect(removeChar('place')).toBe('lac');
    });
});
