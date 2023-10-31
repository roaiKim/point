
GET 请求 参数是数组时 显示形式  
`/list?priorities[]=Shipout&priorities[]=P1&limit=10&offset=0&pageNo=1`  
如果是Form Data 形式时 显示为  
`/list?keyword=&priorities=Issue&priorities=P1&status=&limit=10&offset=0&pageNo=1`  
如果是对象形式 则会被忽略  
