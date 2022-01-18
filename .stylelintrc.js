// use null to turn off a rule

const scssModulesRules = {
    'selector-pseudo-class-no-unknown': [
        true,
        {
            ignorePseudoClasses: ['export', 'import', 'global', 'local', 'external'],
        },
    ],
    'selector-type-no-unknown': [
        true,
        {
            ignoreTypes: ['from'],
        },
    ],
    'property-no-unknown': [
        true,
        {
            ignoreProperties: ['composes', 'compose-with'],
            ignoreSelectors: [':export', /^:import/],
        },
    ],
    'scss/at-rule-no-unknown': [
        true,
        {
            ignoreAtRules: ['value'],
        },
    ],
};

module.exports = {
    extends: ['stylelint-config-standard-scss'],
    files: ['**/*.css', '**/*.sass', '**/*.scss'],
    rules: {
        indentation: 4,
        'string-quotes': 'single',
        'color-function-notation': 'legacy',
        'alpha-value-notation': 'number',
        'scss/dollar-variable-empty-line-before': null,
        'scss/at-extend-no-missing-placeholder': null,
    },
    defaultSeverity: 'warning',
    overrides: [
        {
            files: ['**/*.module.css', '**/*.module.sass', '**/*.module.scss'],
            plugins: ['stylelint-css-modules-no-global-scoped-selector'],
            rules: {
                ...scssModulesRules,
                'css-modules/no-global-scoped-selector': true,
                // UpperCamelCase
                'selector-class-pattern': '^.[a-z][a-zA-Z0-9]+$',
            },
        },
    ],
};
