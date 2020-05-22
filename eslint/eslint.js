
//使用umit的eslint文件
module.exports = {
    extends: [require.resolve('@umijs/fabric/dist/eslint')],
    globals: {
        page: true,
        REACT_APP_ENV: true,
    },
    rules: {
        'no-underscore-dangle': [0],
        'no-param-reassign': [0],
        '@typescript-eslint/no-unused-vars': [1],
        'jsx-a11y/no-autofocus': [1],
    },
};
