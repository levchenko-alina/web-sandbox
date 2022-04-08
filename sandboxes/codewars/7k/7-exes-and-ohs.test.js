const { XO } = require('./7-exes-and-ohs');

describe('xo', () => {
    it('checks same amount of elements', () => {
        expect.hasAssertions();

        expect(XO('xo')).toBe(true);
        expect(XO('xxOo')).toBe(true);
        expect(XO('xxxm')).toBe(false);
        expect(XO('Oo')).toBe(false);
    });
});
