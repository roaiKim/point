
### controller
> 是用来 接收应用的特定的请求，然后用路由机制来控制不同的请求，通常一个控制器有多个路由

```ts
import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CreateCatDto, UpdateCatDto, ListAllEntities } from './dto';

@Controller('cats')
export class CatsController {
  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(@Query() query: ListAllEntities) {
    return `This action returns all cats (limit: ${query.limit} items)`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
```

#### 路由
> 此外 还有 Get Post Put Delete Header Option等...
```ts
@Controller('cats')
export class CatsController {
  @Get('miao')
  findAll(): string {
    return 'This action returns all cats';
  }
}
```

#### Request
> request 获取参数等之类的  
> @Param(key?: string)  获取路劲上的参数: "api/user/:id" 获取的是id  
> @Body(key?: string)  获取 请求体中的参数  
> @Query(key?: string)  获取get?参数上的  
> @Headers(name?: string)  获取请求头  
```ts
@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Req() request: Request, @Headers(): headers): string {
    return 'This action returns all cats';
  }
}
```

#### 路由通配符
> 可以有 + ? * 及 () 子集
```ts
@Get('ab*cd')
findAll() {
  return 'This route uses a wildcard';
}
```

#### 状态码
> 默认状态码是 200 ,post 是 201   
> 可以通过 @HttpCode() 更改   
> 如果状态码是动态的时 可以通过 @Res() 获取 response 对象 然后直接返回  response.status(403).send("403"); response.status(403).json("403")
```ts
@Post()
@HttpCode(204)
create() {
  return 'This action adds a new cat';
}
```

#### Headers
> 返回的返回头
```ts
@Post()
@Headers("Cache-Control", "none")
create() {
  return 'This action adds a new cat';
}
```

#### 重定向
> 重定向到其他 路由 默认 302 可以改
> 如果 需要动态确定 可以返回 以下格式
```json
{
  "url": "string",
  "statusCode": "number"
}
```
```ts
@Get()
@Redirect('https://nestjs.com', 301)
```

#### Async/await 异步流
> 正常来说 获取值都是异步获取的 可以通过 es7的 async 和 await
```ts
@Get('getuserlist')
async getUserList(@Query() request: UserGetUserRequest): Promise<any> {
    const [list, totalRecord] = await this.userService.getUserList(request);
    return {code: 0, message: "OK",data: {list, totalRecord}};
}
```


### 使用
> 控制器是属于模块的 控制器准备好了 但是 Nest 是不知道的 所以 我们需要在模块中声明
```ts
@Module({
    controllers: [UserController]
})
export class UserModule {}
```