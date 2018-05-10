module game {
	export class GameView extends egret.DisplayObjectContainer{

		//res loading
		private resLoadingView:utils.ResLoadingView;

		//ui
		private gamePanel:game.ui.GamePanel;


		public constructor() {
			super();

			this.addEventListener(egret.Event.ADDED_TO_STAGE,this.AddToStageHandler,this);
			this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.RemoveFromStageHandler,this);
		}

		private AddToStageHandler(e:egret.Event):void{
			this.resLoadingView = new utils.ResLoadingView();
			this.resLoadingView.addEventListener(utils.ResLoadingView.RES_LOAD_COMPLETE,this.onResLoadingCompleteHandler,this);
			this.addChild(this.resLoadingView);
			this.resLoadingView.setLoadResGroup(['game'],[]);
		}

		private RemoveFromStageHandler(e:egret.Event):void{
			
		}

		private onResLoadingCompleteHandler(e:egret.Event):void{
			this.onInitView();
		}

		private onInitView():void{
			this.gamePanel = new game.ui.GamePanel();
			this.gamePanel.width = ffw.ScaleTool.stageW;
			this.gamePanel.height = ffw.ScaleTool.stageH;
			this.addChild(this.gamePanel);
		}
	}
}