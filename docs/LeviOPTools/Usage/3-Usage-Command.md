# 命令详解

:::warning
使用本页的功能，需要在权限组中添加相应的权限（游戏中）。  
如果您还没有配置权限组，请点击[这里](./2-Usage-Permission.md)
:::

<details>
<summary>展开查看全部命令</summary>

```log title="bedrock_server_mod.exe"
21:22:54.149 INFO [Server] tools:
21:22:54.149 INFO [Server] LeviOPTools
21:22:54.149 INFO [Server] Usage:
21:22:54.149 INFO [Server] - /tools
21:22:54.149 INFO [Server] - /tools broadcast <message: string>
21:22:54.149 INFO [Server] - /tools chunk backup [pos: x y z] <dimentionId: int>
21:22:54.149 INFO [Server] - /tools chunk cancel <id: int>
21:22:54.149 INFO [Server] - /tools chunk debug
21:22:54.149 INFO [Server] - /tools chunk operateid [id: int]
21:22:54.149 INFO [Server] - /tools chunk restore [pos: x y z] <dimentionId: int>
21:22:54.149 INFO [Server] - /tools chunk select <pos1: x y z> <pos2: x y z> <dimentionId: int>
21:22:54.149 INFO [Server] - /tools chunk select backup <id: int> <fileName: string>
21:22:54.149 INFO [Server] - /tools chunk select copy <id: int> <pos: x y z>
21:22:54.149 INFO [Server] - /tools chunk select copy confirm <id: int> [ignoreEntities: Boolean] [dimentionId: int]
21:22:54.149 INFO [Server] - /tools chunk select restore <fileName: string>
21:22:54.149 INFO [Server] - /tools chunk structure load <fileName: string>
21:22:54.149 INFO [Server] - /tools chunk structure place <id: int> <pos: x y z> <dimentionId: int> [ignoreEntities: Boolean]
21:22:54.149 INFO [Server] - /tools chunk structure save <id: int> <fileName: string> [ignoreBlocks: Boolean] [ignoreEntities: Boolean]
21:22:54.149 INFO [Server] - /tools chunk transform mirror <id: int> <x|z|none|xz>
21:22:54.149 INFO [Server] - /tools chunk transform rotate <id: int> <0_degrees|90_degrees|180_degrees|270_degrees>
21:22:54.149 INFO [Server] - /tools crash <player: target>
21:22:54.149 INFO [Server] - /tools gm <d|c|s|a> [player: target]
21:22:54.149 INFO [Server] - /tools gm <gameType: GameType> [player: target]
21:22:54.149 INFO [Server] - /tools gm <gameType: int> [player: target]
21:22:54.149 INFO [Server] - /tools kick <player: target> [message: string]
21:22:54.149 INFO [Server] - /tools kill <player: target>
21:22:54.149 INFO [Server] - /tools reload
21:22:54.149 INFO [Server] - /tools setmaxplayers <maxPlayers: int>
21:22:54.149 INFO [Server] - /tools talkas <player: target> <message: string>
21:22:54.149 INFO [Server] - /tools teleport <player: target> <pos: x y z> [dimension: int]
21:22:54.149 INFO [Server] - /tools teleport <player: target> [target: target]
```

</details>

## 插件管理命令

- `/tools reload`  
   重载配置文件。

## 原版简短命令

:::note
此部分的命令功能和原版的`gamemode`命令相同。  
不同的是，本插件的`gm`命令恢复了原版移除的`gamemode 6`即旁观模式的功能。  
原版把`gamemode 6`改成了`gamemode spectator`才能切换到旁观模式。
:::

- `/gm <d|c|s|a> [player: target]`
- `/gm <gameType: GameType> [player: target]`
- `/gm <gameType: int> [player: target]`

## 普通功能命令

- `/tools`  
  打开 GUI。

- `/tools broadcast <message: string>`  
   广播一个消息给所有玩家。

- `/tools crash <player: target>`  
  让一个玩家客户端崩溃。

- `/tools kick <player: target> [message: string]`  
  踢出一个玩家，并可附带一段消息。

- `/tools kill <player: target>`  
  杀死一个玩家（不受游戏模式影响）。

- `/tools setmaxplayers <maxPlayers: int>`  
  设置服务器最大玩家数量。

- `/tools talkas <player: target> <message: string>`  
   以某个玩家的身份发言。

- `/tools teleport <player: target> <pos: x y z> [dimension: int]`  
   传送一个玩家到某个位置。

- `/tools teleport <player: target> [target: target]`  
   传送一个玩家到另一个玩家的位置。

