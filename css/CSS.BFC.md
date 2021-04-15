BFC（块格式化上下文：Block formatting context）



### 什么是 BFC
> BFC 是格式化上下文，是一个独立的渲染区域或者是一个独立的容器

### 形成 BFC 的条件
   + 浮动元素 float 除了none之外的值
   + 定位元素 absolute fixed
   + display 值为 inline-block, table-cell, table-caption
   + overflow 除了 visible 以外的值 如: hidden, auto, scroll

### BFC 特性
   + 内部的 Box 会在垂直方向上一个接一个发放置
   + 垂直方向的距离由margin决定
   + BFC区域不会与float元素区域重叠
   + 计算BFC高度时 浮动元素也参与其中
   + BFC 就是页面上的一个独立容器, 容器里面的子元素不会影响外面元素

### 解决了
   + 父元素高度塌陷：父元素上加上display: flow-root，让父元素形成一个BFC可以包裹住子元素
   + 外边距折叠：父元素上加上overflow: hidden
   + 自适应多栏布局：给兄弟元素中没有float: left的另一个元素加上overflow: auto