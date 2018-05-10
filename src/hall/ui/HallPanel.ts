module hall.ui {
	export class HallPanel extends eui.Component implements eui.UIComponent{
		//返回到登陆界面
		private return_btn:eui.Button;
		private entergame_btn:eui.Button;
		//发送socket聊天
		private send_btn:eui.Button;
		private msg_txt:eui.TextInput;

		//滚动文本
		private chatScroller:eui.Scroller;
		private chatLabel:eui.Label;

		//加载富文本显示
		private loadconf_btn:eui.Button;

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
			this.entergame_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClickEnterGameBtnHandler,this);
			this.send_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClickSendBtnHandler,this);
			this.loadconf_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClickLoadConfBtnHandler,this);
		}

		private onClickReturnBtnHandler(e:egret.TouchEvent):void{
			ViewManager.ins.showAccountView();
		}

		private onClickEnterGameBtnHandler(e:egret.TouchEvent):void{
			ViewManager.ins.showGameView();
		}

		private onClickSendBtnHandler(e:egret.TouchEvent):void{
			//通过socket 发送文本
			hall.net.HallWebSocket.ins.sendUTFMessage(this.msg_txt.text);

			//添加文本
			this.addLabelScrollerText(this.msg_txt.text);
			//清空输入文本
			this.msg_txt.text = "";
		}
		/**加载富文本 */
		private onClickLoadConfBtnHandler(e:egret.TouchEvent):void{
			var list:Array<any> = RES.getRes("description_json");
			var data:Array<string> = list[0].data;
			
			var result:string = "";
			for(var i=0;i<data.length;i++){
				result+=data[i];
			}
			this.chatLabel.textFlow = (new egret.HtmlTextParser).parser(data.toString());
		}

		/**
		 * 添加文本
		 */
		public addLabelScrollerText(txt:string):void{

			var currentData:string = (new Date()).toTimeString();
			txt = currentData +"\n"+txt;
			//显示聊天记录
			if(txt != ""){
					this.chatLabel.text +=  "\n" + txt;
			}else{
					this.chatLabel.text +=  txt;
			}
				
			//文本高度大于滚动容器高度时，将视口置于文本最后一行
			if(this.chatLabel.height > this.chatScroller.height){
					this.chatScroller.viewport.scrollV = this.chatLabel.height - this.chatScroller.height;
			}
		}
	}
}