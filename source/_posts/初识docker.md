---
title: 初识docker
date: 2023-05-07T20:28:42+08:00
updated: 2023-05-07T20:28:42+08:00
tags:
categories:
  - docker
---
## 安装

没啥可说的,按照官方文档安装即可

## 基本操作

通过`docker --help`了解命令

### 镜像操作

```sh
docker save -o [保存的目标文件名称] [镜像名称]
docker rmi [镜像名称]
docker load -i [目标文件名称]
```

### 容器操作

容器保护三个状态：

- 运行：进程正常运行
- 暂停：进程暂停，CPU不再运行，并不释放内存
- 停止：进程终止，回收进程占用的内存、CPU等资源

其中：

- docker run：创建并运行一个容器，处于运行状态
- docker pause：让一个运行的容器暂停
- docker unpause：让一个容器从暂停状态恢复运行
- docker stop：停止一个运行的容器
- docker start：让一个停止的容器再次运行

- docker rm：删除一个容器

进入容器

```sh
docker exec -it mn bash
```

命令解读：

- docker exec ：进入容器内部，执行一个命令
- -it : 给当前进入的容器创建一个标准输入、输出终端，允许我们与容器交互
- mn ：要进入的容器的名称
- bash：进入容器后执行的命令，bash是一个linux终端交互命令

### 数据卷

#### 数据卷操作的基本语法如下

```sh
docker volume [COMMAND]
```

`docker volume`命令是数据卷操作，根据命令后跟随的`command`来确定下一步的操作：

- create 创建一个volume
- inspect 显示一个或多个volume的信息
- ls 列出所有的volume
- prune 删除未使用的volume
- rm 删除一个或多个指定的volume

#### 挂载数据卷

我们在创建容器时，可以通过 -v 参数来挂载一个数据卷到某个容器内目录，命令格式如下：

```sh
docker run \
  --name mn \
  -v [数据卷名称或宿主机目录或宿主机文件:容器内目录或文件] \
  -p 8080:80
  ppp \
```

这里的-v就是挂载数据卷的命令：

- `-v html:/root/htm` ：把html数据卷挂载到容器内的/root/html这个目录中
- `-v /temp/mysql/config/:/etc/mysql/conf.d/` ：把html数据卷挂载到容器内的/root/html这个目录中
- `-v /temp/nginx/index.html:/etc/nginx/index.html` ：把html数据卷挂载到容器内的/root/html这个目录中
