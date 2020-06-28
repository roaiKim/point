## stardand换成eslint 并 安装 stylelint 检查
---
## 1️⃣ 卸载 stardand 😡
##### 查看自己npm全局安装的包 😉
```bash
npm list -g --depth=0
```
or yarn 
```bash
yarn global list --depth=0
```
##### 卸载自己的 standard 😎
```bash
npm uninstall standard -g
```
or yarn 
```bash
yarn global remove standard
```

##### 再次查看自己的全局安装的包 🤔

```bash
npm list -g --depth=0
```
or yarn 
```bash
yarn global list --depth=0
```
> !注意 用 npm 全局安装的包无法通过 yarn 查看 反之亦然
---
## 2️⃣ eslint检查 👹
官网 https://eslint.org/docs/user-guide/getting-started
#### 2️⃣.1️⃣ 方法 ㊀ 🎃
##### 2️⃣.1️⃣.1️⃣安装eslint 和 babel-eslint 😼
> // 由于eslint的本身解析器不支持es6及以后的一些语法 所以我们得自定义解析器
```bash
npm install eslint babel-eslint -D
```
or yarn 
```bash
yarn add eslint babel-eslint -D
```
##### 2️⃣.1️⃣.2️⃣ 在根项目中新建.eslintrc.json 设置自己的规则 可以如下 🐶
```javascript {.line-numbers}
{
    "parser": "babel-eslint",
    "env": {
        "node": true,
        "es6": true,
        "browser": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/prop-types": "off",
        "react/no-typos": "error",
        "no-console": "off",
        "no-prototype-builtins": "off",
        "semi": ["error", "never"],
        "indent": [ "error", 2 ],
        "quotes": ["error", "single"],
        "block-spacing": "error",
        "space-before-blocks": "error",
        "object-curly-spacing": ["error", "always"],
        "no-duplicate-imports": "error",
        "no-var": "error",
        "require-await": "error",
        "computed-property-spacing": "error",
        "lines-between-class-members": "error",
        "key-spacing": "error",
        "no-nested-ternary": "error",
        "no-multiple-empty-lines": ["error", { "max": 1, "maxBOF": 1 }],
        "space-before-function-paren": "error",
        "arrow-spacing": "error",
        "rest-spread-spacing": "error",
        "no-unneeded-ternary": "error",
        "eqeqeq": "error",
        "space-infix-ops": "error",
        "switch-colon-spacing": "error",
        "no-multi-spaces": "error",
        "array-bracket-spacing": "error",
        "comma-spacing": "error",
        "space-unary-ops": "error",
        "eol-last": "error",
        "lines-around-comment": ["error", {"beforeLineComment": true}]
    }
}
```
#### 2️⃣.2️⃣ 方法 ㊁ 😍🦋
##### 2️⃣.2️⃣.1️⃣ 可以下载第三方库的集成 如 eslint-config-ro / eslint-config-stardand 👀🍁
> stardand 对于有些语法不够好 而且很多格式没有校验 
> 比如 用到了的定义了的变量如果没用到不会提示
> class 成员变量方法希望空一行
```bash
npm install eslint eslint-config-ro -D
```
or yarn 
```bash
yarn add eslint eslint-config-ro -D
```
##### 2️⃣.2️⃣.2️⃣ 在根项目中新建.eslintrc.json 并继承于第三方库 🍓
```json
{
    "extends": ["ro"],
    "ignorePatterns": ["build", "server", "/*.js"]
}
```
> ignorePatterns字段为忽略文件
> 其中 具体的 rule 字段请看  https://eslint.org/docs/rules/
---
## 3️⃣ stylelint检查 🚀
官网 https://stylelint.io/
#### 安装stylelint 和 stylelint-config-standard 😈
```bash
npm install stylelint stylelint-config-standard -D
```
or
```bash
yarn add stylelint stylelint-config-standard -D
```
##### 新建.stylelintrc.json 🤧
```json
{
    "extends": "stylelint-config-standard"
}
```
> 具体规则 https://stylelint.io/user-guide/rules/list
---
## 4️⃣ 安装vscode插件 ESLint ➕stylelint 😻
> 在setting中添加自动保存选项(注意不要被覆盖)

```javascript
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.stylelint": true
}
```
---
## 5️⃣ 注释规则 🙀
> ---用于有些情况下不希望检查工具检查某一处规则
####  5️⃣.1️⃣ eslint 😳
> /* eslint-disable \*/ -- 不检测整个文件
> // eslint-disable-next-line  //--不检测下一行
> /\* eslint-disable-next-line */  //--不检测下一行
> // eslint-disable-line // 不检测当前行

####  5️⃣.2️⃣ stylelint 😩
> 全局注释 /* stylelint-disable */ 整个文件都都不会检测

