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
> 功能模块是把相关的server和controller结合在一起的模块，只是普通的模块

#### 共享模块
> z在Nest中 模块都是单例的只需要把他放入@Module的exports数组中，对于导入了该模块的类来说，都是可用的。

#### 全局模块
> 全局模块在全局中可用 用 @Global() 装饰
这样在其他模块中不需要在@Module的imports数组中手动导入
```ts
@Global()
@Module({
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService],
})
```