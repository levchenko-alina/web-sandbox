const { charFreq } = require('./8-character-frequency');

describe('define the frequency of each and every character', () => {
    it('function get the frequency of each and every character', () => {
        expect.hasAssertions();

        expect(charFreq('I like cats')).toStrictEqual({
            a: 1,
            ' ': 2,
            c: 1,
            e: 1,
            I: 1,
            l: 1,
            k: 1,
            i: 1,
            s: 1,
            t: 1,
        });
    });
});
