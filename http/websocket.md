ws 建立在TCP协议之上，是一个应用层的协议
端口也是80和443.
可以发送文本或者二进制
没有同源限制，客户端可以和任意服务器通讯
双通道
建立起来后 相互沟通的消耗很小

```header
GET /chat HTTP/1.1
Host: server.example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==
Sec-WebSocket-Protocol: chat, superchat
Sec-WebSocket-Version: 13
Origin: http://example.com
```

应用场景
即时聊天
多玩家游戏
在线编辑