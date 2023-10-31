
### 华人前端项目基础开发流程
> 框架(React), ui库(antd v4), 小程序框架(Taro v3.4+/React)，小程序ui框架(taro-ui)


##### 运行流程
1. 安装node(v14)
2. 下载项目并安装依赖 `yarn install`
3. 完成安装依赖之后需要在src目录下新建 version.ts 文件（如果有则不用新建）后续打包会自动生成这个文件。
```ts
// version.ts
// 主版本 一般没有颠覆性升级不修改
export const MAJOR = 1;

// 次版本 有新模块添加可修改
export const MINOR = 0;

// 修订版本 bug修复修改
export const PATCH = 0;

// 打包时间
export const BUILD_DATE = 202310191402;

export default "1.0.0";

```
4. 启动 `yarn start` 自动打开浏览器
5. 打包 `yarn build` 会生成 build 文件夹 放到相应的nginx目录下即可

#### 目录文件
1. src/config 文件夹
    1. host.env.ts // 本地开发代理后台地址
    ```ts
        // host.env.ts 示例
        export default {
            "sino-dev": "http://dev.xxx.com",
            "sino-uat": "http://uat.xxx.com",
            "sino-pro": "http://prd.xxx.com"
        };
    ```
    2. tab.js // 用于本地开发 在不注册的情况下看到正在开发的模块（<span style="color: red">该文件非必须文件</span>）
    ```ts
        // src/config/tab.js
        import { app } from "@src/models";
        export const openTabs = () => {
            const OPEN_TABS = ["s/clearance-limit"]; // 这里是个数组字符串格式 "s/path" 其中s/是固定形式 path 为每个模块 下index.modules.ts 的 path 参数 路径
            OPEN_TABS.forEach((key) => {
                app._store.dispatch({
                    type: "global/openTab",
                    payload: {
                        key,
                        component: key
                    }
                });
            });
        };
    ```
2. src/views/XXX/index.modules.ts // 该文件为模块的配置文件
```ts
//
import { viewType, Page, REQUEST_METHOD, getPath, AuthDefProperty } from "@src/config";
export const path = getPath("xxx"); // 这个是模块的路径 需要唯一
const moduleName = "common/carrierUser"; // api 前缀
// ...
export const AuthDef: AuthDefProperty = {
    // 每个模块都需要这个 main 对象
    main: {
        id: path,
        name: "模块名",
        parent: null,
        type: viewType.page,
        path: `/${path}`,
        method: REQUEST_METHOD.POST,
        url: `${moduleName}/advanced-page`,
        sort: 2
    },
    add: {
        id: `${path}/add`,
        name: "新增",
        type: viewType.view,
        method: REQUEST_METHOD.POST,
        url: `${moduleName}/save`
    },
}
    //...
// 高级表格的配置文件
export const columns: CommaListConfigData[] = [];

```
### 小程序项目
> <span style="color: red">请阅读小程序项目下的 README.md 文档</span>