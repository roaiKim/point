## 前端单页面解决刷新 404 问题
在 localhost中 加入 try_files $uri $uri/ /index.html; 如下
```conf
location / {
    root   E:/nginx-dir/client-nest-ro-21426;
    index  index.html index.htm;
    try_files $uri $uri/ /index.html;
}
```

### 在windows 下 路径要改成反斜杆
```conf
location / {
    root   E:/nginx-dir/client-nest-ro-21426;
}
```