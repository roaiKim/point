
### CSP *内容安全策略*

> 内容安全策略(CSP)是一种额外的安全层, 用于检测并削弱某些特定的类型的攻击.  
> 包括预防 跨站脚本攻击, 数据注入，数据盗窃，网站内容污染。  
> csp 一般向后兼容，不支持csp的浏览器会忽略它  
> csp 默认使用同源策略 

### csp 的目标
> csp 的主要的目标是减少XSS攻击
> xss攻击利用了浏览器对于服务器获取的内容的信任
> csp 通过指定有效域从而避免了这种情况

### 使用方式
1. 服务器返回Content-Security-Policy的请求头中
语法:   
`Content-Security-Policy: <policy-directive>; <policy-directive>`
```js
// default-src 是 CSP 指令，多个指令之间用英文分号分割；多个指令值用英文空格分割
Content-Security-Policy: default-src https:\/\/host1.com https://host2.com; frame-src 'none'; object-src 'none'
```

2. 在html中使用<meta>标签
语法:   
`<meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src https://*; child-src 'none';">`

### Content-Security-Policy-Report-Only 
> 表示不执行限制选项，只是记录违反限制的行为。它必须与report-uri选项配合使用。
> 为降低部署成本 csp可以部署为报告模式 这个模式下 csp策略不是强制的 任何违规行为会报告给一个指定的URL地址  
Content-Security-Policy-Report-Only 和 Content-Security-Policy 同时存在时 两个策略均有效 前者产生报告而不是强制性 后者具有强制性

### 通用指令值
*允许任何内容
none不允许任何内容
self允许同源策略
www.other.com 指定特定的值
unsafe-inline 允许加载行内的元素 比如script style 等

### csp指令
+ default-src: 默认加载策略

+ script-src: 对脚本的加载策略

+ style-src: 对样式的加载策略

+ img-src: 对图片的加载策略

+ font-src: 对字体的加载策略

+ frame-src: 针对媒体引入的frame的加载策略

+ report-uri: 提交报告策略 如果请求资源策略不允许时往哪个地址提交信息

+ connect-src: 约束url的加载 比如a标签、fetch、XMLHttpRequest、Websocket等


