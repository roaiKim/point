
```js
// 窗口激活状态监听
let vEvent = 'visibilitychange';
if (document.webkitHidden != undefined) {
    vEvent = 'webkitvisibilitychange';
}

function visibilityChanged() {
    if (document.hidden || document.webkitHidden) {
        document.title = '客官，别走啊~'
        console.log("Web page is hidden.")
    } else {
        document.title = '客官，你又回来了呢~'
        console.log("Web page is visible.")
    }
}

document.addEventListener(vEvent, visibilityChanged, false);
```
作者：前端小师妹
链接：https://zhuanlan.zhihu.com/p/341021975
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

