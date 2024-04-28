# 权限配置

:::note
由于`LeviOPTools`的权限功能依赖`PermissionCore`。  
更多关于`PermissionCore`的使用请参考[这里](../../PermissionCore/index.md)。
:::

## 权限配置

:::tip
本页教程将教会您如何创建一个`管理员`组，并给予其权限。  
权限值请看下面的[权限列表](#权限列表)。
:::

:::warning
本页默认您已经安装了`PermissionCore`，如果没有安装请先安装`PermissionCore`。  
且已经运行了服务端，如果没有运行请先启动服务端。
:::

1. 在`BDS`控制台输入`? permc`查看权限组的命令结构。

   ```log title="bedrock_server_mod.exe"
   ? permc
   20:49:32.354 INFO [Server] permc:
   20:49:32.354 INFO [Server]
   20:49:32.354 INFO [Server] Usage:
   20:49:32.354 INFO [Server] - /permc
   20:49:32.354 INFO [Server] - /permc group <delete|creat> <pluginName: string> <groupName: string>
   20:49:32.370 INFO [Server] - /permc list group <pluginName: string> [groupName: string]
   20:49:32.370 INFO [Server] - /permc list perm [pluginName: string] [permValue: int]
   20:49:32.370 INFO [Server] - /permc list plugin
   20:49:32.370 INFO [Server] - /permc perm <add|del> <pluginName: string> <groupName: string> <permValue: int>
   20:49:32.370 INFO [Server] - /permc user <add|del> <pluginName: string> <groupName: string> <player: target>
   20:49:32.370 INFO [Server] - /permc user <add|del> <pluginName: string> <groupName: string> <realName: string>
   ```

2. 根据命令结构得知，我们使用`permc list plugin`查看插件列表。

   ```log {2} title="bedrock_server_mod.exe"
   permc list plugin
   20:54:45.315 INFO [Server] 当前共有以下插件注册了权限核心： LeviOPTools
   20:54:45.315 INFO [Server] Total 1 plugins registered.
   ```

3. 根据 log 输出得知，`LeviOPTools`的插件名称在`PermissionCore`中为`LeviOPTools`。
   :::note
   由于受前置、插件名称等因素影响，插件名称可能与实际名称不同。
   所以`1-3`步教程主要是为了确认插件名称。
   :::

4. 现在我们使用命令`permc group creat LeviOPTools admin`创建一个`管理员`组。

   ```log {2} title="bedrock_server_mod.exe"
   permc group creat LeviOPTools admin
   20:59:51.387 INFO [Server] 添加组 'admin' 到插件 'LeviOPTools' 状态 '成功'
   ```

5. 现在我们使用命令`permc user add LeviOPTools admin <玩家名>`为`管理员`添加一个用户。

   ```log {2} title="bedrock_server_mod.exe"
   permc user add LeviOPTools admin engsr6982
   21:05:39.940 INFO [Server] 添加用户 'engsr6982' 到组 'admin' 插件 'LeviOPTools' 状态 '成功'
   ```

   :::tip
   如果报错`找不到玩家`请检查玩家名是否正确、玩家是否在线。
   :::

6. 现在我们使用命令`permc perm add LeviOPTools admin 1`为`管理员`组添加`首页`的权限。

   ```log {2} title="bedrock_server_mod.exe"
   permc perm add LeviOPTools admin 1
   21:08:33.341 INFO [Server] 添加权限 '主页表单' 到组 'admin' 插件 'LeviOPTools' 状态 '成功'
   ```

7. 添加成功后，输入命令`tools`就可以正常打开`LeviOPTools`的管理界面。

:::tip
`1-7`步教程是为您创建一个`管理员`组并给予其权限。  
您可以根据自己的需求创建更多的组并给予其权限。
:::

## 权限列表

<details>
<summary>展开查看</summary>

| 权限 ID | 功能名称             | 枚举(备忘)               |
| ------- | -------------------- | ------------------------ |
| 0       | 未知                 | Unknown                  |
| 1       | 首页                 | indexForm                |
| 2       | 踢出玩家             | KickPlayer               |
| 3       | 杀死玩家             | KillPlayer               |
| 4       | 更改天气             | ChangeWeather            |
| 5       | 更改时间             | ChangeTime               |
| 6       | 广播消息             | BroadCastMessage         |
| 7       | MOTD 管理            | MotdManagement           |
| 8       | 设置服务器最大玩家数 | SetServerMaxPlayer       |
| 9       | 传送                 | Teleport                 |
| 10      | 清理掉落物品         | CleanDropItem            |
| 11      | 更改游戏模式         | ChangeGameMode           |
| 12      | 更改世界规则         | ChangeGameRule           |
| 13      | 获取方块或物品       | GetBlockOrItem           |
| 14      | 终端                 | Terminal                 |
| 15      | 发送消息给玩家       | SendMessageToPlayer      |
| 16      | 崩溃客户端           | CrashPlayerClient        |
| 17      | 使用玩家身份说话     | UsePlayerIdentitySay     |
| 18      | 使用玩家身份执行命令 | UsePlayerIdentityExecute |
| 19      | 封禁 GUI             | BanGui                   |
| 20      | 玩家信息             | PlayerInfo               |
| 21      | 命令黑名单           | CommandBlacklist         |
| 22      | 药水 GUI             | PotionGUI                |
| 23      | 区块操作             | ChunkOpertion            |

</details>
