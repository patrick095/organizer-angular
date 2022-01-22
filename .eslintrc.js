module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['airbnb-base', 'airbnb-typescript/base'],
    parserOptions: {
        project: './tsconfig.eslint.json',
        ecmaVersion: 13,
        sourceType: 'module'
    },
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    rules: {
        'import/prefer-default-export': 'off',
        semi: ['error', 'always'],
        indent: 'off',
        '@typescript-eslint/indent': ['error', 4],
        'no-unused-vars': 'off',
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'off',
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        'class-methods-use-this': 'off',
        'max-len': 'off',
        'lines-between-class-members': 'off',
        '@typescript-eslint/lines-between-class-members': 'off',
        'comma-dangle': 'off',
        '@typescript-eslint/comma-dangle': 'off',
        'object-curly-newline': 'off'
    }
};
