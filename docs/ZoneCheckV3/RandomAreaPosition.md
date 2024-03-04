---
sidebar_position: 5
---

# 随机坐标

:::tip

```json title="返回值"
{ "x": 0, "z": 0 }
```

:::

`RandomAreaPosition::getRandomCoordinateInCircle`  
在圆形区域内生成随机坐标

- 参数:  
  - x: `number`  
    圆心x轴坐标
  - z: `number`  
    圆心y轴坐标
  - radius: `number`  
    圆半径
- 返回值：`object`

`RandomAreaPosition::getRandomCoordinateInRectangle`  
在矩形区域内生成随机坐标

- 参数:  
  - topLeftX: `number`  
    矩形左上角的X坐标
  - topLeftZ: `number`  
    矩形左上角的Z坐标
  - bottomRightX: `number`  
    矩形右下角的X坐标
  - bottomRightZ: `number`  
    矩形右下角的Z坐标
- 返回值：`object`

`RandomAreaPosition::getRandomCoordinateInSquare`  
在正方形区域内生成随机坐标

- 参数:  
  - centerX : `number`  
    正方形中心点的X坐标
  - centerZ : `number`  
    正方形中心点的Z坐标
  - halfLength : `number`  
    半边长
- 返回值：`object`
