---
sidebar_position: 4
---

# 边界检查

:::tip

```js title="返回值"
{
  "axis": 0,
  "value": 0,
  "boundary": 0
}
```

:::

## 2D

`BoundaryChecker::is2D::getExceededBoundaryCircle2D`  
获取超出2D圆形边界的信息

- 参数:  
  - centerX: `number`  
  圆心的X坐标
  - centerZ: `number`  
  圆心的Z坐标
  - width: `number`  
   圆的宽度
  - x : `number`  
  点的X坐标
  - z : `number`  
  点的Z坐标
- 返回值：`object`

`BoundaryChecker::is2D::getExceededBoundaryRectangle2D`  
获取超出2D矩形边界的信息

- 参数:  
  - minX : `number`  
  矩形左上角的X坐标
  - minZ : `number`  
  矩形左上角的Z坐标
  - maxX : `number`  
  矩形右下角的X坐标
  - maxZ : `number`  
  矩形右下角的Z坐标
  - x : `number`  
  点的X坐标
  - z : `number`  
  点的Z坐标
- 返回值：`object`

`BoundaryChecker::is2D::getExceededCenteredBoundary2D`  
获取超出以中心点为中心的2D正方形边界的信息

- 参数:  
  - centerX: `number`  
   中心点的X坐标
  - centerZ: `number`  
   中心点的Z坐标
  - width : `number`  
  正方形的宽度
  - x : `number`  
  点的X坐标
  - z : `number`  
  点的Z坐标
- 返回值：`object`

## 3D

`BoundaryChecker::is3D::getExceededBoundaryCircle3D`  
获取超出3D圆形边界的信息

- 参数:  
  - centerX  : `number`  
  圆心的X坐标
  - centerY  : `number`  
  圆心的Y坐标
  - centerZ  : `number`  
  圆心的Z坐标
  - width  : `number`  
  圆的半径
  - x : `number`  
  点的X坐标
  - y : `number`  
  点的Y坐标
  - z : `number`  
  点的Z坐标
- 返回值：`object`

`BoundaryChecker::is3D::getExceededBoundaryCube3D`  
获取超出3D立方体边界的信息

- 参数:  
  - minX : `number`  
  立方体左上角的X坐标
  - minY : `number`  
  立方体左上角的Y坐标
  - minZ : `number`  
  立方体左上角的Z坐标
  - maxX : `number`  
  立方体右下角的X坐标
  - maxY : `number`  
  立方体右下角的Y坐标
  - maxZ : `number`  
  立方体右下角的Z坐标
  - x  : `number`  
  点的X坐标
  - y  : `number`  
  点的Y坐标
  - z  : `number`  
  点的Z坐标
- 返回值：`object`

`BoundaryChecker::is3D::getExceededCenteredBoundary3D`  
获取超出以中心点为中心的3D立方体边界的信息

- 参数:  
  - centerX : `number`  
  中心点的X坐标
  - centerY : `number`  
  中心点的Y坐标
  - centerZ : `number`  
  中心点的Z坐标
  - width: `number`  
  立方体的宽度
  - x : `number`  
  点的X坐标
  - y : `number`  
  点的Y坐标
  - z : `number`  
  点的Z坐标
- 返回值：`object`
