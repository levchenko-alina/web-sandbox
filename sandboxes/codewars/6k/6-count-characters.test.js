const { count } = require('./6-count-characters');

describe('count', () => {
    it('count all the occurring characters in a string', () => {
        expect.hasAssertions();

        expect(count('aba')).toStrictEqual({ a: 2, b: 1 });
        expect(count('')).toStrictEqual({});
    });
});
