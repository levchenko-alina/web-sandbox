const { lovefunc } = require('./8-opposites-attract');

describe('flowers has an even number of petals and the other has an odd number of petals it means they are in love', () => {
    it('function will take the number of petals of each flower and return true if they are in love and false if arent', () => {
        expect.hasAssertions();

        expect(lovefunc(1, 4)).toBe(true);
        expect(lovefunc(2, 2)).toBe(false);
        expect(lovefunc(0, 1)).toBe(true);
        expect(lovefunc(0, 0)).toBe(false);
    });
});
