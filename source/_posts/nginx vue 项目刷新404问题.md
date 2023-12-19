---
title: git常用命令
date: 2023-12-19T16:47:33+08:00
updated: 2023-12-19T16:47:33+08:00
tags:
    - nginx
    - vue
---
```bash
#  ------- 解决刷新404问题 ---->
    location / {
      try_files $uri $uri/ @router;
      index index.html;
    }
    location @router {
      rewrite ^.*$ /index.html last;
    }
```
