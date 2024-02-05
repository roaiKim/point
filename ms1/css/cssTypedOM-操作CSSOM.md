### CSSOM是什么
> CSS 对象模型 CSS Object Model  
+ CSSOM 是一种web页面上的CSS样式的映射
+ 它和DOM相似 只是它针对的是CSS而不是HTML
+ 浏览器将DOM和CSSOM结合起来渲染页面

### CSSOM的作用
> CSSOM 将样式表中的规则映射到对应的元素上

### Typed OM
> 一种读取css的数值的方法 不同于原生的用js修改cssStyle的方法 Typed OM 将cssom的数值以 map 的形式 存储在 attributeStyleMap 对象中 通过set，get方法设置

#### 好处
1. 是通过 TypedOM 进行操作减少此类的问题
2. 使用方便 特别是含有单位之类的计算 且键名和css保持一致
3. 在性能上有一定的提升(大概30%)
4. 对错误处理会 抛出错误 (如给height设置字符串类型(abc))
5. attributeStyleMap 是 map对象 所以能用map的方法

#### 缺点
+ 不是所有的浏览器都支持(IE & fireFox 不支持)
+ api 较多 
