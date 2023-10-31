
有时候 我们用ts写的 但是有的项目不用ts   
需要变成 js 然后继续写 所以不能直接编译成es5等之类的代码  
所以 可以直接去掉类型  
然后结构不变  
可以用以下命令  
// package.json  
```json
{
    "pure": "tsc --declaration false --target esnext --sourceMap false --outDir pure --jsx Preserve --useDefineForClassFields true -p ./tsconfig.json",
}
```