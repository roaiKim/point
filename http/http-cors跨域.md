原文: https://blog.csdn.net/java_green_hand0909/article/details/78740765

cors -> Cross-origin resource sharing

它是一种机制 允许浏览器向跨域服务器发送请求

整个cors通讯的过程中 都是浏览器自动完成的 用户不需要参与
如果浏览器发现是跨域请求 会自动添加一些额外的请求头


### 两种类型的请求
    . 简单请求
        1 请求方法是HEAD GET POST之一
        2 请求头不超过以下字段
            .Accept
            .Accept-Language
            .Last-Event-ID
            .Content-Language
            .Content-Type只能是application/x-www-forn-urlencoded, multipart/form-data, text/plain
    
    . 非简单请求
        除去简单请求的都是非简单请求

#### 简单请求
    浏览器发出一个cors请求时 会在请求头信息上新增一个Origin字段 该字段包含协议、域名、端口号
    浏览器可以根据自己的情况返回 Access-Control-Allow-origin等一些字段
    1 Access-Control-Allow-Origin: 该字段表明是否允许跨域
    2 Access-Control-Allow-Credentials: 可选值 表示是否允许发送Cookie 为true则允许
        另一方面需要手动开启AJAX中打开withCredentials为true
    3 Access-Control-Expose-Headers: 指定额外的请求头


#### 非简单请求
    非简单请求会发送一次预请求 查看服务器 查看当前所在的域名是否在服务器的许可名单中 以及可以使用那些http头信息

    1 Access-Control-Allow-Methods: 这个值是服务器支持的所有跨域请求的方法
    2 Access-Control-Allow-Headers: 支持的请求头
    3 Access-Control-Allow-Credentials: 和简单请求的一致
    4 Access-Control-Max-Age: 预请求的最大有效期 单位为秒

#### 浏览器的其他请求
一旦服务器通过了预请求后 以后每次的正常cors请求都会带一个Origin字段
相应的 服务器也会返回一个Access-Control-Allow-Origin字段