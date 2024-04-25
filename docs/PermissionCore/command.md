---
sidebar_position: 3
---

# 命令详解

:::tip
权限组默认顶层命令为`permc`  
所需权限等级`OP`
:::

- `/permc`  
    打开gui

- `permc list perm [pluginName] [permValue]`          
    列出所有插件  
    列出指定插件所有权限值  
    列出指定插件的权限详细信息  

:::tip
由于权限组目前暂未支持大小写插件名自动匹配，所以目前输入插件名需要大小写一致
:::

- `permc list group <pluginName> [groupName]`  
    列出插件所有的组  
    列出插件的组详细信息
    
- `permc list plugin`  
    列出所有插件  
    

- `permc group <create|delete> <pluginName> <groupName>`  
    添加、删除组
    
- `permc user <add|del> <pluginName> <groupName> <target Player>`   
    添加、删除用户到组(需要玩家在线）
    
- `permc user <add|del> <pluginName> <groupName> <realName>`   
    添加、删除用户到组
    
- `permc perm <add|del> <pluginName> <groupName> <value>`   
    添加、删除权限到组