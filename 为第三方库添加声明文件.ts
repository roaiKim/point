先在某个文件夹下新增 xxx.d.ts 文件

declare module 'crypto-js' {
  export const AES: {
    decrypt: (txt: string, key: string) => any
    encrypt: (txt: string, key: string) => any
  };
  export const enc: {
    Utf8: string
  };
}

再把这个文件夹的路径添加到

tsconfig.json中的

"include": ["src"]
