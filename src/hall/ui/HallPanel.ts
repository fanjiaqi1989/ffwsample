module hall.ui {
	export class HallPanel extends eui.Component implements eui.UIComponent{

		private return_btn:eui.Button;

		private send_btn:eui.Button;
		private msg_txt:eui.TextInput;

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

			this.return_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClickReturnBtnHandler,this);
			this.send_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClickSendBtnHandler,this);
		}

		private onClickReturnBtnHandler(e:egret.TouchEvent):void{
			ViewManager.ins.showAccountView();
		}

		private onClickSendBtnHandler(e:egret.TouchEvent):void{
			hall.net.HallWebSocket.ins.sendUTFMessage(this.msg_txt.text);
		}
	}
}