> 可以用块级注释位于 /* stylelint-disable */ /* stylelint-enable */之间的规则
```scss
/* stylelint-disable */
@mixin form-boder {
  border: 1px solid #c5c5c5;
  border-radius: 4px;
  overflow: hidden;
}
/* stylelint-enable */
```
> 注释某一种规则 /* stylelint-disable rule-name */

> 注释某一行中的某一种规则 /* stylelint-disable-line rule-name */

> 注释某一行的规则 /* stylelint-disable-line */

> 注释下一行的规则 /* stylelint-disable-next-line */

> 更多规则 https://stylelint.io/user-guide/ignore-code
---
## 6️⃣ eslint-typescript 👻
> 如果你的项目用typescript构建的 也可以用eslint来检查你的项目
#### 6️⃣.1️⃣ 方法 ㊀ 😭
##### 6️⃣.1️⃣.1️⃣ 安装 eslint及相关的依赖 👣
```bash
npm install eslint eslint-config-ro-ts -D
```
or yarn
```bash
yarn add eslint eslint-config-ro-ts -D
```
##### 6️⃣.1️⃣.2️⃣ 新建 .eslintrc.json ☂️
```json
{
    "extends": "ro-ts"
}
```

#### 6️⃣.2️⃣ 方法 ㊁ 🦊
##### 6️⃣.2️⃣.1️⃣ 安装 eslint 及第三方类库 如 eslint-config-ro-ts 🐹
```bash
npm install eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser -D
```
or yarn 
```bash
yarn add eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser -D
```
##### 6️⃣.2️⃣.2️⃣ 在根项目中新建.eslintrc.json 定义自己的规则 可以如下 🙊
```json {.line-numbers}
{
  "parser": "@typescript-eslint/parser",
  "extends": [
      "eslint:recommended",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended"
  ],
  "plugins": [
    "@typescript-eslint"
  ],
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {"jsx": true}
  },
  "rules": {
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-member-accessibility": ["error", {"accessibility": "no-public"}],
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-use-before-define": ["error", "nofunc"],
      "no-console": ["error", {"allow": ["info", "warn", "error"]}],
      "no-useless-computed-key": ["error"],
      "no-useless-rename": ["error"],
      "object-shorthand": "error",
      "prefer-const": ["error"],
      "require-yield": "off",
      "no-prototype-builtins": "off",
      "semi": ["error", "never"],
      "indent": [ "error", 2 ],
      "quotes": ["error", "single"],
      "block-spacing": "error",
      "space-before-blocks": "error",
      "object-curly-spacing": ["error", "always"],
      "no-duplicate-imports": "error",
      "no-var": "error",
      "require-await": "error",
      "computed-property-spacing": "error",
      "lines-between-class-members": "error",
      "key-spacing": "error",
      "no-nested-ternary": "error",
      "no-multiple-empty-lines": ["error", { "max": 1, "maxBOF": 1 }],
      "space-before-function-paren": "error",
      "arrow-spacing": "error",
      "rest-spread-spacing": "error",
      "no-unneeded-ternary": "error",
      "eqeqeq": "error",
      "space-infix-ops": "error",
      "switch-colon-spacing": "error",
      "no-multi-spaces": "error",
      "array-bracket-spacing": "error",
      "comma-spacing": "error",
      "space-unary-ops": "error",
      "eol-last": "error",
      "lines-around-comment": ["error", {"beforeLineComment": true}]
  }
}
```
---
##  7️⃣ 项目新增脚本 🐻🐼
```javascript
"scripts": {
    "eslint": "./node_modules/.bin/eslint src",
    "eslint:fix": "./node_modules/.bin/eslint --fix src"
}
```
> eslint 用于查询项目中不符合eslint的文件

> eslint:fix 会帮你修复能自动修复的

> 还可以配合 pre-commit 实现提交预检查

---
### 🤡 遇到的坑 🙈
##### js项目的eslint问题 🐸
> ❶ 由于eslint的默认解析器不支持新语法(如class的属性) 所以需要用别的解析器(AST)
> 𝟐 所以官法推荐 babel-eslint
> ⓷ 然而 最新版的 babel-eslint@11.0.0-beta.2 需要提供babel的设置文件(如 .babelrc.json)
> ④ 所以 有些项目没有(一般都在webpack集成) 就无法解析 导致无法使用
> 𝟝 而且最新版还是beta版本 
> ⁶ 解决思路 1: 提供bebel设置文件 2: 降级到@10版本 ✅

### 🤡 npm发布 🐹
##### 先取消自己的npm镜像源 发布到npm上后再重新设置镜像
```bash
npm config delete registry
```
```bash
npm config get registry
```
```bash
npm login
```
```bash
npm adduser
```
```bash
npm publish
```
```bash
npm set registry https://npm.zhonganonline.com
```

