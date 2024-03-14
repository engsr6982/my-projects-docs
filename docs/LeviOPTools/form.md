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
      "title": "button1", // 按钮表单
      "imageUrl": "", // 按钮图片地址
      "imageType": "", // 图片类别 url 或 path
      "callbackType": "", // 回调类别
      "callbackRun": "" // 回调执行的东西
    },
    {
      "title": "button2(image error)",
      "imageUrl": "a",
      "imageType": "a", // type不能填错，填错这个按钮将不会显示
      "callbackType": "",
      "callbackRun": ""
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
