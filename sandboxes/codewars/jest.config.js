module.exports = {
    roots: ['<rootDir>'],
    preset: 'ts-jest/presets/js-with-ts',
    testEnvironment: 'node',
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: 'coverage',
};
