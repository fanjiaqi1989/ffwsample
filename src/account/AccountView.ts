module account {
	export class AccountView extends egret.DisplayObjectContainer {

		private resLoadingView:utils.ResLoadingView;

		private accoutPanel:account.ui.AccountPanel;

		public constructor() {
			super();

			this.addEventListener(egret.Event.ADDED_TO_STAGE,this.AddToStageHandler,this);
			this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.RemoveFromStageHandler,this);
		}

		private AddToStageHandler(e:egret.Event):void{
			this.resLoadingView = new utils.ResLoadingView();
			this.resLoadingView.addEventListener(utils.ResLoadingView.RES_LOAD_COMPLETE,this.onResLoadingCompleteHandler,this);
			this.addChild(this.resLoadingView);
			this.resLoadingView.setLoadResGroup([],[]);
		}

		private RemoveFromStageHandler(e:egret.Event):void{

		}

		private onResLoadingCompleteHandler(e:egret.Event):void{
			this.onInitView();
		}

		private onInitView():void{
			this.accoutPanel = new account.ui.AccountPanel();
			this.accoutPanel.width = ffw.ScaleTool.stageW;
			this.accoutPanel.height = ffw.ScaleTool.stageH;
			this.addChild(this.accoutPanel);
		}
	}
}