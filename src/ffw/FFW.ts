module ffw {
	export class FFW {

		private static _ins:FFW;

		public constructor() {
		}

		public static get ins():FFW{
			if(FFW._ins == null){
				FFW._ins = new FFW();
			}
			return FFW._ins;
		}

		onInit(stage:egret.Stage):void{
			//初始化适屏控件
			ScaleTool.setParam(stage.stageWidth,stage.stageHeight);
			//初始化模块管理器及通信机制

			//初始化场景管理器
			stage.addChild(ViewManager.ins);
			
			
			console.log("FFW init complete!");
		}
	}
}