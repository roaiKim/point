### IntersectionObserver
> 这个可以观察元素是否进入窗口可见部分

```js
const ob = new IntersectionObserver(callback, option);

ob.observe(document.getElementById('example')); // 开始观察

ob.unobserve(document.getElementById('example')) // 停止观察某个元素

ob.discounnect() // 关闭观察器
```

> 如果有多个元素 需要多次调用这个方法   
```js
ob.observe(document.getElementById('example1'));
ob.observe(document.getElementById('example2'));
```

### callback 构造器第一个参数
> 进入或者离开都会触发callback 所以会触发两次
如下懒加载的例子
```js

function query(selector) {
  return Array.from(document.querySelectorAll(selector));
}

var observer = new IntersectionObserver(
  function(changes) {
    changes.forEach(function(change) {
      var container = change.target;
      var content = container.querySelector('template').content;
      container.appendChild(content);
      observer.unobserve(container); // 已经赋值的需要停止观察
    });
  }
);

query('.lazy-loaded').forEach(function (item) {
  observer.observe(item);
});
```

#### callback参数是一个数组 如下
```json
{
  time: 3893.92,
  rootBounds: ClientRect {
    bottom: 920,
    height: 1024,
    left: 0,
    right: 1024,
    top: 0,
    width: 920
  },
  boundingClientRect: ClientRect {
     // ...
  },
  intersectionRect: ClientRect {
    // ...
  },
  intersectionRatio: 0.54,
  target: element
}
```

time：可见性发生变化的时间，是一个高精度时间戳，单位为毫秒  
target：被观察的目标元素，是一个 DOM 节点对象  
rootBounds：根元素的矩形区域的信息，getBoundingClientRect()方法的返回值，如果没有根元素（即直接相对于视口滚动），则返回null  
boundingClientRect：目标元素的矩形区域的信息  
intersectionRect：目标元素与视口（或根元素）的交叉区域的信息  
intersectionRatio：目标元素的可见比例，即intersectionRect占boundingClientRect的比例，完全可见时为1，完全不可见时小于等于0  


### option 构造器第二个参数

这个参数规定了什么时候触发 callback / 如 离窗口还有20px或者已经完全可见

```js
new IntersectionObserver(
  entries => {/* ... */}, 
  {
    threshold: [0, 0.25, 0.5, 0.75, 1], // 规定什么时候触发
    root: element, // 父元素
  }
);
```


### 注意点
> 这个api是异步的 不随着目标元素滚动的同步触发 采用 requestIdleCallback 优先级很低