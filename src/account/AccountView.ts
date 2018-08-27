module account {
	export class AccountView extends egret.DisplayObjectContainer implements ffw.IView {

		private accoutPanel:account.ui.AccountPanel;

		public constructor() {
			super();
		}

		public onInitView():void{
			this.accoutPanel = new account.ui.AccountPanel();
			this.accoutPanel.width = ffw.ScaleTool.stageW;
			this.accoutPanel.height = ffw.ScaleTool.stageH;
			this.addChild(this.accoutPanel);
		}

		public onRemoveView():void{
			
		}
	}
}