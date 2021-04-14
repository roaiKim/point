关于babel
Babel是一个 JavaScript 编译器，准确说是一个source-to-source编译器，通常称为“ transpiler”。这意味着您向 Babel 提供一些 JavaScript 代码，Babel 修改代码，并返回生成新代码。

babel在编译时候，会把源代码分为两部分来处理：语法syntax、api。

语法syntax比如const、let、模版字符串、扩展运算符等。 api比如Array.includes()等新函数。

@babel/core
babel编译器。被拆分三个模块：@babel/parser、@babel/traverse、@babel/generator。

@babel/parser: 接受源码，进行词法分析、语法分析，生成AST。

@babel/traverse：接受一个AST，并对其遍历，根据preset、plugin进行逻辑处理，进行替换、删除、添加节点。

@babel/generator：接受最终生成的AST，并将其转换为代码字符串，同时此过程也可以创建source map。

babel转码流程：input string -> @babel/parser parser -> AST -> transformer[s] -> AST -> @babel/generator -> output string。


详细流程图见链接。

![r如图](./img/babel-run.jpg)

如果你想很好的了解AST，可以去该网站体验。

AST explorer/https://astexplorer.net/
​
astexplorer.net
@babel/cli
终端cli工具。

@babel/plugin-*
babel插件机制、方便扩展、集成。

@babel/preset-env
预设：预先设定一组插件，方便我们对插件集成配置管理。当前也可以自定义其他预设@babel/babel-preset-*。

@babel/polyfill
它是被用来处理上述说的API部分的：为浏览器不支持的API提供对应的兼容性代码，很明显如果你不提供，如果在不支持的浏览器里面使用了新API，那么你的页面就会挂掉。

@babel-polyfill会带来的一些问题。

1、代码体积大(因为会全部导入，不管你用不用的上)， 全部引入的配置如下。
```json
 {
 "presets": [ // 另外还需要注意presets的加载顺序是倒叙的。
        [
 "@babel/preset-env",
        {
 "useBuiltIns": "entry", // 这里是关键
 "corejs": "core-js@3" // 使用@babel/polyfill做垫片时候我们需要使用哪个版本的corejs
        }
        ]
    ]
}
```

然后你需要在你的项目入口文件中顶部import '@babel/polyfill'。


改善方式之一：按需加载。
```json
 {
    "presets": [
        [
            "@babel/env",
            {
                "targets": {
                    "edge": "17",
                    "firefox": "60",
                    "chrome": "67",
                    "safari": "11.1",
                },
                "useBuiltIns": "usage",
            }
        ]
    ]
}
```
 
这样babel会根据你的目标环境中缺失的功能，只把必须的polyfill加载进来。

2、会造成全局污染，比如引入新的全局对象或者修改现有对象原型(尤其对于一些工具或者库的开发者不便)。 比如对于一些静态方法是直接在全局对象添加比如global.Array。 对于一些实例方法是直接在在对象原型上添加，比如Array.prototype.includes。

从babel V7.4.0版本开始，已经不建议使用该包，建议使用core-js/stable、regenerator-runtime/runtime替代。

@babel/runtime
@babel/runtime是一个底层依赖，是一个生产环境依赖，需要被打包到最终的产物中，它本身会提供的是regenerator-runtime、以及各种helper函数。

我们日常更多的使用到的是@babel/plugin-transform-runtime,这是一个开发环境依赖插件会依赖到@babel/runtime、@babel/runtime-corejs3等。

关于@babel/plugin-transform-runtime我们需要知道两点

1、babel在转码syntax过程中，会加入自己定义的很多babel函数，这些babel函数可能会在每个文件都被重复引用，transform-runtime会把这些重复的helper函数转换成公共的、单独的依赖，节省转码后的文件体积。

2、解决上述中@babel/polyfill会带来的一些问题，transform-runtime以沙盒的方式讲新特性API对应的全局变量转换为core-js、regenerator-runtime的引用。

.babelrc | babel.config.js | babel.config.json
babel配置文件。

附录:

@babel/register
这个模块有时我们写node有些童鞋会使用。通过 require 钩子（hook）将自身绑定到 node 的require模块上，并在运行时进行即时编译。

require("@babel/register");
node 后续运行时所需要 require 进来的扩展名为.es6、.es、.jsx、.mjs和.js的文件将由 Babel 自动转换。