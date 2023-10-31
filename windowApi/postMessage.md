## postMessage 
> HTML5中提供了在网页文档之间相互接收与发送信息的功能。使用这个功能，只要获取到网页所在窗口对象的实例，不仅仅同源(域+端口号)的web网页之间可以互相通信，甚至可以实现跨域通信。

> otherWindow.postMessage(message, targetOrigin, [transfer]);  
otherWindow：其他窗口的一个引用，比如 iframe 的 contentWindow 属性、执行 window.open 返回的窗口对象等。  
message：将要发送到其他 window 的数据，它将会被结构化克隆算法序列化。  
targetOrigin：通过窗口的 origin 属性来指定哪些窗口能接收到消息事件，其值可以是字符串 "*"（表示无限制）或者一个 URI。  
transfer（可选）：是一串和 message 同时传递的 Transferable 对象。这些对象的所有权将被转移给消息的接收方，而发送一方将不再保有所有权。  

### Tab之间通讯
+ 父窗体创建跨域iframe并发送信息
```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>跨域POST消息发送</title>
        <script type="text/JavaScript">    
            // sendPost 通过postMessage实现跨域通信将表单信息发送到 moweide.gitcafe.io上,
            // 并取得返回的数据    
            function sendPost() {        
                // 获取id为otherPage的iframe窗口对象        
                var iframeWin = document.getElementById("otherPage").contentWindow;        
                // 向该窗口发送消息        
                iframeWin.postMessage(document.getElementById("message").value, 
                    'http://moweide.gitcafe.io');    
            }    
            // 监听跨域请求的返回    
            window.addEventListener("message", function(event) {        
                console.log(event, event.data);    
            }, false);
        </script>
    </head>
    <body> 
        <textarea id="message"></textarea> 
        <input type="button" value="发送" onclick="sendPost()"> 
        <iframe
            src="http://moweide.gitcafe.io/other-domain.html" id="otherPage"
            style="display:none"></iframe>
    </body>

</html>
```

+ 子窗体接收信息并处理
```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>POST Handler</title>
        <script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
        <script type="text/JavaScript">
            window.addEventListener("message", function( event ) {
                // 监听父窗口发送过来的数据向服务器发送post请求
                var data = event.data;
                $.ajax({
                    // 注意这里的url只是一个示例.实际练习的时候你需要自己想办法提供一个后台接口
                    type: 'POST', 
                    url: 'http://moweide.gitcafe.io/getData',
                    data: "info=" + data,
                    dataType: "json"
                }).done(function(res){        
                    //将请求成功返回的数据通过postMessage发送给父窗口        
                    window.parent.postMessage(res, "*");    
                }).fail(function(res){        
                    //将请求失败返回的数据通过postMessage发送给父窗口        
                    window.parent.postMessage(res, "*");    
                });
            }, false);
        </script>
    </head>

    <body></body>
</html>
```

## 应用场景
+ webworker
+ serviceworker