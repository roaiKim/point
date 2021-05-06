## babel
> babel 是一个js编译工具

## @babel/core
> babel核心模块 只要使用babel 就需要这个

## @babel/cli
> CLI 命令行工具 使用工具编译的话 需要  
```json
// package.json
"scripts": {
    "compiler": "babel src --out-dir lib --watch"
}
```

# 插件
babel 默认并不转换代码 如果需要 则需要配置各种插件  
babel 的 插件分为两类   
+ 语法插件
+ 装换插件


## 插件的使用
> 在项目的根目录中新建 .babelrc 文件
```js
// .babelrc
{
    "plugins": ["@babel/plugin-transform-array-functions"]
}
```
新建 src/index.js 文件
```js
// src/index.js
const fn = () => {
    console.log("a")
}
```
然后运行 `yarn compiler`  
编译后会发现 箭头函数 转换成了普通函数

## 预设
> 如果每一项功能都要配置插件的话 会很麻烦 所以官方环境预设

+ @babel/preset-env   
> 预设包含所以的插件支持最新的js特性  
这个只转换最新的语法 对于 新的 API 则需要 polyfill 来完成


## @babel/polyfill
> babel@v7.4.0 以上 @babel/polyfill已经废弃 需要自己另外安装 `core-js/stable` `regenerator-runtime/runtime`   
@babel/polyfill 默认包含所有的新api 有时候会没有必要(导致项目体积变大) 所以 babel 也提供了支持

@babel/preset-env 提供了一个 useBuiltIns 参数，设置为 usage 时，就只会包含代码需要的polyfill  
需要注意的是 如果参数设置为 usage 需要同时设置 corejs  
这样设置后 只需要安装 @babel/polyfill 而不需要 手动引入@babel/filyfill  
```js
{
    "presets": [
        ["@babel/preset-env", {
            "useBuiltIns": "usage",
            "corejs": 3
        }]
    ]
}
```
core-js@3 新的特性已经加入到core-js@3上 所以现在用
```js
import "core-js/stable"
import "regenerator-runtime/runtime";
```
代替 @babel/polyfill  
> 只需要安装这两个 但是不需要手动引入 `core-js/stable` `regenerator-runtime/runtime`

## @babel/plugin-transform-runtime @babel/runtime
> @babel/plugin-transform-runtime是一个帮助babel注入的工具，需要配合@babel/runtime一起使用  
@babel/plugin-transform-runtime只需要在dev上安装， 而@babel/runtime需要在生产环境上使用

> 作用: babel 将class语法编译成es5时 会创建_createClass帮助函数，如果有多个文件都使用了class语法  
则每一个文件都会创建_createClass帮助函数 这是不必要的 这就需要 @babel/plugin-transform-runtime @babel/runtime 工具  
@babel/plugin-transform-runtime会帮助我们寻找对应的帮助函数， 而对应的函数在@babel/runtime上

@babel/polyfill 引入 没有按需加载 且全局污染  
`"useBuiltIns": "usage"` 解决了按需加载 但是还是有全局污染问题  
下面的做法解决了全局污染问题(需要安装 `@babel/runtime-corejs3`) 并且去掉 `@babel/preset-env` 的相关参数
```js
{   
"plugins": [
    ["@babel/plugin-transform-runtime",
        {
            "corejs": 3
        }
    ]]
}
```

## 顺序
+ 插件在preset前运行
+ 插件的运行顺序从前往后
+ preset的顺序从后往前

