const { saleHotDogs } = require('./8-hotdogs-price');

describe('function returns a number that the customer need to pay', () => {
    it('number means money for hot dogs', () => {
        expect.hasAssertions();

        expect(saleHotDogs(1)).toBe(100);
        expect(saleHotDogs(4)).toBe(400);
        expect(saleHotDogs(5)).toBe(475);
        expect(saleHotDogs(9)).toBe(855);
        expect(saleHotDogs(10)).toBe(900);
    });
});
