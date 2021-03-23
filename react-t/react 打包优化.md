打包优化的问题解决思路：

代码压缩：UglifyjsWebpackPlugin
代码分组 commonsChunkPlugin, SplitChunksPlugin
网络传输压缩gzip: CompressionWebpackPlugin
抽取css代码：mini-css-extract-plugin
组件动态加载：react-loadable