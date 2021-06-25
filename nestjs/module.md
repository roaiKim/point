### module
> module 是用@Module装饰的类 是一个模块的集合

@Module() 装饰器接收一个描述对象:

```ts
@Module({
    providers: [AService], // 由Nest注入器实例化的提供者(serveice), 并且可以在整个模块中共享
    controllers: [AController], // 控制器路由
    imports: [BModule], // 导入模块的列表 本模块中需要用到的其他模块的列表
    exports: [AService], // 本模块提供个其他模块中可以使用的提供者集合
})
export class AModule {}
```

#### 功能模块
> 