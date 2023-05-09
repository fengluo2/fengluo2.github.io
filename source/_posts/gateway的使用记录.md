---
title: gateway的使用记录
date: 2023-05-07T19:05:35+08:00
updated: 2023-05-07T19:05:35+08:00
tags:
  - java
  - gateway
categories:
    - spring-cloud
---
### 使用

#### 添加依赖

```
<dependency>
  <groupId>org.springframework.cloud</groupId>
  <artifactId>spring-cloud-starter-gateway</artifactId>
</dependency>
<!-- 新版gateway需要加上lb依赖 -->
<dependency>
  <groupId>org.springframework.cloud</groupId>
  <artifactId>spring-cloud-starter-loadbalancer</artifactId>
</dependency>
```

#### 过滤器  

1. gateway可以添加过滤器，以实现修改请求头，鉴权等功能`(实现GlobalFilter接口)`，并加入`@Component`注解,`@Order`注解设置优先级  
2. 请求路由后 当前路由的过滤器 -> DefaultFilter -> GobalFilter 合并到一个过滤器链,排序后依次执行  
3. 当过滤器的值一样时,会按照defaultFilter -> 路由过滤器 -> GobalFilter的顺序执行

#### 跨域

开卷考试

```
spring:
  cloud:
    gateway:
      globalcors: # 全局的跨域处理
        add-to-simple-url-handler-mapping: true # 解决options请求被拦截问题
        corsConfigurations:
          '[/**]':
            allowedOrigins: # 允许哪些网站的跨域请求
              - "http://localhost:8090"
              - "http://www.leyou.com"
            allowedMethods: # 允许的跨域ajax的请求方式
              - "GET"
              - "POST"
              - "DELETE"
              - "PUT"
              - "OPTIONS"
            allowedHeaders: "*" # 允许在请求中携带的头信息
            allowCredentials: true # 是否允许携带cookie
            maxAge: 360000 # 这次跨域检测的有效期
```

### 注意

Gateway不是Nginx，他只是分流，没有做代理!!
