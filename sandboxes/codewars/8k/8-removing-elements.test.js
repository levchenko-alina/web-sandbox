const { removeEveryOther } = require('./8-removing-elements');

describe('removeEveryOther', () => {
    it('removes every second element from the array', () => {
        expect.hasAssertions();

        expect(removeEveryOther(['Hello', 'Goodbye', 'Hello Again'])).toStrictEqual(['Hello', 'Hello Again']);
        expect(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toStrictEqual([1, 3, 5, 7, 9]);
        expect(removeEveryOther([[1, 2]])).toStrictEqual([[1, 2]]);
        expect(removeEveryOther([['Goodbye'], { Great: 'Job' }])).toStrictEqual([['Goodbye']]);
    });
});
