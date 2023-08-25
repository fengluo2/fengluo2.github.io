## 公共

- `docker logs -f --tail 100 [容器名]`查看日志
- `docker exec -it [容器名] bash`进入容器

## Mysql

配置文件先运行一遍，在容器里拿

运行

```shell
docker run -p 3306:3306 --name mysql --privileged=true \
-v /docker/mysql/log:/var/log/mysql \
-v /docker/mysql/data:/var/lib/mysql \
-v /docker/mysql/conf/my.cnf:/etc/mysql/my.cnf \
-v /docker/mysql/mysql-files:/var/lib/mysql-files \
-e MYSQL_ROOT_PASSWORD=root -d mysql:latest
```

`mysql -h 127.0.0.1 -p`

## Redis

配置文件上官网找

运行

```shell
docker run --name redis --privileged=true -p 6379:6379 \
--log-opt max-size=100m \
--log-opt max-file=3 \
-v /docker/redis/config/redis.conf:/etc/redis/redis.conf \
-v /docker/redis/data:/data \
-v /etc/localtime:/etc/localtime:ro \
-d redis:7.2.0 \
redis-server /etc/redis/redis.conf \
--requirepass 123456
```

`redis-cli`

## 注意

不要使用特殊字符，如`[$,.]`等
