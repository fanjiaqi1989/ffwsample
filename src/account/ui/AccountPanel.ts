module account.ui {
	export class AccountPanel extends eui.Component implements eui.UIComponent{
		

		private login_panel:eui.Panel;

		public constructor() {
			super();
		}

		protected partAdded(partName:string,instance:any):void
		{
			super.partAdded(partName,instance);
		}


		protected childrenCreated():void
		{
			super.childrenCreated();
			this.login_panel.titleDisplay.text = "登陆面板";
			this.login_panel.closeButton.label = "登陆";
			this.login_panel.addEventListener(eui.UIEvent.CLOSING,this.onClickLoginHandler,this);
		}

		private onClickLoginHandler(e:eui.UIEvent):void{
			e.preventDefault();
			console.log("切换到大厅界面");
			ViewManager.ins.showHallView();
		}
	}
}