---
title: jackson的简单使用
date: 2023-05-06T18:04:58+08:00
tags: 
    - java 
    - jackson
---
jackson是一款安全的json处理框架  
大部分都依靠`ObjectMapper`这个工具类据处理json对象  
jackson里的json对象分三种`JsonNode`,`ObjectNode`和`ArrayNode`  
`JsonNode`不可更改,`ObjectNode`是可变的,`ArraryNode`是列表  
输出的缩进格式可以更改
