source-map是一种帮助调试代码的映射文件

```json
{
　　version : 3,
　　file: "out.js",
　　sourceRoot : "",
　　sources: ["foo.js", "bar.js"],
　　names: ["src", "maps", "are", "fun"],
　　mappings: "AAgBC,SAAQ,CAAEA"
}
```

version：Source map的版本，目前为3。
file：转换后的文件名。
sourceRoot：转换前的文件所在的目录。如果与转换前的文件在同一目录，该项为空。
sources：转换前的文件。该项是一个数组，表示可能存在多个文件合并。
names：转换前的所有变量名和属性名。
mappings：记录位置信息的字符串，下文详细介绍。

// http://www.ruanyifeng.com/blog/2013/01/javascript_source_map.html


### eval 模式
不生成新的map文件 而是放到文件的末尾把模块代码放到eval函数当中去执行
没有生成source-map文件 所以只能定位是哪一个文件除了问题

### eval-source-map模式
和eval很像 不过它生成了source-map文件所以可以定位到具体的行和列信息

### cheap-eval-source-map
这个模式和eval-source-map很像 不过没有生成列信息 生成速度来说快一些

### cheap-module-eval-source-map
cheap-module-eval-source-map定位源代码跟我们编写的源代码是一模一样的



#### 生产环境nosources-source-map
能看到错误的位置 虽然提供行列情况 但是看不到源码 保密性高


#### 开发环境用cheap-module-source-map
可以看到行和列 且源码一样


### 规律
eval: eval会将每一个module模块，执行eval，执行后不会生成sourcemap文件

soure-map: source-map会为每一个打包后的模块生成独立的soucemap文件

inline: 不会生成独立的source-map文件 而是将map文件以dataURL的形式去插入

cheap: 会生成独立的map文件 但是会忽略原始代码中的列信息

module: 可以获取打包前的代码