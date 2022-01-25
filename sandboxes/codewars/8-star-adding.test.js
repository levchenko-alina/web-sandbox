const { padIt } = require('./8-star-adding');

describe('function adds stars to string', () => {
    it('first time will add a * to the left side of str, the second time will add a * to the right side', () => {
        expect.hasAssertions();

        expect(padIt('a', 1)).toBe('*a');
        expect(padIt('a', 2)).toBe('*a*');
        expect(padIt('a', 3)).toBe('**a*');
        expect(padIt('a', 4)).toBe('**a**');
        expect(padIt('a', 5)).toBe('***a**');
    });
});
