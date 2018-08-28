module account {
	export class AccountView extends ffw.View {

		private viewdata:AccountData;

		private accoutPanel:account.ui.AccountPanel;

		private registPanel:egret.Sprite;

		public constructor() {
			super();
		}

		public onLoadRes(){
			super.onLoadRes();
			
		}
		public onInitView():void{

			this.viewdata = AccountData.ins;

			this.accoutPanel = new account.ui.AccountPanel();
			this.accoutPanel.width = ffw.ScaleTool.stageW;
			this.accoutPanel.height = ffw.ScaleTool.stageH;
			this.addChild(this.accoutPanel);
		}

		public onRemoveView():void{
			
		}
		public onDestroyRes():void{
			super.onDestroyRes();
		}
	}
}