# 安装

:::note
本页教程默认您已安装好服务端、Lip
:::

:::tip
`LeviOPTools`的权限组实现依赖`PermissionCore`插件，因此需要先安装`PermissionCore`。  
`LeviOPTools`的`tooth.json`齿包配置好了所需的依赖，使用 Lip 安装无需手动安装依赖
:::

## Lip 安装

:::tip
由于本插件 Release 和齿包托管在 Github。  
如果您的网络环境不佳，使用 Lip 安装可能会安装失败。
:::

在您的 BDS 服务端所在路径下，打开命令行，输入以下命令进行 Lip 安装：

```bash
lip install github.com/engsr6982/LeviOPTools
```

如果您要安装指定版本的`LeviOPTools`，可以使用以下命令：

```bash
lip install github.com/engsr6982/LeviOPTools@版本号

# 例如安装0.11.0版本的LeviOPTools
lip install github.com/engsr6982/LeviOPTools@0.11.0
```

## 手动安装

:::warning
手动安装的难度较高，对比使用 Lip 安装手动安装难度指数可能以指数级增长。  
如果你依然决定手动安装，请确保`BDS`、`LeviLamina`、`PermissionCore`的版本匹配，否则可能导致插件运行异常。
:::

1. 首先下载和`BDS`、`LeviLamina`、`PermissionCore`匹配的`LeviOPTools`版本。  
   你可以前往[Github Release](https://github.com/engsr6982/LeviOPTools/releases)或者[MineBBS](https://www.minebbs.com/resources/optools-op-gui.4836/)论坛下载最新版本。

2. 下载后我们得到了一个 Zip 文件`LeviOPTools-windows-x64.zip`  
   我们解压这个文件，会看到一下目录结构：

   ```file {6-16} title="LeviOPTools-windows-x64"
   D:.
   │   CHANGELOG.md  // 插件的更新日志
   │   LICENSE       // 插件的许可证
   │   README.md     // 插件的说明文档
   │
   └───LeviOPTools   // 插件的主目录
       │   LeviOPTools.dll
       │   LeviOPTools.pdb
       │   manifest.json
       │
       ├───form
       │       index.json
       │
       └───lang
               gameRuleTranslat.json
               zh_CN.json
   ```

3. 在第 2 步，高亮的部分是`LeviOPTools`的主目录，我们将其复制到`BDS`的`plugins`目录下。  
   例如，假设`BDS`的`plugins`目录为`C:\server\be\plugins`，我们将`LeviOPTools`目录复制到`C:\server\be\plugins`下。

4. 按照前面的步骤，安装`PermissionCore`。

5. 运行`bedrock_server_mod.exe`启动服务端。
   观察服务端的日志，如果出现以下信息，则说明插件安装成功：

```log {20-28,55-60} title="bedrock_server_mod.exe"
PS D:\Github\test> .\bedrock_server_mod.exe
20:26:52.437 INFO [PreLoader] Loading symbols from pdb...
20:27:01.108 INFO [PreLoader] Loaded 604126 symbols
20:27:01.139 INFO [PreLoader] Loading Reverse Lookup Table
20:27:01.593 INFO [PreLoader] LeviLamina.dll Loaded.
20:27:01.718 INFO [LeviLamina] 统计已启用，您可以在配置文件中禁用统计
20:27:01.750 INFO [CrashLogger] 已成功启用崩溃记录器
20:27:01.765 INFO [LeviLamina]
20:27:01.765 INFO [LeviLamina]          _               _ _                    _
20:27:01.765 INFO [LeviLamina]         | |    _____   _(_) |    __ _ _ __ ___ (_)_ __   __ _
20:27:01.765 INFO [LeviLamina]         | |   / _ \ \ / / | |   / _` | '_ ` _ \| | '_ \ / _` |
20:27:01.765 INFO [LeviLamina]         | |__|  __/\ V /| | |__| (_| | | | | | | | | | | (_| |
20:27:01.765 INFO [LeviLamina]         |_____\___| \_/ |_|_____\__,_|_| |_| |_|_|_| |_|\__,_|
20:27:01.765 INFO [LeviLamina]
20:27:01.765 INFO [LeviLamina]         --------   Light-Weight BDS Plugin Loader   ----------
20:27:01.765 INFO [LeviLamina]
20:27:01.765 INFO [LeviLamina]
20:27:01.765 INFO [LeviLamina] LeviLamina 是一个由 LGPLv3 授权的自由软件
20:27:01.765 INFO [LeviLamina] 帮助我们翻译和改进文本 -> https://translate.liteldev.com/
20:27:01.828 INFO [LeviLamina] 正在加载插件...
20:27:01.828 INFO [LeviLamina] Loading PermissionCore v0.7.0
20:27:01.828 INFO [PermissionCore] Loading...
20:27:01.859 INFO [LeviLamina] PermissionCore 已加载
20:27:01.859 INFO [LeviLamina] Loading LeviOPTools v0.4.0
20:27:01.953 INFO [LeviOPTools] Saving default configurations
20:27:01.968 INFO [LeviOPTools] 作者: engsr6982
20:27:01.968 INFO [LeviOPTools] 支持 Bedrock Dedicated Server协议 662
20:27:01.968 INFO [LeviLamina] LeviOPTools 已加载
20:27:02.015 INFO [LeviLamina] 已加载 2 个插件
20:27:02.031 INFO [Server] setting up server logging...
20:27:02.031 INFO [Server] Starting Server
20:27:02.031 INFO [Server] Version: 1.20.72.01(ProtocolVersion 662) with LeviLamina-0.11.0+09a67511f
20:27:02.031 INFO [Server] Session ID: 917646d7-96bd-4fcb-a6c7-0f2a3248851d
20:27:02.031 INFO [Server] Build ID: 22930276
20:27:02.031 INFO [Server] Branch: r/20_u7
20:27:02.031 INFO [Server] Commit ID: ff4a891b1b857e1e4dbd75155321fe8f6c139917
20:27:02.031 INFO [Server] Configuration: Publish
20:27:02.047 INFO [Server] Level Name: Bedrock level
20:27:02.047 INFO [Server] No CDN config file found for dedicated server
20:27:02.047 INFO [Server] Game mode: 0 Survival
20:27:02.047 INFO [Server] Difficulty: 1 EASY
20:27:02.047 INFO [Server] Content logging to console is enabled.
20:27:03.251 INFO [Server] Opening level 'worlds/Bedrock level/db'
20:27:07.209 INFO [Server] IPv4 supported, port: 19132: Used for gameplay and LAN discovery
20:27:07.209 INFO [Server] IPv6 supported, port: 19133: Used for gameplay
20:27:07.287 INFO [Server] Server started in (5.7s)! For help, type "help" or "?"
20:27:07.287 INFO [Server] ================ TELEMETRY MESSAGE ===================
20:27:07.287 INFO [Server] Server Telemetry is currently not enabled.
20:27:07.287 INFO [Server] Enabling this telemetry helps us improve the game.
20:27:07.287 INFO [Server]
20:27:07.287 INFO [Server] To enable this feature, add the line 'emit-server-telemetry=true'
20:27:07.287 INFO [Server] to the server.properties file in the handheld/src-server directory
20:27:07.287 INFO [Server] ======================================================
20:27:07.303 INFO [LeviLamina] 正在启用插件...
20:27:07.303 INFO [LeviLamina] 正在启用 PermissionCore v0.7.0
20:27:07.303 INFO [PermissionCore] Enabling...
20:27:07.303 INFO [LeviLamina] 正在启用 LeviOPTools v0.4.0
20:27:07.303 INFO [LeviOPTools] Enabling...
20:27:07.303 INFO [PermissionCore] 初始化插件 'LeviOPTools' 权限数据成功
20:27:07.303 INFO [LeviOPTools] 注册权限成功。 权限总数： 24
20:27:07.303 WARN [LeviOPTools] motd file not found!
20:27:07.303 INFO [LeviLamina] 2 个插件在 (0.0秒) 内启用
```

:::note
至此，插件安装成功。  
如果你遇到了任何问题，欢迎在[Github Issue](https://github.com/engsr6982/LeviOPTools/issues)提交。  
或者回到主页，点击链接进入 QQ 群反馈。
:::