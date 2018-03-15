
var game_file_list = [
    //以下为自动修改，请勿修改
    //----auto game_file_list start----
	"libs/modules/egret/egret.js",
	"libs/modules/egret/egret.native.js",
	"libs/modules/eui/eui.js",
	"libs/modules/res/res.js",
	"libs/modules/tween/tween.js",
	"libs/modules/socket/socket.js",
	"libs/modules/game/game.js",
	"libs/modules/dragonBones/dragonBones.js",
	"libs/modules/particle/particle.js",
	"libs/modules/Zlib/Zlib.js",
	"libs/modules/ProtoBuf/ProtoBuf.js",
	"polyfill/promise.js",
	"bin-debug/account/AccountView.js",
	"bin-debug/ffw/utils/ResLoadingView.js",
	"bin-debug/account/ui/AccountPanel.js",
	"bin-debug/AppConf.js",
	"bin-debug/AssetAdapter.js",
	"bin-debug/ffw/config/FrameworkConfig.js",
	"bin-debug/ffw/log/Logger.js",
	"bin-debug/ffw/msg/Msg.js",
	"bin-debug/ffw/net/BaseHttpRequest.js",
	"bin-debug/ffw/net/BaseWebSocket.js",
	"bin-debug/ffw/utils/EffectUtils.js",
	"bin-debug/ffw/utils/LoadingMask.js",
	"bin-debug/ffw/utils/md5.js",
	"bin-debug/ffw/utils/PopUpManager.js",
	"bin-debug/ffw/utils/RegUtils.js",
	"bin-debug/account/AccountData.js",
	"bin-debug/ffw/utils/ScaleTool.js",
	"bin-debug/ffw/utils/UtilsClass/BitmapBlink.js",
	"bin-debug/ffw/utils/UtilsClass/TipsUtils.js",
	"bin-debug/game/GameView.js",
	"bin-debug/hall/HallView.js",
	"bin-debug/hall/HallViewData.js",
	"bin-debug/hall/net/HallProtocol.js",
	"bin-debug/hall/net/HallSocketReceiveHandler.js",
	"bin-debug/hall/net/HallSocketSendHandler.js",
	"bin-debug/hall/net/HallWebSocket.js",
	"bin-debug/hall/ui/HallPanel.js",
	"bin-debug/LoadingUI.js",
	"bin-debug/Main.js",
	"bin-debug/ThemeAdapter.js",
	"bin-debug/ViewManager.js",
	//----auto game_file_list end----
];

var window = this;

egret_native.setSearchPaths([""]);

egret_native.requireFiles = function () {
    for (var key in game_file_list) {
        var src = game_file_list[key];
        require(src);
    }
};

egret_native.egretInit = function () {
    if(egret_native.featureEnable) {
        //控制一些优化方案是否开启
        var result = egret_native.featureEnable({
            
        });
    }
    egret_native.requireFiles();
    //egret.dom为空实现
    egret.dom = {};
    egret.dom.drawAsCanvas = function () {
    };
};

egret_native.egretStart = function () {
    var option = {
        //以下为自动修改，请勿修改
        //----auto option start----
		entryClassName: "Main",
		frameRate: 30,
		scaleMode: "fixedHeight",
		contentWidth: 1136,
		contentHeight: 640,
		showPaintRect: false,
		showFPS: false,
		fpsStyles: "x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.9",
		showLog: false,
		logFilter: "",
		maxTouches: 2,
		textureScaleFactor: 1
		//----auto option end----
    };

    egret.native.NativePlayer.option = option;
    egret.runEgret();
    egret_native.Label.createLabel("/system/fonts/DroidSansFallback.ttf", 20, "", 0);
    egret_native.EGTView.preSetOffScreenBufferEnable(true);
};