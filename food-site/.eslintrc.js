module.exports = {
    parser: '@babel/eslint-parser',
    parserOptions: {
        babelOptions: {
            configFile: './babel.config.json',
        },
    },
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: ['eslint:recommended', 'google'],
    rules: {
        'linebreak-style': 0,
        semi: 'off',
        'require-jsdoc': 'off',
        indent: 'off',
        'eol-last': 'off',
        'quote-props': 'off',
        'spaced-comment': 'off',
        'array-bracket-spacing': 'off',
        'comma-dangle': 'off',
        'no-unused-vars': 'warn',
    },
}