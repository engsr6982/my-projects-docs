---
sidebar_position: 2
---

# 安装使用

## 用户

使用 Lip 一键安装

```bash
lip install github.com/engsr6982/PermissionCore
```

安装插件后启动服务器，控制台输入`? permc`查看命令列表

## 开发者

:::tip
以下是按照传统的 submodule 形式使用 PermissionCore  
如果需要 xmake 来管理 PermissionCore，请参考测试仓库的[xmake.lua](https://github.com/engsr6982/PermissionCoreTest/blob/main/xmake.lua)
xmake管理包，设置版本只需要修改setversion字段，填入对应版本和Release提供的SDK的sha256值即可
:::

- Step1:

从`Release`下载`SDK`，解压到你的项目仓库根目录的`SDK_PermissonCore`下

```file
project:
├─SDK_PermissionCore
│    │  include_all.h
│    │
│    ├─Lib
│    │      PermissionCore.lib
│    │
│    └─PermissionCore
│        ├─PermissionCore
│        │      PermissionCore.h
│        │
│        └─Registers
│                Registers.h
│
├─src
...省略其他内容
```

- Step2:

打开`xmake.lua`，在`target`后面加上

```lua
target("Levilamina-Plugin-Template")
    add_includedirs(
        "SDK_PermissonCore", -- 让xmake识别到头文件
        "src"
    )
    add_links(
        "SDK_PermissonCore/Lib/PermissionCore" -- 为编译链接库
    )
    -- 省略其他内容
```