module hall {
	export class HallView extends ffw.View {
		//ui
		private hallPanel:hall.ui.HallPanel;

		//components
		private system:particle.GravityParticleSystem;

		public constructor() {
			super();
		}

		public onLoadRes(){
			super.onLoadRes(["hall"],[]);
		}
		

		public onInitView():void{

			this.hallPanel = new hall.ui.HallPanel();
			this.hallPanel.width = ffw.ScaleTool.stageW;
			this.hallPanel.height = ffw.ScaleTool.stageH;
			this.addChild(this.hallPanel);

			//添加点击粒子效果
			let texture = RES.getRes("snowParticle_png");
			let config = RES.getRes("snowParticle_json");
			this.system = new particle.GravityParticleSystem(texture, config);
			this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onStageTouchTapHandler,this);
			//将例子系统添加到舞台
			this.addChild(this.system);

			//websocket
			// ffw.Msg.ins.addEventListener(net.HallWebSocket.ON_SOCKET_OPEN,this.onSocketOpenHandler,this);
			// ffw.Msg.ins.addEventListener(HallMessage.RECIEVE_UTF_MESSAGE,this.RECIEVE_UTF_MESSAGE,this);
			net.HallWebSocket.ins.connectSocket();

		}

		public onRemoveView(){
			net.HallWebSocket.ins.CloseSocket();
		}

		private onStageTouchTapHandler(e:egret.TouchEvent):void{
			this.system.emitterX = e.stageX;
			this.system.emitterY = e.stageY;
			this.system.start();
			egret.setTimeout(this.system.stop,this.system,500);
		}

		/**socket 连接 */
		private onSocketOpenHandler(e:egret.Event):void{
			
		}
		/**收到服务器返回的消息 */
		private RECIEVE_UTF_MESSAGE(e:egret.Event):void{
			let msg:string = e.data;
			this.hallPanel.addLabelScrollerText(msg);
		}

		
	}
}