2016.10.20
框架整体规划
1.封装公共工具类
移动适屏类 utils/ScaleTool.ts

基础http请求类 net/BaseHttpRequest.ts


2.建立类似mvc代码结构标准

3.log工具

2016.10.20
创建适用于白鹭开发的框架，封装公共工具，结构化项目目录。

2016.10.27
基础结构定型

src--
    Main.ts
        需要初始化框架。
        1.初始化适屏类
        2.创建视图层
        *.显示log
        3.初始化视图层



框架目录详解
    ffw--
        config--
            FrameworkConfig.ts--框架配置文件
        msg--
            Msg.ts--简单封装全局消息监听及发送，如果项目使用该框架，统一使用该类进行内部消息传递
        net--
            BaseHttpRequest.ts--基础封装了发送post/get的http请求工具类。
            BaseWebSocket.ts--基础的机型websocket通信工具类。
        utils--
            UtilsClass--
                BitmapBlink.ts--位图闪烁工具类.
                TipsUtils.ts--提示特效文字工具类.
            EffectUtiles.ts--动画特效类，用于给组件附加各种动画效果。
            md5.ts--加密工具类
            RegUtils.ts--正则表达式工具类，进行数据格式校验（邮箱/手机号码格式校验）。
            ScaleTool.ts--适屏类
        log--
            Logger.ts--进行界面日志输出，用于解决手机无法进行开发者调试等情况。
        readme.txt--说明文件。
