---
title: nacos使用记录
date: 2023-05-06T22:05:49+08:00
updated: 2023-05-06T22:05:49+08:00
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

## 服务发现和服务注册

添加依赖  

```xml
<dependency>
    <groupId>com.alibaba.cloud</groupId>
    <artifactId>spring-cloud-starter-alibaba-nacos-discovery<artifactId>
</dependency>

```

配置，与eureka类似，也需要配置服务器，还可以配置集群`(默认为同一集群)`名称

```yml
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

## 负载均衡

新版nacos已经包含ribbon
可以使用loadbalancer实现负载均衡

## 配置中心

添加依赖  

```xml
<dependency>
  <groupId>com.alibaba.cloud</groupId>
  <artifactId>spring-cloud-starter-alibaba-nacos-config</artifactId>
</dependency>
<!-- 对于高版本的springcloud，还需要这个，要不然无法读取bootstrap.yml文件 -->
<dependency>
  <groupId>org.springframework.cloud</groupId>
  <artifactId>spring-cloud-starter-bootstrap</artifactId>
</dependency>
```

添加bootstrap.yml文件  
配置  

```yml
spring:
  application:
    name: education-service
  profiles:
    active: dev
  cloud:
    nacos:
      server-addr: localhost:8848
      config:
        file-extension: yaml
```

## 实现热更新  

使用`@ConfigurationProperties`的属性配置注解注入，自动刷新  
通过`@Value`注解注入，结合`@RefreshScope`注解实现刷新  

## 注意

1. 不是所有的配置都适合放到配置中心，将一些关键参数，需要运行时要调整的参数放到nacos配置中心，一般都是自定义配置  
