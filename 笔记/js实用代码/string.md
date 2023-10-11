
### 模板字符串替换
```js
const obj = {
    name: "罗森",
    age: 27
}
const str = "我叫{{name}}，我今年{{age}}岁。"
str.replace(/\{\{(.*?)\}\}/g, (node, key) => {
    console.log("nodekey", node, key)
    return obj[key]
})
```