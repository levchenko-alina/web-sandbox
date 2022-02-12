const { joinStrings } = require('./8-string-addition');

describe('join two strings together', () => {
    it('function join two strings together', () => {
        expect.hasAssertions();

        expect(joinStrings('string1', 'string2')).toBe('string1 string2');
        expect(joinStrings('testing', 'testing')).toBe('testing testing');
        expect(joinStrings(134, 234)).toBe('134 234');
    });
});
