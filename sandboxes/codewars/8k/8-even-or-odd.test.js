const { evenOrOdd } = require('./8-even-or-odd');

describe('function returns "Even" for even numbers or "Odd" for odd numbers', () => {
    it('takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers', () => {
        expect.hasAssertions();

        expect(evenOrOdd(2)).toBe('Even');
        expect(evenOrOdd(7)).toBe('Odd');
        expect(evenOrOdd(-42)).toBe('Even');
        expect(evenOrOdd(-7)).toBe('Odd');
    });
});
