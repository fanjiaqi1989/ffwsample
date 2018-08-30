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
			let url:string = "";
			let params:string = "aa=1&bb=asdf&token=asdf";
			ffw.BaseHttpRequest.sendRequestPostOnce(url,this.onLoginReqSuccessHandler,this.onLoginReqErrorHandler,this);
		}

		private onLoginReqSuccessHandler(e:egret.Event):void{
			let data = (e.target as egret.URLLoader).data;
			TipsUtils.showTipsDownToUp("login success");
			ffw.ViewManager.ins.showView(VIEWTYPE.HALL);
		}

		private onLoginReqErrorHandler(e:egret.Event):void{
			let data = (e.target as egret.URLLoader)._status;
			TipsUtils.showTipsDownToUp("login error");
			ffw.ViewManager.ins.showView(VIEWTYPE.HALL);
		}
	}
}