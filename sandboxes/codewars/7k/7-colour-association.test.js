const { colourAssociation } = require('./7-colour-association');

describe('colour finder', () => {
    it('function you will write needs to return the colour as key and association as its value', () => {
        expect.hasAssertions();

        expect(
            colourAssociation([
                ['white', 'goodness'],
                ['blue', 'tranquility'],
            ]),
        ).toStrictEqual([{ white: 'goodness' }, { blue: 'tranquility' }]);
        expect(
            colourAssociation([
                ['red', 'energy'],
                ['yellow', 'creativity'],
                ['brown', 'friendly'],
                ['green', 'growth'],
            ]),
        ).toStrictEqual([{ red: 'energy' }, { yellow: 'creativity' }, { brown: 'friendly' }, { green: 'growth' }]);
    });
});
