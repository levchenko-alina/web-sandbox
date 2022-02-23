const { doubleChar } = require('./8-double-char');

describe('double char', () => {
    it('returns a string in which each character (case-sensitive) is repeated once', () => {
        expect.hasAssertions();

        expect(doubleChar('abcd')).toBe('aabbccdd');
        expect(doubleChar('Adidas')).toBe('AAddiiddaass');
        expect(doubleChar('1337')).toBe('11333377');
        expect(doubleChar('illuminati')).toBe('iilllluummiinnaattii');
        expect(doubleChar('123456')).toBe('112233445566');
    });
});
