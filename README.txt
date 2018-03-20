2018.03.06
this is a egret framework sample project.
主要面对中小型项目开发框架。
主要功能：

1.视图规范
    资源规范  app预加载 preload
    剩下各自模块的资源自行加载 ResLoadingView
    添加mc loading动画示例
    添加粒子效果示例，看样子效率不是很高

    视图层的个界面管理原则：addToStage 和 removeFromStage
    

2.消息规范
    ffw.Msg.ins.disp
    该类定义了全局消息通信。小型项目使用该方法。

3.websocket
    添加WebSocket示例。

4.http request
    添加HttpRequest示例。
    
5.其他
如果使用eui则 已经进行了 mvc中 view和controller的分离，所以可精简开发。

egret 性能点
1.带动画的组件不使用需移除舞台。
2.addChild 和 removeChile次数过多会有性能问题。
3.自带的tween性能也不太高
4.遮罩存在性能问题（使用scroller的viewport做裁剪，把组件放入其中，关闭横竖滚动）
5.多对象需要内存池处理
