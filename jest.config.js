module.exports = {
    roots: ['<rootDir>/sandboxes'],
    preset: 'ts-jest/presets/js-with-ts',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testEnvironment: 'node',
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: 'coverage',
};
