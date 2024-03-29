> 一般来说 我们希望 用 eslint 来检测 错误 但是 又想用 prettier 来格式化

"format": "prettier --config webpack/prettier.json --write \"{src,test,script,config}/**/*.{js,ts,tsx,json}\""

eslint 安装
> @typescript-eslint/eslint-plugin
> @typescript-eslint/parser
> eslint

prettier 安装
> eslint-config-prettier
> eslint-plugin-prettier
> prettier

.eslintrc.json

```json
{
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "prettier"
    ],
    "plugins": ["@typescript-eslint", "prettier"],
    "rules": {
        "prettier/prettier": ["error", {
            "tabWidth": 4,
            "printWidth": 220,
            "trailingComma": "es5",
            "bracketSpacing": true,
            "endOfLine": "auto"
        }]
    }
}
```

vscode setting

```json
{
    "editor.formatOnSave": false,
    "eslint.format.enable": false,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true,
        "source.fixAll.stylelint": true
    }
}
```