:::tip
`/tools gm <d|c|s|a> [player: target]`  
`/tools gm <gameType: GameType> [player: target]`  
`/tools gm <gameType: int> [player: target]`  
以上 3 个命令的功能和 [原版简短命令](#原版简短命令) 相同。  
:::

## 区块操作命令

### 区块操作

- `/tools chunk debug`  
   调试功能，显示当前所在区块的详细信息。

- `/tools chunk backup [pos: x y z] <dimentionId: int>`  
  备份 当前、指定位置或指定区块的区块数据。

- `/tools chunk restore [pos: x y z] <dimentionId: int>`  
  从备份文件恢复区块数据。

### 选区操作

- `/tools chunk select <pos1: x y z> <pos2: x y z> <dimentionId: int>`  
  通过指定两个位置来选取一个区域。  
  :::warning
  pos1 和 pos2 必须在同一维度。  
  选区后会返回一个操作 ID，用于后续操作。
  :::

- `/tools chunk select backup <id: int> <fileName: string>`  
  备份当前选区到文件。
  :::warning
  参数 1`<id: int>`为前面选区命令返回的操作 ID。  
  如果 ID 错误，则会导致文件保存失败。  
  参数 2`<fileName: string>`为要保存的文件名。  
  注意不要带后缀，不要包含任何 Windows 系统保留的字符。
  :::

- `/tools chunk select restore <fileName: string>`  
   从之前保存的选区文件恢复选区数据。  
   :::warning
  此恢复功能是直接覆盖选中的区域，请谨慎使用。  
   :::

- `/tools chunk select copy <id: int> <pos: x y z>`  
  复制选区到指定位置。
  :::tip
  参数 1`<id: int>`为前面选区命令返回的操作 ID。  
  参数 2`<pos: x y z>`为要复制到的位置。  
  如果位置不合适，可以使用下面的[结构、选区 操作](#结构选区-操作)来旋转或镜像选区。
  :::

- `/tools chunk select copy confirm <id: int> [ignoreEntities: Boolean] [dimentionId: int]`
  确认复制选区到指定位置。  
  :::warning
  参数 1`<id: int>`为前面选区命令返回的操作 ID。  
   参数 2`[ignoreEntities: Boolean]`是否忽略实体。  
   参数 3`[dimentionId: int]`指定维度。  
   注意，复制选区需要确保原区域和目标区域的区块均已加载。
  :::

- `/tools chunk structure save <id: int> <fileName: string> [ignoreBlocks: Boolean] [ignoreEntities: Boolean]`  
  保存选区为 McStructure 文件。
  :::tip
  此命令用于导出结构到 mcstructure 文件，可以跨服务器共享。  
  导出的文件会保存在`bds\plugins\LeviOPTools\Chunk\Structure`下。  
  参数 1`<id: int>`为前面选区命令返回的操作 ID。  
   参数 2`<fileName: string>`为要保存的文件名。  
   参数 3`[ignoreBlocks: Boolean]`是否忽略方块。  
   参数 4`[ignoreEntities: Boolean]`是否忽略实体。  
  :::

### McStructure 文件操作

- `/tools chunk structure load <fileName: string>`
  加载一个 McStructure 文件。
  :::tip
  参数 1`<fileName: string>`为要加载的文件名。  
   此操作会返回一个操作 ID，用于后续操作。  
  此功能会查找`bds\plugins\LeviOPTools\Chunk\Structure`下的 mcstructure 文件。
  你可以放置自己的 mcstructure 文件到这个目录下，这样可以加载自己的结构到服务器。
  :::

- `/tools chunk structure place <id: int> <pos: x y z> <dimentionId: int> [ignoreEntities: Boolean]`  
  放置一个 McStructure 文件到指定位置。
  :::tip
  参数 1`<id: int>`为前面加载命令返回的操作 ID。  
   参数 2`<pos: x y z>`为要放置到的位置。  
   参数 3`<dimentionId: int>`指定维度。  
   参数 4`[ignoreEntities: Boolean]`是否忽略实体。  
  :::

### 结构、选区 操作

- `/tools chunk transform mirror <id: int> <x|z|none|xz>`
  镜像选区。
  :::tip
  参数 1`<id: int>`操作 ID（此功能不限制操作 ID 类型）。  
   参数 2`<x|z|none|xz>`指定镜像方向。  
   `x`表示沿 X 轴镜像，`z`表示沿 Z 轴镜像，`none`表示不镜像（默认），`xz`表示沿 XZ 平面镜像。  
  :::

- `/tools chunk transform rotate <id: int> <0_degrees|90_degrees|180_degrees|270_degrees>`  
   旋转选区。
  :::tip
  参数 1`<id: int>`操作 ID（此功能不限制操作 ID 类型）。  
   参数 2`<0_degrees|90_degrees|180_degrees|270_degrees>`指定旋转角度。  
   `0_degrees`表示顺时针旋转 0 度  
  `90_degrees`表示顺时针旋转 90 度  
  `180_degrees`表示顺时针旋转 180 度  
  `270_degrees`表示顺时针旋转 270 度  
   :::

### 操作 ID

- `/tools chunk cancel <id: int>`  
   取消（销毁）一个操作 ID。

- `/tools chunk operateid [id: int]`  
  查看所有的操作 ID 或 查看指定 ID 的操作详情。

:::tip

如果你任然无法理解区块操作的命令，  
可以点击标题 [Projects-Docs](../../index.mdx) 返回首页进入 QQ 群交流。

<details>
<summary>为什么要有操作 ID？</summary>

操作 ID 是为了方便开发、使用、扩展引入的一个机制。

操作 ID 的底层实现是一个拥有许多数据的`unorder_map`这样的设计可以快速扩展和修改，
如果不采用这样的设计，则需要缓存每个玩家正在操作的数据，这会导致代码复杂度增加，且一个玩家无法同时操作多个选区、McStructure。

</details>

:::
