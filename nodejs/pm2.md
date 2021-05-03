## pm2
> pm2 是一个进程管理工具 可以用来管理你的nodejs进程 查看node进程状态 支持性能监控 进程守护 负载均衡等
+ 内建负载均衡（使用 Node cluster 集群模块）
+ 后台运行
+ 0 秒停机重载，我理解大概意思是维护升级的时候不需要停机.
+ 具有 Ubuntu 和 CentOS 的启动脚本
+ 停止不稳定的进程（避免无限循环）
+ 控制台检测
+ 提供 HTTP API
+ 远程控制和实时的接口 API ( Nodejs 模块,允许和 PM2 进程管理器交互 )

### 安装
> 推荐 npm 安装 yarn 安装的话 pm2 命令提示找不到
```bash
npm install -g pm2
```
-----------------
### pm2-web 前端监控

----------
### 应用 json 文件启动
(ecosystem.config.js 配置也一样，在启动目录中运行pm2 init 会生成 ecosystem.config.js 文件)  
以下是json文件启动  
如果改变了文件 需要重新 delete 再 restart  
更多配置 https://pm2.keymetrics.io/docs/usage/application-declaration/#attributes-available
```json
{
    "apps": [
        {
            "name": "3000",
            "script": "./service-nest-ro-427-3000/main.js",
            "error_file": "./logs/3000/error_3000.log",
            "out_file": "./logs/3000/out_3000.log",
            "log_date_format": "YYYY-MM-DD HH:mm:ss Z",
            "watch": true,                              // 是否监听文件变动然后重启
            "ignore_watch": [                           // 不用监听的文件
                "node_modules",
                "logs"
            ],
            "exec_mode": "cluster_mode",                // 应用启动模式，支持fork和cluster模式
            "instances": 4,                             // 应用启动实例个数，仅在cluster模式有效 默认为fork；或者 max
            "max_memory_restart": "512M",               // 最大内存限制数，超出自动重启
            "max_restarts": 30,                         // 最大异常重启次数，即小于min_uptime运行时间重启次数；
            "autorestart": true,                        // 默认为true, 发生异常的情况下自动重启
            "env": {
            "NODE_ENV": "production",                   // 环境参数，当前指定为生产环境 process.env.NODE_ENV
            "REMOTE_ADDR": "wa"                  // process.env.REMOTE_ADDR
            },
            "env_dev": {
                "NODE_ENV": "development",              // 环境参数，当前指定为开发环境 pm2 start app.js --env_dev
                "REMOTE_ADDR": ""
            },
            "env_test": {                               // 环境参数，当前指定为测试环境 pm2 start app.js--env_test
                "NODE_ENV": "test",
                "REMOTE_ADDR": ""
            }
        },
        {
            "name": "3100",
            "script": "./service-nest-ro-427-3100/main.js",
            "error_file": "./logs/3100/error_3100.log",
            "out_file": "./logs/3100/out_3100.log",
            "log_date_format": "YYYY-MM-DD HH:mm:ss Z"
        }
    ]
}
```
------
+ 启动命令 `pm2 start main.js`
   1. 重命名应用 `pm2 start main.js --name <name>`
   2. 其他参数 `--watch` `--logs <log_path>` `--port 1024`

+ 停止命令 `pm2 stop name`

+ 重载 `pm2 reload name`

+ 重启命令 `pm2 restart name`

+ 删除 `pm2 delete name`

+ 查看所有列表 `pm2 list`

+ 查看详细信息 `pm2 show name`

+ 日志查看 `pm2 logs name --lines 30 --err --out` // 查看 name 的 err/out 日志 30 行 

+ 监控 `pm2 monit`  // 这个命令是监控命令 在 windows 上基本只能用 自带的 CMD 面板 其他无输出或者报错