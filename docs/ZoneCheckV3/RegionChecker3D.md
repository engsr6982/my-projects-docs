---
sidebar_position: 3
---

# 3D检查

`RegionChecker3D::isWithinSphere`  
检查一个点是否在给定的球体内

- 参数:  
  - centerX : `number`  
  球心的X坐标
  - centerY : `number`  
  球心的Y坐标
  - centerZ : `number`  
  球心的Z坐标
  - width : `number`  
  球的半径
  - pointX : `number`  
  点的X坐标
  - pointY : `number`  
  点的Y坐标
  - pointZ : `number`  
  点的Z坐标
- 返回值：`boolean`

`RegionChecker3D::isWithinCuboid`  
检查一个点是否在给定的立方体内

- 参数:  
  - leftTopX : `number`  
  左上角的X坐标
  - leftTopY : `number`  
  左上角的Y坐标
  - leftTopZ : `number`  
  左上角的Z坐标
  - rightBottomX : `number`  
  右下角的X坐标
  - rightBottomY : `number`  
  右下角的Y坐标
  - rightBottomZ : `number`  
  右下角的Z坐标
  - pointX : `number`  
  点的X坐标
  - pointY : `number`  
  点的Y坐标
  - pointZ : `number`  
  点的Z坐标
- 返回值：`boolean`

`RegionChecker3D::isWithinCenteredCube`  
检查一个点是否在给定的以中心点为中心的立方体内

- 参数:  
  - centerX : `number`  
  中心点的X坐标
  - centerY : `number`  
  中心点的Y坐标
  - centerZ : `number`  
  中心点的Z坐标
  - distance : `number`  
  到立方体边的距离
  - x : `number`  
  点的X坐标
  - y : `number`  
  点的Y坐标
  - z : `number`  
  点的Z坐标
- 返回值：`boolean`
