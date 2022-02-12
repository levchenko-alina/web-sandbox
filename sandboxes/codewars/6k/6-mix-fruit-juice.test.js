const { mixFruit } = require('./6-mix-fruit-juice');

describe('create a juice and find price', () => {
    it('function will receive an array of strings, each with the name of a fruit', () => {
        expect.hasAssertions();

        expect(mixFruit(['banana', 'mango', 'avocado'])).toBe(6);
        expect(mixFruit(['melon', 'Mango', 'kiwi'])).toBe(8);
        expect(mixFruit(['watermelon', 'cherry', 'avocado'])).toBe(8);
        expect(mixFruit(['watermelon', 'Orange', 'grapes'])).toBe(6);
    });
});
