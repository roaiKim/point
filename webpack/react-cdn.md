
### 过滤某个包 并通过cdn的方式引用

#### 方法一 通过插件的方式
    这种方式是直接插入html文件中的
```json
{
    plugins: [
        new HtmlWebpackExternalsPlugin({
            externals: [
                {
                    module: "react",
                    entry: "https://unpkg.com/react@17/umd/react.production.min.js",
                    global: "React"
                },
                {
                    module: "react-dom",
                    entry: "https://unpkg.com/react-dom@17/umd/react-dom.production.min.js",
                    global: "ReactDOM"
                }
            ]
        })
    ]
}
```

#### 方法二 通过webpack自带的功能 externals
    1 externasl一定要指定
    2 这种方式动态生成script 在html文件中看不到 在js文件中
```json
{
    externalsType: "script",
    externals: {
        "react": ["https://unpkg.com/react@17/umd/react.production.min.js", "React"],
        "react-dom": ["https://unpkg.com/react-dom@17/umd/react-dom.production.min.js", "ReactDOM"]
    },
}
```
