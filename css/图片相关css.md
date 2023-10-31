object-fit // 规定可替换元素的内容如何适应宽高
    fill 填充
    contain 对象将缩放 保持它的长宽比 如果不足于 则填充
    cover 保持长宽比同时填充到整个内容框 多余的部分将丢弃
    none 保持对象的原有尺寸
    scale-down 取contain和none中最小的一个


图片下方有空隙

1 vertical-align: middle | top | bottom;
2 display: block;
3 设置父元素的 line-height: 0; | font-size: 0;


### vertical-align
这个是行内元素的对齐方式