{
    "editor.rulers": [80, 150],//标尺
    "editor.tabSize": 4, //tab缩进空格数
    "editor.insertSpaces": true,  //按 "Tab" 时插入空格。
    
    // eslint相关配置
    
    // eslint保存自动格式化（3种方式任选一种即可）
    "eslint.autoFixOnSave": false, // 1、已废弃，被第二种方式替代
    "editor.codeActionsOnSave": {
        "source.fixAll": true,
        "source.fixAll.eslint": true,  //2、配合"source.fixAll": true,使用
        "source.organizeImports": true //属性能够在保存时，自动调整 import 语句相关顺序，能够让你的 import 语句按照字母顺序进行排列
    },
    "editor.formatOnSave": true,  
    "editor.formatOnPaste": true, // #每次粘贴的时候自动格式化
    "eslint.format.enable": true,// 3、保存时自动格式化，配合 "editor.formatOnSave": true 使用
   
    //老版本的eslint插件默认只对js文件进行校验,在2.0.4版本之后,不需要再额外配置eslint.validate了
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "typescript",
        "typescriptreact"
    ],
    "eslint.alwaysShowStatus": true , //状态栏中显示eslint，方便查看eslint服务是否正常运行
    "eslint.quiet": true,  //不显示eslint校验的警告信息
    
    
     
    // 在使用搜索功能时，将这些文件夹/文件排除在外
    "search.exclude": {
        "**/node_modules": true,
        "**/bower_components": true,
        "**/target": true,
        "**/logs": true,
    }, 
    // 这些文件将不会显示在工作空间中
    "files.exclude": {
        "**/.git": true,
        "**/.svn": true,
        "**/.hg": true,
        "**/CVS": true,
        "**/.DS_Store": true,
        "**/*.js": {
            "when": "$(basename).ts" //ts编译后生成的js文件将不会显示在工作空中
        },
        "**/node_modules": false
    }, 
    
    
    "prettier.eslintIntegration": false, //prettier按照eslint进行格式化
    "files.trimTrailingWhitespace": true, // 启用后，将在保存文件时剪裁尾随空格。
    "files.insertFinalNewline": true,
    "javascript.format.insertSpaceBeforeFunctionParenthesis": true, //#让函数(名)和后面的括号之间加个空格
    "javascript.implicitProjectConfig.experimentalDecorators": true,
    "javascript.validate.enable": false,
    "typescript.validate.enable": true,
    "[json]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[javascriptreact]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[typescript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[typescriptreact]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
}
