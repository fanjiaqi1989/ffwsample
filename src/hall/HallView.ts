module hall {
	export class HallView extends egret.DisplayObjectContainer {

		private resLoadingView:utils.ResLoadingView;

		private hallPanel:hall.ui.HallPanel;

		public constructor() {
			super();

			this.addEventListener(egret.Event.ADDED_TO_STAGE,this.AddToStageHandler,this);
			this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.RemoveFromStageHandler,this);
		}

		private AddToStageHandler(e:egret.Event):void{
			this.resLoadingView = new utils.ResLoadingView();
			this.addChild(this.resLoadingView);
			this.resLoadingView.setLoadResGroup([],[],this.onInitView);
		}

		private RemoveFromStageHandler(e:egret.Event):void{

		}

		private onInitView():void{
			this.hallPanel = new hall.ui.HallPanel();
			this.hallPanel.width = ffw.ScaleTool.stageW;
			this.hallPanel.height = ffw.ScaleTool.stageH;
			this.addChild(this.hallPanel);
		}
	}
}