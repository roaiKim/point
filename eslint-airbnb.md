## stardand换成eslint 并 安装 stylelint 检查
---
## 1️⃣ 卸载 stardand 
> ###### ⚠️ 如果以前没有用到这个 则忽略 如果用到了其他的规则校验 步骤相似
##### 查看自己npm全局安装的包 
```bash
npm list -g --depth=0
```
or yarn 
```bash
yarn global list --depth=0
```
##### 卸载自己的 standard 
```bash
npm uninstall standard -g
```
or yarn 
```bash
yarn global remove standard
```

##### 再次查看自己的全局安装的包

```bash
npm list -g --depth=0
```
or yarn 
```bash
yarn global list --depth=0
```
> !注意 用 npm 全局安装的包无法通过 yarn 查看 反之亦然
---
## 2️⃣ 安装eslint(使用第三方规则airbnb)
官网 https://eslint.org/docs/user-guide/getting-started
#### 2️⃣.1️⃣ js项目以下步骤
##### 2️⃣.1️⃣.1️⃣安装 babel-eslint eslint-config-airbnb eslint eslint-plugin-jsx-a11y eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks
```bash
npm install eslint-config-airbnb eslint babel-eslint eslint-plugin-jsx-a11y eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks -D
```
or yarn 
```bash
yarn add eslint-config-airbnb eslint babel-eslint eslint-plugin-jsx-a11y eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks -D
```
##### 2️⃣.1️⃣.2️⃣ 在根项目中新建.eslintrc.json 设置自己的规则 可以如下
```javascript {.line-numbers}
{
    "parser": "babel-eslint",
    "extends": ["airbnb"]
}
```
#### 2️⃣.2️⃣ 如果你的项目中用到了 typescript 则以下步骤
##### 2️⃣.2️⃣.1️⃣安装 eslint-config-airbnb-typescript eslint eslint-plugin-jsx-a11y eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/eslint-plugin @typescript-eslint/parser
```bash
npm install eslint-config-airbnb-typescrip @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-plugin-jsx-a11y eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks -D
```
or yarn 
```bash
yarn add eslint-config-airbnb-typescrip @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-plugin-jsx-a11y eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks -D
```
##### 2️⃣.2️⃣.2️⃣ 在根项目中新建.eslintrc.json 设置自己的规则 可以如下
```javascript {.line-numbers}
{
    "parser": '@typescript-eslint/parser',
    "extends": ["airbnb-typescrip"]
}
```
> 其中 具体的 rule 字段请看
> https://eslint.org/docs/rules/
> https://github.com/airbnb/javascript
---
## 3️⃣ stylelint检查
官网 https://stylelint.io/
#### 安装stylelint 和 stylelint-config-standard
```bash
npm install stylelint stylelint-config-standard -D
```
or
```bash
yarn add stylelint stylelint-config-standard -D
```
##### 新建.stylelintrc.json
```json
{
    "extends": "stylelint-config-standard"
}
```
> 具体规则
> https://stylelint.io/user-guide/rules/list
> https://github.com/stylelint/stylelint-config-standard#readme
---
## 4️⃣ 安装vscode插件 ESLint ➕stylelint
##### 安装 ESLint ➕stylelint 插件 
> 在setting中添加自动保存选项(注意不要被覆盖)

```javascript
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.stylelint": true
}
```
---
## 5️⃣ 项目新增脚本(根据不同的项目自己决定)
```javascript
"scripts": {
    "eslint": "./node_modules/.bin/eslint src",
    "eslint:fix": "./node_modules/.bin/eslint --fix src"
}
```
> eslint 用于查询项目中不符合eslint的文件

> eslint:fix 会帮你修复能自动修复的（一般是格式问题）

> 还可以配合 pre-commit 实现提交预检查 （可以自行实现）
---
## 6️⃣ 注释规则
> ---用于有些情况下不希望检查工具检查某一处规则 （偶尔有特殊情况）
#### 6️⃣.1️⃣ eslint
> /* eslint-disable \*/ -- 不检测整个文件
> // eslint-disable-next-line  //--不检测下一行
> /\* eslint-disable-next-line */  //--不检测下一行
> // eslint-disable-line // 不检测当前行

#### 6️⃣.2️⃣ stylelint
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
