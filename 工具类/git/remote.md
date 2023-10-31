git remote add gitee https:////// // 创建远程库和当前库连接 远程库名称 gitee

git checkout -b ro // 本地新建分支 ro

git merge main // 把main合到当前 ro 分支

git push -u gitee ro // 把 当前分支推送到 名称 gitee 的远程 // 远程提交到远程的分支要和当前的分支相同