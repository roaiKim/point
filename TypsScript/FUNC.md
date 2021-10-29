
## Function

##### (Function Type Expressions 函数类型表达式)

``` ts
function greeter1(fn: (a: string) => void) {
    //
}

type Greenter = (a: string) => void;

function greenter(fn: Greenter) {
    //
}
```

##### (Call Signatures 调用签名)

```ts
type Desc = {
    descript: string;
    (n: number): boolean;
}
```

##### (Construct Signatures 构造函数)

```ts
type SomeContructor = {
    new (s: string): SomeObject;
}
function fn(ctor: SomeContructor) {
    return new ctor("h")
}
```

##### function 的一些 建议
> 如果可能的话，使用类型参数本身而不是约束它 // 如下 1比2好
```ts
function firstElement1<Type>(arr: Type[]) {
  return arr[0];
}
 
function firstElement2<Type extends any[]>(arr: Type) {
  return arr[0];
}
```
> 总是使用尽可能少的类型参数
> 如果一个类型参数只出现在一个位置，请强烈重新考虑是否实际需要它
> 在为回调编写函数类型时，永远不要编写可选参数，除非您想在不传递该参数的情况下调用该函数

#### (Function Overload 函数重载)