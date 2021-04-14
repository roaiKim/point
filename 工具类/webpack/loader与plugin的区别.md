
loader是文件加载器 对加载的模块进行处理 比如编译 转化 提取 压缩等 最终转化成我们需要的文件
使webpack拥有解析其他文件的能力
同一个文件可以用多个loader处理 loader的顺序是从右往左的形式加载的
loader的本身是个函数 

而plugin则是插件 让webpack更加灵活 调用webpack的生命周期来实现各种各样的功能


