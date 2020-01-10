# snake (自走贪吃蛇)

## 基础布局
```
此项目是一个练习的贪吃蛇项目，正在开发中的，以下是遇到得得问题
    1）循环数组布局
    2）寻找蛇身的位置   
        蛇头碰到蛇身或者碰到墙游戏结束   
        获取方向，通过方向keyCode码反向查找(就是第一个蛇身)  
        获取到蛇的头，然后获取四周上下左右，获取到蛇身，依次获取  
        首先从舌头的四周找第一个蛇身，然后从蛇身最后，判断最后一个三周都是0，那个就是蛇尾

        收获：把常用的数据赋值给变量调用，可增加可维护性
```
## 定义常用的常量
| 数字  |  备注 |
| ------------ | ------------ |
|  0 |  空格 |
|  1 |   蛇头（red） |
|  2 |  蛇身 （green） |
|  3 |  食物 （violet） |
|  37/38/39/40 |  拐弯方向(蛇身)(左/上/右/下)寻找蛇尾设计 |

## 遇到的问题
###问题1
```
用于判断前进的下一步是不是边缘
infoX - 1 >= 0 && infoX + 1 < 30 && infoY - 1 >= 0 && infoY + 1 < 30
第二个条件异常false
后来排查发现，下标+数组被识别为字符串拼接，强转数组在进行加可修复
```
### 问题2
```
问题2：拐弯，蛇尾前进到拐弯处，的判断，导致蛇尾丢失。解决方案(从蛇从按照方向，寻找，定义最后一个为蛇尾)
```
### 问题3
```
问题：触发左方向时，当蛇达成直线时，任何事件触发没有响应
```
### 问题4
```
蛇头和蛇尾两重拐弯时会出现错误
```
### 蛇尾移动的方法
```
问题3和问题4待解决，
蛇尾行走方是，是循环获取到蛇尾，直线判断，可行走，
遇到拐弯的时候从蛇头循环查到到蛇尾，在行走，
```
### 1.2解决方案
```
新解决方案，取消掉蛇尾，直接从蛇头找失败，
问题在于蛇身的定义，在拐弯的时候，是按照蛇头的反方向寻找蛇尾设计，所以原方向会出现丢失的情况
``

