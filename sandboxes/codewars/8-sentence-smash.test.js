const { smash } = require('./8-sentence-smash');

describe('sentence smash', () => {
    it('function takes an array of words and smashes them together', () => {
        expect.hasAssertions();

        expect(smash(['hello', 'world'])).toBe('hello world');
        expect(smash(['hello', 'amazing', 'world'])).toBe('hello amazing world');
    });
});
