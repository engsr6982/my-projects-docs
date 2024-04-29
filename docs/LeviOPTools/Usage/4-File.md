# 文件详解

## 目录结构

<details>
<summary>展开</summary>

```file title="bds\plugins\LeviOPTools"
LeviOPTools:.
├─Chunk
│  ├─ChunkBackup  // 备份的区块
│  ├─CustomBackup  // 自定义备份的选区
│  └─Structure  // 导出、导入的结构文件
├─config // 配置文件
├─data  // 数据文件
├─form // 表单文件
└─lang // 语言文件
```

:::tip
`Chunk/ChunkBackup` 目录下的区块文件按照维度 ID 分类  
`Chunk/Structure` 目录用于导出、导入游戏内的结构，你可以把自己的结构文件放到这里，然后在游戏内导入。
:::

</details>

## 配置文件

```js title="bds\plugins\LeviOPTools\config\Config.json"
{
    "version": 4, // 配置文件版本（请不要修改）
    "loggerLevel": 4, // 日志等级（1-5）
    "language": "zh_CN", // 语言(似乎没用)
    "command": {
        "tools": { // 插件主命令
            "commandName": "tools",  // 命令
            "commandDescription": "LeviOPTools" // 命令描述
        },
        "gm": { // gamemode简短命令
            "enable": true, // 是否启用
            "commandName": "gm",
            "commandDescription": "LeviOPTools GM"
        }
    },
    "function": {
        "gameRuleTranslatFilePath": "lang/gameRuleTranslat.json", // 游戏规则翻译文件路径
        "terminalCacheSize": 20, // 终端缓存大小
        "enableMotd": true, // 是否启用MOTD
        "motdShowTime": 30  // MOTD显示时间（秒）
    }
}
```

## 表单文件

LeviOPTools 也实现了与 Js 版本一样的根据配置文件构建表单

```js title="bds/plugins/LeviOPTools/form/index.json"
{
  "title": "test", // 表单标题
  "content": "cpp index form", // 表单内容
  "buttons": [
    {
      "title": "cmd",
      "imageUrl": "",
      "imageType": "",
      "callbackType": "cmd",
      "callbackRun": "say 111"
    },
    {
      "title": "form", // 按钮标题
      "imageUrl": "", // 图片地址
      "imageType": "", // 图片类别 url 或 path
      "callbackType": "form",// 回调类别
      "callbackRun": "index.json" //回调执行的东西
    },
    {
      "title": "function",
      "imageUrl": "",
      "imageType": "",
      "callbackType": "function", // 插件内部接口
      "callbackRun": "test"
    },
    {
      "title": "button2",
      "imageUrl": "https://lse.liteldev.com/img/logo.png", // 支持url图片（不要在意这从LL扣的图片url）
      "imageType": "url",
      "callbackType": "",
      "callbackRun": ""
    }
  ]
}

```

| callbackType | 描述               |
| ------------ | ------------------ |
| cmd          | 执行命令           |
| form         | 打开另一个表单文件 |
| function     | 运行插件内部函数   |

:::warning
callbackType 为 form 时，callbackRun 必须填写文件名，不支持绝对路径。  
表单文件的路径必须在 `bds/plugins/LeviOPTools/form/` 目录下。  
:::

<details>
<summary>function 函数列表</summary>

| 函数                     | 映射目标                 | 功能名称             |
| ------------------------ | ------------------------ | -------------------- |
| kickPlayer               | kickPlayer               | 踢出玩家             |
| killPlayer               | killPlayer               | 杀死玩家             |
| changeWeather            | changeWeather            | 更改天气             |
| changeTime               | changeTime               | 更改时间             |
| changeGameRule           | changeGameRule           | 更改世界规则         |
| terminal                 | terminal                 | 终端                 |
| crashPlayerClient        | crashPlayerClient        | 崩溃客户端           |
| broadCastMessage         | broadCastMessage         | 广播消息             |
| usePlayerIdentitySay     | usePlayerIdentitySay     | 使用玩家身份说话     |
| usePlayerIdentityExecute | usePlayerIdentityExecute | 使用玩家身份执行命令 |
| motdManagement           | motdManagement           | MOTD 管理            |
| getBlockOrItem           | getBlockOrItem           | 获取方块或物品       |

</details>

## 获取方块或物品

```js title="bds/plugins/LeviOPTools/data/ItemOrBlock.json"
[
  {
    name: "§l命令方块", // 名称
    imageType: "path", // 图片类别 url 或 path
    imageUrl: "textures/ui/creator_glyph_color", // 图片地址
    type: "command_block", // 方块Type
  },
  {
    name: "§l屏障方块",
    imageType: "path",
    imageUrl: "textures/blocks/barrier",
    type: "barrier",
  },
  {
    name: "§l边界方块",
    imageType: "path",
    imageUrl: "textures/blocks/border",
    type: "border_block",
  },
  {
    name: "§l结构方块",
    imageType: "path",
    imageUrl: "textures/blocks/structure_block",
    type: "structure_block",
  },
  {
    name: "§l结构空位",
    imageType: "path",
    imageUrl: "textures/blocks/structure_void",
    type: "structure_void",
  },
  {
    name: "§l光源方块",
    imageType: "path",
    imageUrl: "textures/items/light_block_15",
    type: "light_block",
  },
];
```

:::tip
你可以按照这个格式添加更多的方块或物品。  
目前只添加了一些常用的方块或物品，你可以根据自己的需要添加更多。
:::
