const { howManyDays } = require('./8-switch-statement');

describe('conditional statement switch helps to find days', () => {
    it('how many days in month', () => {
        expect.hasAssertions();

        expect(howManyDays(1)).toBe(31);
        expect(howManyDays(2)).toBe(28);
        expect(howManyDays(3)).toBe(31);
        expect(howManyDays(4)).toBe(30);
        expect(howManyDays(12)).toBe(31);
    });
});
