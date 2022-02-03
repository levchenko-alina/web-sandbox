const { wave } = require('./6-mexican-wave');

describe('gets metachronal rhythm wave in string', () => {
    it('function turns a string into a Mexican wave', () => {
        expect.hasAssertions();

        expect(wave('hello')).toStrictEqual(['Hello', 'hEllo', 'heLlo', 'helLo', 'hellO']);
        expect(wave('codewars')).toStrictEqual([
            'Codewars',
            'cOdewars',
            'coDewars',
            'codEwars',
            'codeWars',
            'codewArs',
            'codewaRs',
            'codewarS',
        ]);
        expect(wave(' gap ')).toStrictEqual([' Gap ', ' gAp ', ' gaP ']);
    });
});
