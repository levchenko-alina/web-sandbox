const { addLength } = require('./8-add-length');

describe('define the length', () => {
    it('function takes a String and returns an array with the length of each word added to each element', () => {
        expect.hasAssertions();

        expect(addLength('apple ban')).toStrictEqual(['apple 5', 'ban 3']);
        expect(addLength('you will win')).toStrictEqual(['you 3', 'will 4', 'win 3']);
    });
});
