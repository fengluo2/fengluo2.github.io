---
title: 初识docker
date: 2023-05-07T20:28:42+08:00
updated: 2023-05-07T20:28:42+08:00
tags:
categories:
  - docker
---
# 安装

没啥可说的,按照官方文档安装即可

# 基本操作

通过`docker --help`了解命令

```sh
docker exec -it mn bash
```

命令解读：

- docker exec ：进入容器内部，执行一个命令

- -it : 给当前进入的容器创建一个标准输入、输出终端，允许我们与容器交互

- mn ：要进入的容器的名称

- bash：进入容器后执行的命令，bash是一个linux终端交互命令
