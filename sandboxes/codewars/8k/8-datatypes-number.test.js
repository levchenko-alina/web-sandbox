const { equal1, equal2, equal3, equal4, equal5 } = require('./8-datatypes-number');

describe('test setting the appropriate value for the two variables in every functions', () => {
    it('datatype number', () => {
        expect.hasAssertions();

        expect(equal1()).toBe(100);
        expect(equal2()).toBe(100);
        expect(equal3()).toBe(100);
        expect(equal4()).toBe(100);
        expect(equal5()).toBe(100);
    });
});
