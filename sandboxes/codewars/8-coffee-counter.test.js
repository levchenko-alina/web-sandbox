const { howMuchCoffee } = require('./8-coffee-counter');

describe('counter for coffee cups', () => {
    it('will count the number of coffee that you need after night', () => {
        expect.hasAssertions();

        expect(howMuchCoffee([])).toBe(0);
        expect(howMuchCoffee(['cw'])).toBe(1);
        expect(howMuchCoffee(['CW'])).toBe(2);
        expect(howMuchCoffee(['cw', 'CAT'])).toBe(3);
        expect(howMuchCoffee(['cw', 'CAT', 'DOG'])).toBe('You need extra sleep');
    });
});
