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

