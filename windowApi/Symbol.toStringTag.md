## Symbol.toStringTag 
> 配合 Object.prototype.toString() 方法使用

```js
const obj = {}
Object.defineProperty(obj, Symbol.toStringTag, {
    value: "Module"
})
Module {Symbol(Symbol.toStringTag): "Module"}
Object.prototype.toString.call(obj)
 > "[object Module]"
Object.prototype.toString.call({})
 > "[object Object]"
```