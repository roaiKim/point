
## 卸载 应用
`yum remove XX`
1.先卸载npm 

            sudo npm uninstall npm -g

2.卸载node

            yum remove nodejs npm -y
---

## 安装git
`yum install -y git`

---

## 安装 nodejs
> 安装nodejs时 npm 会自动安装
1. 下载 nodejs
2. 解压
3. 移动文件夹到 /usr/local 并重命名为 node

```bash
wget https://nodejs.org/dist/v16.13.2/node-v16.13.2-linux-x64.tar.gz
tar -xzvf node-v16.13.2-linux-x64.tar.gz
mv node-v14.16.1-linux-x64 /usr/local/node
```
4. 修改环境变量
```bash
vim /etc/profile
```
// 让环境变量生效
source /etc/profile

5. 添加到文件的最后
如果有其他 应用的 PATH 则只需要导出一次就行
```bash
PATH=$PATH:/usr/local/nginx/sbin # 这个是 nginx 的环境变量 node只需要在这个后面加入就行 共用一个 export
PATH=$PATH:/usr/local/node/bin
export PATH
```
6. 查看 安装是否成功  
`node -v`  
`npm -v`

---

## 安装 yarn
1. 先安装 node ...
2. 先后执行以下命令
```bash
curl --silent --location https://dl.yarnpkg.com/rpm/yarn.repo | sudo tee /etc/yum.repos.d/yarn.repo
```
```bash
yum install yarn
```
3. 查看是否成功  
`yarn -v`

140.82.114.3 github.com
185.199.108.133 raw.githubusercontent.com