module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['airbnb-base'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 13,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    rules: {
        'import/prefer-default-export': 'off',
        semi: ['error', 'always'],
        indent: ['error', 4],
        'no-unused-vars': 'off',
    },
};
