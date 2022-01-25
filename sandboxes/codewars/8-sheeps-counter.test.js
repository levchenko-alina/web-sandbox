const { countSheep } = require('./8-sheeps-counter');

describe('sheep counter', () => {
    it('function  return a string with a murmur', () => {
        expect.hasAssertions();

        expect(countSheep(1)).toBe('1 sheep...');
        expect(countSheep(2)).toBe('1 sheep...2 sheep...');
        expect(countSheep(3)).toBe('1 sheep...2 sheep...3 sheep...');
    });
});
