### 将字符串变成大写 Uppercase<StringType>
> type T = Uppercase<"abcd">; // T => "ABCD"

### 将字符串变成小写 Lowercase<StringType>
> type T = Lowercase<"ABCD">; // T => "abcd"

### 将字符串首字母变成大写 Capitalize<StringType>
> type T = Capitalize<"abcd">; // T => "Abcd"


### 将字符串首字母变成小写 Uncapitalize<StringType>
> type T = Uncapitalize<"ABCD">; // T => "aBCD"

### 类型推论 inter
> `type Pages = "page/a" | "page/b" | "page/c" | "page/d" | "page/e" | "page/f";`  
> ```type Addition<P extends string> = P extends `${infer R}` ? `api/${R}` : never;```
> `type ApiAdditons = Addition<Pages>;`