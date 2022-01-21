const { helloWorld } = require('./8-hello-world');

describe('helloWorld', () => {
    it('returns "Hello World!"', () => {
        expect.hasAssertions();

        expect(helloWorld()).toBe('Hello World!');
    });
});
