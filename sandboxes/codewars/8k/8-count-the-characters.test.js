const { countChar } = require('./8-count-the-characters');

describe('counter for characters', () => {
    it('will count the number of times that character appears in the string', () => {
        expect.hasAssertions();

        expect(countChar('fizzbuzz', 'z')).toBe(4);
        expect(countChar('Fancy fifth fly aloof', 'f')).toBe(5);
    });
});
