
//自行配置文件
const koot = {
    printWidth: 80,
    singleQuote: true,
    tabWidth: 4,
    jsxBracketSameLine: false,
    useTabs: false,
    semi: true,
    bracketSpacing: true,
    eslintIntegration: false  //强制使用eslint进行校验（与vscode配置功效一样）
};

//结合umi的prettier进行使用
const fabric = require('@umijs/fabric');

module.exports = {
    ...fabric.prettier,
    ...koot
};
