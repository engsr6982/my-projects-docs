---
sidebar_position: 2
---

# 主页表单

LeviOPTools也实现了与Js版本一样的根据配置文件构建表单

示例配置

```js title="plugins/LeviOPTools/form/index.json"
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

| callbackType | 描述              |
| ------------ | ----------------  |
| cmd          | 执行命令          |
| form         | 打开另一个表单文件 |
| function     | 运行插件内部函数   |
