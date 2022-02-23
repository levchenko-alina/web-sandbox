const { bigToSmall } = require('./8-concat-and-join');

describe('practice concat and join', () => {
    it('function connects the elements into a string', () => {
        expect.hasAssertions();

        expect(
            bigToSmall([
                [1, 2],
                [3, 4],
                [5, 6],
            ]),
        ).toBe('6>5>4>3>2>1');
        expect(bigToSmall([[1, 1], [1], [1, 1]])).toBe('1>1>1>1>1');
    });
});
