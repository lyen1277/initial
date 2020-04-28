module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ['plugin:vue/essential', '@vue/standard'],
    rules: {
        'no-console': 'off',
        'no-debugger': 'off',
        'generator-star-spacing': 'off',
        eqeqeq: 'off',
        'vue/no-parsing-error': [
            2,
            {
                'x-invalid-end-tag': false
            }
        ],
        'no-undef': 'off',
        camelcase: 'off',
        indent: ['error', 4]
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}
