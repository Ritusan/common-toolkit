# git

## git的三个区

- 工作区
- 暂存区：作为过渡层、避免误操作、保护工作区和版本区、分支处理
- 版本区（版本库）

## 设置贡献者/邮箱

- git config --global user.name "名字"

- git config --global user.email "邮箱"

- git config --list：查看所有配置项

## git命令配置别名：

- git config --global alias.st status   (如果输入git st 就表示 git status)

- git config --global alias.cm commit

- git config --global alias.che checkout

- git config --global alias.br branch

## git常用命令：

- git clone + url(仓库地址)：获取已有仓库的副本

- git clone -b + 分支名 + url：克隆指定分支到本地

- git status：查看当前仓库状态

- git add：将工作区中的文件添加到暂存区

- git add . ：全部添加

- git commit -m "description" ：将暂存区的文件提交到本地仓库，-m 后添加的是对文件的注释或解释说明

- git commit -a -m：前两步的简写

- git log：查看本地仓库的提交历史

### git 对比命令：

- git diff：工作区、暂存区对比

- git diff --cached(或者用staged)：暂存区、版本区对比

- git diff master：工作区、版本区对比

### git 撤销命令：

- git reset HEAD file.name(文件名称)：从暂存区撤销回工作区

- git checkout -- file.name：在工作区修改的内容撤销（还原）回最新的版本区的状态

- git commit --amend：（针对误提交，想重新提交时，）撤销上一次的提交，替换成新的提交

### git 删除命令：

- git rm file.name：当在工作区删除文件之后，用这个命令会把暂存区对应的文件删除

- git  rm -f file.name：删除工作区和暂存区的文件（强制删除）

- git rm --cached file.name：只删除暂存区的文件，工作区的文件会保留

### git 恢复命令：

- git checkout commit_id file.name：恢复对应版本的指定文件

- git reset --hard commit_id：恢复到指定的版本

- git reset --hard HEAD^：回退一个版本

- git reset --hard HEAD~num：回退到当前版本之前的第num个版本

- git reflog+git reset --hard commit_id：通过git reflog查看最近几次的提交记录，来回退到最新的版本

### git 分支：

分支有利于多人协作

- git branch：查看所有分支

- git branch + 新分支名字：创建新分支

- git branch -d +分支名字：删除已经合并了的分支

- git branch -D +分支名字：强制删除还没有合并的分支

- git branch --merged：查看当前master分支所合并的分支

- git branch --no-merged：查看当前master分支所没有合并的分支

- git checkout +分支名字：切换到指定分支

- git checkout -b +新分支名字：新建分支并且切换到这个分支上

- git merge +分支名字：合并分支

### 同步到远程仓库：

- git remote：查看远程仓库的名字，origin是默认的远程仓库名

- git remote -v：查看远程仓库名所对应的仓库地址

- git push origin master：往远程仓库上同步master分支

### 多人协作解决冲突：

- git clone 地址

- git fetch：把远程仓库拉取过来之后并不合并，需要通过手动方式合并（可以查看冲突的原因）
  - git diff master origin/master：
  - git merge origin/master：
- git pull：从远端拉取过来之后直接自动合并代码

### 开源项目协作：

fork：

pull request：发送给有权限的人

### github上的分支：

- git push origin +分支名字：把本地分支同步到远程仓库（github）上

- github上直接创建

### github上的标签（releases）：

- git tag：查看标签

- git tag +标签名（版本号）：创建标签

- git push origin +标签名（版本号）：同步到github上

- github上直接创建

### github上创建组织：

github上创建：New organization

### github上创建博客：

github上创建

https://pages.github.com/
