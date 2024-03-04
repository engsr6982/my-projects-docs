---
sidebar_position: 2
---

# 2D检查

`RegionChecker2D::isWithinRadius`  
检查一个点是否在给定的圆内

- 参数:  
  - centerX : `number`  
  圆心的X坐标
  - centerZ : `number`  
  圆心的Z坐标
  - width: `number`  
   圆的半径
  - pointX: `number`  
  点的X坐标
  - pointZ: `number`  
  点的Z坐标
- 返回值：`boolean`

`RegionChecker2D::isWithinRectangle`  
检查一个点是否在给定的矩形内

- 参数:  
  - leftTopX : `number`  
  左上角的X坐标
  - leftTopZ : `number`  
  左上角的Z坐标
  - rightBottomX: `number`  
  右下角的X坐标
  - rightBottomZ: `number`  
  右下角的Z坐标
  - pointX : `number`  
  点的X坐标
  - pointZ : `number`  
  点的Z坐标
- 返回值：`boolean`

`RegionChecker2D::isWithinCenteredSquare`  
检查一个点是否在给定的以中心点为中心的正方形内

- 参数:  
  - centerX : `number`  
  中心点的X坐标
  - centerZ : `number`  
  中心点的Z坐标
  - distance : `number`  
  到正方形边的距离
  - x : `number`  
  点的X坐标
  - z : `number`  
  点的Z坐标
- 返回值：`boolean`
