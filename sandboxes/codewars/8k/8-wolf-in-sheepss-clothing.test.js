const { warnTheSheep } = require('./8-wolf-in-sheeps-clothing');

describe('wolf in sheeps clothing', () => {
    it('function returns a wolf position from sheep', () => {
        expect.hasAssertions();

        expect(warnTheSheep(['sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'wolf', 'sheep', 'sheep'])).toBe(
            'Oi! Sheep number 2! You are about to be eaten by a wolf!',
        );
        expect(warnTheSheep(['sheep', 'wolf', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep'])).toBe(
            'Oi! Sheep number 5! You are about to be eaten by a wolf!',
        );
        expect(warnTheSheep(['sheep', 'wolf', 'sheep'])).toBe(
            'Oi! Sheep number 1! You are about to be eaten by a wolf!',
        );
    });
});
