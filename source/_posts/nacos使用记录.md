---
title: nacos使用记录
date: 2023-05-06T22:05:49+08:00
tags:
    - java
    - nacos
categories:
    - spring-cloud
---
## nacos分级存储模型
1. 服务，如userservice
2. 集群，如杭州、上海
3. 实例
### 1.服务发现和服务注册
添加依赖  
```
<dependency>
    <groupId>com.alibaba.cloud</groupId>
    <artifactId>spring-cloud-starter-alibaba-nacos-discovery<artifactId>
</dependency>

```
配置，与eureka类似，也需要配置服务器，还可以配置集群`(默认为同一集群)`名称
```
spring:
  cloud:
    nacos:
      server-addr: localhost:8848
      discovery:
        cluster-name: DEFAULT ## 集群名称
        namespace:            ## 命名空间
        ephemeral: true       ## 临时实例
```
或者在启动加入`-Dspring.cloud.nacos.discovery.cluster-name=SH`
### 2.负载均衡
使请求优先在本集群寻找实例
### 3.配置中心
添加依赖  
配置  