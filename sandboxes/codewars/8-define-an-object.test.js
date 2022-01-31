const { animal } = require('./8-define-an-object');

describe('define an object', () => {
    it('filling the information about animal from object', () => {
        expect.hasAssertions();
        expect(animal({ name: 'dog', legs: 4, color: 'white' })).toBe('This white dog has 4 legs.');
        expect(animal({ name: 'cock', legs: 2, color: 'red' })).toBe('This red cock has 2 legs.');
        expect(animal({ name: 'rabbit', legs: 4, color: 'gray' })).toBe('This gray rabbit has 4 legs.');
    });
});
