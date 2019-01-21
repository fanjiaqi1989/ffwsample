# 2019.01.08
## 关于框架部分的功能
1. 资源管理 全局（公共）资源/单个view资源的加载与卸载
2. 音效管理 各模块互斥的音效控制
4. 场景管理--每个场景都包括上述三个子控制
5. 网络管理--长连接管理/短链接管理
## 关于游戏模块的功能
关于场景，游戏内容，功能，公共部分需要根据实际情况进行设计。

# 2018.12.18
## 关于游戏开发中MVC框架结构的思考
MVC最先被广泛应用在了Web开发中。由于WEB应用的页面化应用，使得单一页面都不会显得太过复杂。
而且由于WEB应用多数处理的情况都是各种数据交互，所以标准的MVC结构则能够很好的解耦ui与数据层，并且，对于大型
项目的横向扩展，有很强的可维护性。
早期的flash游戏中仍然推崇这种MVC架构设计，并且有著名的PureMVC的出现得以在较大型项目中实现团队开发。
但是，由于游戏与web应用有着明显的区别，所以直接套用MVC的设计模式，并不能很好的满足项目长期开发及维护的需求。
所以在这里记录下来近几年关于小游戏客户端架构方面的一些经验积累。
* 关于现有问题的提问

1. 底层开发人员并不能很好的理解MVC开发规范，并按照相应的需求建立起符合规范的类处理。
2. 游戏中有很多状态网络等功能的控制器，是否归入控制层还是独立出单独组件。
3. 游戏经常会遇到场景切换，如果使用单核MVC如何控制各个场景V&M的创建和销毁。
4. 使用框架势必造成开发周期变长，对于快速迭代的开发来说，是否框架能与之并存。

* 几种框架思路分析

1. 标准MVC单核开发
2. MVC根据游戏划分模块，进行多核开发，复杂度更高。
3. MVP开发，由于去除了V直接引用M，可以让MVC各个模块之前功能更为清晰。更为严格的类创建。
4. MVVM开发，视图依赖的开发模式。

* 分析

        创建基于VM结构的框架体系。
        然而，MVVM结构只能解决视图数据展现，而对于一个完整的app，则需要更高层级的管理。
        这里包括
        
1. 资源管理 全局（公共）资源/单个view资源的加载与卸载
2. 音效管理 各模块互斥的音效控制
3. 设置管理 全局（公共）设置/单个模块特殊设置
4. 场景管理--每个场景都包括上述三个子控制
5. 网络管理--长连接管理/短链接管理

# 2018.08.22
重新架构整理并细节所有问题，先提供棋牌类游戏设计架构。
关于单大厅，多游戏架构设计模式。彻底解耦基本模块。
    基于场景思维。

## 问题1，模块如何动态载入和删除
* 基于场景的全局控制

        场景是主要流程控制器，但是并不持有各模块，而是模块完全独立化。

模块下分

* 场景模块 

    -- 基于ffw.View类：通过ViewManager进行场景切换控制。而每个场景又是独立部分。

    --实行最基本的RES加载管理

    --视图树形组件的管理。

    --主流程驱动。
* 数据模块 

    -- 单例数据存储 
    两种思路 
    1. view <-- controller --> data -- net

            标准mvc模式，场景属于controller，view是场景组件，data则是由网络层驱动
    2. view -- data -- controller -- net

            由于游戏中不仅有数据流程，更多的逻辑流程，所以基于数据的流程则显得较难理解及控制。
                        <-->view
    net <--> controller  <-->data

所以场景就是逻辑流程的核心。场景持有该场景对应模块的 view net data 引用，并通过消息直接控制各模块的行为。
## 问题2，组件如何在不同模块进行复用
复用唯一问题在于资源是否能被提前加载，所以这里需提前分组到公共资源组进行加载。

每个模块设计其实就是对不同组件的组合而已，其实理论上所有组件都是可以被各个模块相互复用的。
但是由于程序要降低耦合，所以要尽量避免该种设计的发生。
总流程：
    --加载preload公共资源
    --初始化框架--注册场景
    --启动登陆场景
        --检测登陆状态--显示


场景的作用：相应模块请求，控制各模块的联系。相当于controller层。
由于标准mvc由controller持有view及mode实例，现扩展为持有模块实例，并管理控制实例。

登陆场景--场景数据--HTTP通信模块

大厅场景--场景数据--HTTP通信模块/大厅net模块

房间场景--场景数据--HTTP通信模块/大厅net模块

游戏A场景--场景数据--HTTP通信模块/大厅net模块/游戏Anet模块

scene:场景
游戏基本模块，每个场景有自己独立的数据（Model），并且可与相应的网络模块相对应，并负责网络模块的管理。

HTTP通信模块--大厅net模块--大厅场景--场景数据
                        --房间场景--场景数据
                        --游戏Anet模块--游戏A场景--场景数据

MSG:消息

DATA:数据

net:网络


# 2018.03.06
this is a egret framework sample project.

主要面对中小型项目开发框架。

理论应用：

关于mvc的使用

# 2018 04 08
关于开发框架的更新说明

其实在实际使用中，框架模式已经变成了MVP模式，即模型-视图-呈示器，最新演化为MVVM结构，而MVVM结构主要在于数据绑定，轻量级已经演化为VVM，即去掉视图层。

m--数据逻辑处理层
v--ui逻辑处理曾
c--调节m和v之间的关系
举例描述一个完成的mvc处理流程：

|V|C|M|
-|-|-
|1.点击界面上的登陆按钮||
||触发登陆操作：从view层获取用户输入交给Model层
|||Model组装通信需要的数据，请求服务器认证
|||此时通知控制层进入等待返回状态
||控制层收到登陆请求等待，通知view层锁定界面
|视图锁定
|||这时返回请求数据，进行解析
||控制层根据数据，进行对应的ui控制
||并通知view层解除锁定
|按照控制器规则操作
|

---
Model层--负责数据及业务逻辑处理

View层---负责UI显示及逻辑处理

Controller--负责解耦V/M层的关系

所以这种模块的分离，可以使view层人员不用关心model层具体的业务逻辑实现，而view层上的ui显示变动，也影响不到业务流程处理，达到代码分离，适合模块化的开发。并且在代码后期维护时，仍然保持各自模块的独立性，提高可维护性。
但是根据寡人多年开发的经验，标准的MVC结构仅适合于大型且复杂项目，因为本身模块化是很需要花时间，且由于模块化，增加了模块之间相互传递消息的逻辑，所以应视具体项目做合适的结构设定。


关于精简中小型项目模块划分
主要功能：

1. 视图规范

        资源规范  app预加载 preload
        剩下各自模块的资源自行加载 ResLoadingView
        添加mc loading动画示例
        添加粒子效果示例，看样子效率不是很高

        视图层的个界面管理原则：addToStage 和 removeFromStage
    

2. 消息规范

        ffw.Msg.ins.disp
        该类定义了全局消息通信。小型项目使用该方法。

3. websocket

        添加WebSocket示例。

4. http request

        添加HttpRequest示例。
    
5. 其他

    如果使用eui则 已经进行了 mvc中 view和controller的分离，所以可精简开发。

egret 性能点

1. 带动画的组件不使用需移除舞台。
2. addChild 和 removeChile次数过多会有性能问题。
3. 自带的tween性能也不太高
4. 遮罩存在性能问题（使用scroller的viewport做裁剪，把组件放入其中，关闭横竖滚动）
5. 多对象需要内存池处理