### inter 推断
推断为某个属性
```ts
    export type ToLowerCamelCase<P extends string> = P extends `${infer A}-${infer B}` ? `${A}${Capitalize<B>}` : never;
```