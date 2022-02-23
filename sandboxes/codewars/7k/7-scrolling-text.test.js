const { scrollingText } = require('./7-scrolling-text');

describe('scrolling text', () => {
    it('function takes a string, returns an array with all possible rotations of the given string, in uppercase', () => {
        expect.hasAssertions();

        expect(scrollingText('abc')).toStrictEqual(['ABC', 'BCA', 'CAB']);
        expect(scrollingText('codewars')).toStrictEqual([
            'CODEWARS',
            'ODEWARSC',
            'DEWARSCO',
            'EWARSCOD',
            'WARSCODE',
            'ARSCODEW',
            'RSCODEWA',
            'SCODEWAR',
        ]);
    });
});
