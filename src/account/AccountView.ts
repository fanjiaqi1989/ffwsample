module account {
	export class AccountView extends egret.DisplayObjectContainer {

		private accoutPanel:account.ui.AccountPanel;

		public constructor() {
			super();

			this.addEventListener(egret.Event.ADDED_TO_STAGE,this.AddToStageHandler,this);
			this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.RemoveFromStageHandler,this);
		}

		private AddToStageHandler(e:egret.Event):void{
			this.accoutPanel = new account.ui.AccountPanel();
			this.accoutPanel.width = ffw.ScaleTool.stageW;
			this.accoutPanel.height = ffw.ScaleTool.stageH;
			this.addChild(this.accoutPanel);
		}

		private RemoveFromStageHandler(e:egret.Event):void{

		}
	}
}