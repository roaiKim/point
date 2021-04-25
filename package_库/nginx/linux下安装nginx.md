
1. wget http://nginx.org/download/nginx-1.19.8.tar.gz

2. tar -zvxf nginx-1.19.8.tar.gz

3. cd nginx-1.19.8

4. ./configure

5. make install

6. 查看nginx: whereis nginx

7. nginx的安装路径为 /usr/local/nginx

### 如果没有配置环境变量
需要完整的路径启动
```bash
/usr/local/nginx/sbin/nginx
```

## 问题 
1. 提示 nginx 不是内部命令
-bash: nginx: command not found
> 原因 没有配置环境变量

```bash
vim /etc/profile
```
进入编辑模式(i) 在文本的最后写入下面的命令

PATH=$PATH:/usr/local/nginx/sbin
export PATH

退出后 需要 重启或者 输入 source /etc/profile 重新刷新配置文件
