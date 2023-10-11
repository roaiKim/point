### npm access
> 设置package的访问级别 //TODO: 还有很多命令

命令|描述
--|:--:
`npm access public [package]` | 公开包的访问
`npm access restricted [package]` | 限制包的访问


### npm adduser
> 添加用户 `npm adduser [--registry=url] [--scope=@orgname] [--always-auth] [--auth-type=legacy]`

参数|描述
--|:--
--registry|地址
--scope|域
--always-auth|是否每次请求都携带授权信息
--auth-type|验证类型 有 legacy sso saml oauth

### npm audit
> 扫描安全漏洞 `npm audit fix [--force|--package-lock-only|--dry-run|--production|--only=dev]`

参数|描述
--|:--
fix|对可能有漏洞的依赖项安装任何兼容的版本
--package-lock-only|不更新node_modules但是更新package.json
--only=prod|只更新直接依赖
--force|强制安装大版本

### npm bin
> 显示npm安装可执行文件的文件夹

### <span style="color: red">npm build</span>
> 打包

### npm cache
> 操控包的缓存

命令|描述
--|:--
`npm cache add <name>@<version>`|添加package缓存
`npm cache clean [<path>]`|清楚包的缓存
`npm cache verify`|验证包的缓存

### <span style="color: red">npm cli</span>
> 重新安装依赖(该命令依赖package-lock文件)，常用于 测试平台 持续集成部署等
> 这个命令和npm install有点像 区别点在于
1. 如果lock文件和package.json文件不匹配 则退出 而不是更新lock文件
2. npm cli 只能更新整个依赖 不能单独更新
3. npm cli 会在安装之前删除node_modules文件夹
4. 不会变动 package.json和lock文件

### <span style="color: red">npm config</span>
> 管理npm配置文件 .npmrc

命令|描述
--|:--
`npm config set <key> <value>`|设置key value
`npm config get <key>`|查看key value
`npm config delete <key>`|删除key value


### <span style="color: red">npm dedupe/ddp</span>
> 删除重复依赖
> 比如: a依赖name^2.0.3版本 b依赖name^2.0.5版本 但是a，b各自安装了不同版本 则这个命令会试着扁平化name

### npm-deprecate
> `npm deprecate my-thing@"< 0.2.3" "critical bug fixed in v0.2.3"`  
> 废弃一个包(npm包的管理者才能操作)

### ### <span style="color: red">npm dist-tag</span>
> 修改包的 tag [详情](https://blog.csdn.net/qq_45225759/article/details/127855521)

命令|描述
--|:--
`npm dist-tag add <pkg>@<version> [<tag>]`| 新增一个

### npm docs
> 这个命令尝试打开包的文档

### npm doctor
> 检测环境 确保你的 npm 安装具有管理 JavaScript 包所需的功能
> 1. nodejs 和 git 必须由npm执行
> 2. 注册表 registry.npmjs.com或其他注册表可用
> 3. 本地用户对 node_modules(全局和本地) 有写入权限
> 4. 缓存存在

### <span style="color: red">npm help</span>
> 获取 npm 的 用法/命令 `npm help` `npm help build`

### npm hple-search
> 搜索npm的帮助文档

### npm hook
> 订阅/取消某个package的改动 需要域名和npm 账号

### <span style="color: red">npm init</span>
> 创建 package.json 初始化项目 `npm init react-app my-app`

### <span style="color: red">npm link</span>
> 符号连接一个文件夹 一般用于本地包调试  
> `npm link` 会把当前包链接到全局。`npm link package-name` 会从全局链接到本地node_modules文件夹

### <span style="color: red">npm ls</span>
> 查看所有的包

### npm-org
> 管理npm的组织

命令|描述
--|:--
`npm org set <orgname> <username> [develop\|admin\|owner]`|组织新增人员
`npm org rm <orgname> <username>`|组织删减人员
`npm org ls <orgname>`|列出组织人员

### npm outdated
> 检查过时的包 判断依据: 只检查大版本右侧的小版本是否合适，比如 v@3.3.9 虽然最新的包为v@5.3.5,但是 v@3.3.9 是v@3的最大版本,则不会显示过时

参数|描述
--|:--
--long|显示详细信息
--global|显示全局的包
--depth|检查的层级

### npm owner
> 管理包的拥有者

命令|描述
--|:--
`npm owner add <user>`|新增owner
`npm owner rm <user>`|删除owner
`npm owner ls <user>`|列出owner

### <span style="color: red">npm pack</span>
> 创建 .tgz 文件，用于本地安装

### npm ping
> ping 注册表地址

### npm prefix
> 打印本地目录前缀 输出: D:\3_e\point 格式

### <span style="color: red">npm profile</span>
> 更改registry账号

命令|描述
--|:--
`npm profile get <name\|email\|fullname\|homgpage">`|获取
`npm profile set <name> <value>`|设置

### <span style="color: red">npm prune</span>
> 删除无关的包 指没有在父包中依赖的包

### <span style="color: red">npm publish</span>
> 发布包 `npm publish folder`

### <span style="color: red">npm rebuild</span>
> 重新构建包

### <span style="color: red">npm repo</span>
> 打开项目的源码仓库 `npm repo [<package>]`

### npm restart
> 重启package

### npm root
> 打印 有效的 node_modules 目录位置

### <span style="color: red">npm search</span>
> 在注册表中搜索包

### <span style="color: red">npm shrinkwrap</span>
> 锁定依赖包的版本 优先级最高

### npm star/stars
> `npm star` 标记喜欢的包 `npm  stars` 查看标记的包

### npm token
> 管理 npm token

命令|描述
--|:--
`npm token list`|列出token
`npm token create`|创建一个

### <span style="color: red">npm uninstall</span>
> 删除一个包

### <span style="color: red">npm unpublish</span>
> 从注册表中删除一个package

### <span style="color: red">npm update</span>
> 更新一个package 会根据package.json来更新

### <span style="color: red">npm whoami</span>
> 显示当前用户名

### <span style="color: red">npm view</span>
> 显示注册信息 `npm view [<@scope>/]<name>[@<version>] [<field>[.<subfield>]`

参数|描述
--|:--
`npm view <package>@16.7.0`|查看package信息 可指定版本
`npm view <package> version`|查看包的最新版本
`npm view <package> versions`|查看包的所有版本

### <span style="color: red">npm version</span>
> 管理包的版本 `npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease [--preid=<prerelease-id>] | from-git]`

