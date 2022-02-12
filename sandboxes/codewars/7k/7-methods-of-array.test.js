const { isolateIt } = require('./7-methods-of-array');

describe('using method map', () => {
    it('function adds symbol between strings', () => {
        expect.hasAssertions();

        expect(isolateIt(['abcd', 'efgh'])).toStrictEqual(['ab|cd', 'ef|gh']);
        expect(isolateIt(['abcde', 'fghij'])).toStrictEqual(['ab|de', 'fg|ij']);
        expect(isolateIt(['1234', '56789'])).toStrictEqual(['12|34', '56|89']);
    });
});
