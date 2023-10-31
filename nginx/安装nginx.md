## linux 下安装
1. wget http://nginx.org/download/nginx-1.19.8.tar.gz

1. yum -y install gcc zlib zlib-devel pcre-devel openssl openssl-devel 可能需要这个命令

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
```bash
PATH=$PATH:/usr/local/nginx/sbin
export PATH
```

退出后 需要 重启或者 输入 source /etc/profile 重新刷新配置文件

## window 下安装

直接下载文件 解压即可

注意: 
1. window 下 只能在 nginx目录下运行
2. window 目录下反斜杠要改成斜杆 \ => /

启动: `start nginx`

热更新: `./nginx.exe -s reload`

退出: `./nginx.exe -s quit`

## 注意点 nginx.conf 文件每一个配置项都需要分号结尾