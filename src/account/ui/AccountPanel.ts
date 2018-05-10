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

			var str:string = "08 02 10 02";
			var strarr:Array<string> = str.split(' ');
			var msgBB: egret.ByteArray = new egret.ByteArray();

			for(var i=0;i<strarr.length;i++){
				var num:number = parseInt("0x"+strarr[i]);
				msgBB.writeByte(num);
			}

			msgBB.position = 0;

			var bytes = msgBB.buffer;
			
			var view: Uint8Array = new Uint8Array(msgBB.buffer);
            var log: string = "";
            for(var i: number = 0;i < view.length;i++) {
                var t: string = view[i].toString(16);
                if(t.length == 1) { 
                    t = "0" + t;
                }
                log+= t+" ";
            }
            console.log(log);

		}

		private onClickLoginHandler(e:eui.UIEvent):void{
			e.preventDefault();
			ViewManager.ins.showHallView();
			console.log("切换到大厅界面");
			return;
			var url:string = "http://www.asdfzxcv.com";
			var params:string = "aa=1&bb=asdf&token=asdf";
			ffw.BaseHttpRequest.sendRequestPostOnce(url,this.onLoginReqSuccessHandler,this.onLoginReqErrorHandler,this);
			
		}

		private onLoginReqSuccessHandler(e:egret.Event):void{
			var data = (e.target as egret.URLLoader).data;
			TipsUtils.showTipsDownToUp("login success");
			ViewManager.ins.showHallView();
		}

		private onLoginReqErrorHandler(e:egret.Event):void{
			var data = (e.target as egret.URLLoader)._status;
			TipsUtils.showTipsDownToUp("login error");
			ViewManager.ins.showHallView();
		}
	}
}