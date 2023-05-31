---
title: git常用命令
date: 2023-05-26 16:47:33
tags:
    - git
---

## 基础

```sh
git add [文件/文件夹]
```

开始追踪文件

```sh
git commit [-a|-m {消息}]
```

提交更改

- `-a`：为已追踪文件运行`git add`

- `-m`：添加本次提交消息  

```sh
```sh
git rm [文件/文件夹]
```

  停止追踪并删除该文件

```sh
  
```sh
git log [--oneline|--decorate|--max-count]
```

显示git日志

- `--oneline`：减少显示的哈希值长度

- `--decorate`：装饰，打印出显示的任何提交的引用名称。如果指定了*short* ，则不会打印ref 名称前缀*refs/heads/*、*refs/tags/*和 *refs/remotes/ 。*如果指定了*full*，将打印完整的 ref 名称（包括前缀）。如果指定了*auto*，那么如果输出到终端，则显示 ref 名称，就好像给出了*short一样，否则不显示任何 ref 名称。*该选项`--decorate`是`--decorate=short`. 如果已配置，则默认为配置值`log.decorate`，否则为`auto`

- `--max-count`：显示最多多少行，还可以选择限制条件一起限制

## 分支相关

```sh
git branch [新分支名称，如不填写，则可以查看所有分支]
```

迁出分支

```sh
git checkout [-b|-d] [分支名称]
```

切换分支

- `-b`：相当于`git branch [分支名称]`，直接创建并切换到新分支
- `-d`：删除分支

```sh
git merge [分支名]
```

合并分支

## Git工具

### 储藏与清理

```sh
git stash
```

暂存进度，将其放入栈内

```sh
git stash list
```

查看存储的东西

```sh
git stash apply [还原的储藏名称，不填则还原栈顶的储藏]
```

还原储藏，可指定储藏名称
