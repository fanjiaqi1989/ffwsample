module hall {
	export class HallView extends egret.DisplayObjectContainer {
		//res loading
		private resLoadingView:utils.ResLoadingView;

		//ui
		private hallPanel:hall.ui.HallPanel;

		//components
		private system:particle.GravityParticleSystem;



		public constructor() {
			super();

			this.addEventListener(egret.Event.ADDED_TO_STAGE,this.AddToStageHandler,this);
			this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.RemoveFromStageHandler,this);
		}

		private AddToStageHandler(e:egret.Event):void{
			this.resLoadingView = new utils.ResLoadingView();
			this.resLoadingView.addEventListener(utils.ResLoadingView.RES_LOAD_COMPLETE,this.onResLoadingCompleteHandler,this);
			this.addChild(this.resLoadingView);
			this.resLoadingView.setLoadResGroup(["hall"],[]);
		}

		private RemoveFromStageHandler(e:egret.Event):void{
			net.HallWebSocket.ins.CloseSocket();
		}

		private onResLoadingCompleteHandler(e:egret.Event):void{
			this.onInitView();
		}

		private onInitView():void{
			this.hallPanel = new hall.ui.HallPanel();
			this.hallPanel.width = ffw.ScaleTool.stageW;
			this.hallPanel.height = ffw.ScaleTool.stageH;
			this.addChild(this.hallPanel);

			//添加点击粒子效果
			var texture = RES.getRes("snowParticle_png");
			var config = RES.getRes("snowParticle_json");
			this.system = new particle.GravityParticleSystem(texture, config);
			this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onStageTouchTapHandler,this);
			//将例子系统添加到舞台
			this.addChild(this.system);

			//websocket
			// ffw.Msg.ins.addEventListener(net.HallWebSocket.ON_SOCKET_OPEN,this.onSocketOpenHandler,this);
			// ffw.Msg.ins.addEventListener(HallMessage.RECIEVE_UTF_MESSAGE,this.RECIEVE_UTF_MESSAGE,this);
			net.HallWebSocket.ins.connectSocket();

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
			var msg:string = e.data;
			this.hallPanel.addLabelScrollerText(msg);
		}

		
	}
}