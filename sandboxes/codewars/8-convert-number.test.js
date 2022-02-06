const { digitize } = require('./8-convert-number');

describe('number converter', () => {
    it('function return the digits of this number within an array in reverse order', () => {
        expect.hasAssertions();

        expect(digitize(35231)).toStrictEqual([1, 3, 2, 5, 3]);
        expect(digitize(0)).toStrictEqual([0]);
    });
});
