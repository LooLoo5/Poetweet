module.exports = {
    root: true,
    env: {
        node: true,
        es6: true,
    },
    extends: [
        'plugin:vue/essential',
        '@vue/airbnb',
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        indent: [
            'error',
            4,
        ],
        quotes: [
            'error',
            'single',
            { allowTemplateLiterals: false },
        ],
    },
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2018,
    },
};