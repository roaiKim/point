### 容器的属性
1. flex-direction: row | row-reverse | column | coiumn | column-reverse  --规定主轴的方向

2. flex-wrap: now-wrap | wrap | wrap-reverse --规定一行放不下，怎么换行

3. flex-flow: <flex-direction> | <flex-wrap> --这个是flex-direction 和 flex-wrap的简写

4. justify-content: flex-start | flex-end | center | space-between | space-around --主轴的对齐方式
   + space-between: 两端对齐，中间间隔相等
   + space-around: 项目的两侧都相等

5. align-item: flex-start | flex-end | center | baseline | stretch --规定了的纵轴的对齐方式

6. align-content: flex-start | flex-end | center | space-between | space-around | stretch --规定了多根轴线的对齐方式。


### 项目的属性
1. order: number --项目的顺序， 默认0 越小越靠前。

2. flex-grow: number <default 0> --规定项目的放大比例，

3. flex-shrink: number <default 1> --规定项目的缩小比例

4. flex-base: length --项目的本来大小

5. flex: <flex-grow> | <flex-shrink> | <flex-base> --上面三个的缩写

6. align-self: 和align-item的属性一致 | auto --规定自己的交叉轴对齐方式