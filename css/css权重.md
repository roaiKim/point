
css的权重问题

!important style ID class/:hover等伪类 tag 

最高的为!important

style为1000

id为100

class/属性选择器为10 (说明: 伪类也是类选择器)

tag(标签)选择器为1(包含伪类)

继承没有权重

相同权重时 按class的书写顺序(这里是指css文件的书写顺序)

权重计算时会把所有的权重相加起来
比如下面的两个选择器上面这个大于下面这个 所以显示yellow
```CSS
/*1   100  1   100    和为202 */
div#div1 div#div2{
    background-color: yellow;
}
/*
1   10    1  10       和为22 */  
div.nav div.nav-ltem{
    background-color: red;
}
```

### 计算权重时
根据规范，计算权重值时，A,B,C,D四组值，从左到右，分组比较，如果A相同，比较B，如果B相同，比较C，如果C相同，比较D，如果D相同，后定义的优先。样式二和样式一的A、B相同，而样式二的C大于样式一，所以，不管D的值如何，样式二权重值都大于样式一。这就是正确的答案
