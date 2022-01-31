const { trueOrFalse } = require('./8-true-false');

describe('test boolean and conditional statements if-else', () => {
    it('mathematics statements if-else', () => {
        expect.hasAssertions();
        const a = 1;
        const b = 2;
        expect(trueOrFalse(a > b)).toBeTruthy();
        expect(trueOrFalse(a !== b)).toBeTruthy();
        expect(trueOrFalse(a < b)).toBeTruthy();
        expect(trueOrFalse(a !== b)).toBeTruthy();
    });
});
