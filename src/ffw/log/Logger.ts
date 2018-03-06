module ffw {
	/**
	 * 调试工具 用于解决手机无法使用开发者模式
	 * 推荐使用浏览器的console进行输出，仅在有需要的时候使用此工具。
	 * 注意：该工具必需添加在ui最上层，以确保程序运行中不会被遮挡。
	 */
	export class Logger extends egret.Sprite {

		private darkSprite:egret.Sprite;

		private label:egret.TextField;

		private static _ins:ffw.Logger;
		
		public static get ins():ffw.Logger{
			if(ffw.Logger._ins==null){
				ffw.Logger._ins = new ffw.Logger();
			}

			return ffw.Logger._ins;
		}

		public constructor() {
			super();

			if(true){
				this.darkSprite = new egret.Sprite();
				this.darkSprite.graphics.clear();
				this.darkSprite.graphics.beginFill(0x000000, 0.3);
				this.darkSprite.graphics.drawRect(0, 0, ffw.ScaleTool.stageW, ffw.ScaleTool.stageH);
				this.darkSprite.graphics.endFill();
				this.darkSprite.width = ffw.ScaleTool.stageW;
				this.darkSprite.height = ffw.ScaleTool.stageH;
				this.addChild(this.darkSprite);

				this.label = new egret.TextField();
				this.label.size = 18;
				this.label.width = ffw.ScaleTool.stageW;
				this.label.height = ffw.ScaleTool.stageH;
				this.label.textColor = 0xffffff;
				this.label.strokeColor = 0x000000;
				this.label.stroke = 1;
				this.addChild(this.label);

			}
		}



		/**
		 * 打印信息
		 */
		public trace(str:string):void{
			this.label.appendText("["+RegUtils.GetNowDate()+"]"+str+"\n");
		}

	}
}