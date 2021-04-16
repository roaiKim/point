
### 根据 Key 来排序对象
```ts
    static sortByKey<T>(array: T[], key: KeysOfType<T, number>, order: "asc" | "desc"): T[] {
        return array.sort((a, b) => {
            const isLarger = a[key] > b[key];
            return isLarger ? (order === "asc" ? 1 : -1) : order === "asc" ? -1 : 1;
        });
    }
```