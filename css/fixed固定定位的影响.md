1: fixed 失效原因
> 当父元素或祖先元素含有transform，perspective，filter属性时，position: fixed会失效，表现为absolute。定位相对于其父元素或祖先元素；

2：transform属性非none时，元素会创建containing block(容器块) 这个元素快将决定内部定位元素的参照点