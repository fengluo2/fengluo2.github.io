---
title: Linux中查找所有文件中含有特定字符串的脚本
date: 2023-05-26T13:30:58+08:00
updated: 2023-05-26T13:30:58+08:00
tags: 
    - linux
categories:
    - script
---
查找所有文件，命令：`sudo ./find.sh [路径]`  
他会查找该目录所有文件，并将匹配的文件和内容输出

```shell
#!/bin/bash
#maple
#

function scan {
        if [ -f $1 ];then
                echo 'file' $1
                cat $1 | grep '[0-9]\+' # 这里匹配的是正则表达式，根据需要自行修改
        elif [ -d $1 ];then
                for f in `ls -a $1`;do # la -a 会匹配所有文件，所有将 . 和 .. 排除 
                        if [ $f = '.' ] || [ $f = '..' ];then
                                continue
                        else
                                scan $1/$f # 递归扫描
                        fi
                done
        fi
}
echo 'start scan'
scan $1
```
