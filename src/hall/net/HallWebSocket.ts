module hall.net {
	/**
	 * 该类完全处理网络相关逻辑
	 * 若外界调用连接，则表示一定是正常游戏，view当在转播逻辑时是不会触发网络连接流程的
	 * 连接等待，通知view层等待连接
	 * [断线重连]连接成功，通知view继续下一步逻辑，同时启动心跳计时器，当心跳计时器超时，则先关闭现在socket后进行重新连接。
	 * [断线重连]连接失败，关闭当前socket，重新连接。（延时）
	 * 
	 * 当游戏结束，view曾通知socket层关闭连接，并不必进行断线重连。
	 */
	export class HallWebSocket{

		public static ON_SOCKET_OPEN:string = "HallWebSocket_ON_SOCKET_OPEN";
		public static ON_SOCKET_CLOSE:string = "HallWebSocket_ON_SOCKET_CLOSE";
		public static ON_SOCKET_IOERROR:string = "HallWebSocket_ON_SOCKET_IOERROR";

		private static _ins:HallWebSocket;
		public static get ins():HallWebSocket{
			if(HallWebSocket._ins==null){
				HallWebSocket._ins = new HallWebSocket();
			}
			return HallWebSocket._ins;
		}

		//=================================================
		public sock: egret.WebSocket;
		public senderHandler: HallSocketSendHandler;
		private recevieHandler: HallSocketReceiveHandler;
		//是否正在连接，如果正在连接，并没有返回，不进行重连处理，防止异步多socket被重复连接
		public isConnecting:boolean =false;
		//是否已经连接
		public isConnected: boolean = false;
		//游戏是否已经结束
		public isGameEnd:boolean = true;
		//重连服务器延迟
		private intervalConnect:number = 2000;	
		//心跳计时器
		private heartBeatTimer:egret.Timer;	
		public heartCount:number = 0;	
		public heartDelay:number = 0;
		
		public constructor() {
			// this.pbfac = new commons.PbFactory("appprotobuf_txt");
			this.senderHandler = new HallSocketSendHandler(this);
			this.recevieHandler = new HallSocketReceiveHandler();
			//心跳计数器
			this.heartBeatTimer = new egret.Timer(1000*10,0);
			this.heartBeatTimer.addEventListener(egret.TimerEvent.TIMER,this.onHeartBeatTimerHandler,this);
		}

		public connectSocket() {
			this.isGameEnd = false;
			//判断是否已经连接过服务器，避免重复连接
			if (this.isConnected || this.isConnecting) {
				console.log("重复连接socket。");
				return;
			}
			if (this.sock == null) {
				this.sock = new egret.WebSocket();//后期预留多socket
				this.sock.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
				this.sock.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
				this.sock.addEventListener(egret.Event.CLOSE, this.onSocketClose, this);
				this.sock.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketIOError, this);
			}
			this.sock.connect(AppConf.ins.hallWebSocket_IP, AppConf.ins.hallWebSocket_PORT);
			this.isConnecting = true;
			this.isConnected = false;
			console.log("连接服务器："+AppConf.ins.hallWebSocket_IP+"/"+AppConf.ins.hallWebSocket_PORT);
		}
		/**客户端主动关闭socket 游戏结束 退出当前游戏前调用 */
		public CloseSocket():void
		{
			this.isConnecting = false;
			this.isConnected = false;
			this.isGameEnd = true;
			this.heartBeatTimer.stop();
			if(this.sock){
				this.sock.close();
				this.sock.removeEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
				this.sock.removeEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
				this.sock.removeEventListener(egret.Event.CLOSE, this.onSocketClose, this);
				this.sock.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketIOError, this);
				console.log("socket主动关闭！");
				this.sock = null;
			}
		}

		//接受返回消息
		private onReceiveMessage(): void {
			this.heartCount = 0;
			// let byte: egret.ByteArray = new egret.ByteArray();
			// byte.endian = egret.Endian.LITTLE_ENDIAN;
			// this.sock.readBytes(byte);
			// this.recevieHandler.onDataPackReceive(msg.body, msg.id, msg.result);
			let msg = this.sock.readUTF();
			this.recevieHandler.onMsgReceive(msg);
    		console.log("收到数据：" + msg);
		}

		public sendUTFMessage(str:string):void{
			console.log("发送数据：" + str);
			this.sock.writeUTF(str);
		}

		//向服务器发送pb数据
		public sendPbMessage(data: egret.ByteArray): void {
			if(this.isConnected == false){
				console.log("网络未连接，消息发送失败。");
				return;
			}
			this.sock.writeBytes(data);
		}

		/**
		 * 设置socket通信类型 二进制、字符串
		 * @param egret.WebSocket.TYPE_BINARY
		 */
		public setWebSocketType(type: string): void {
			this.sock.type = type;
		}

		//连接成功
		private onSocketOpen(): void {
			this.isConnected = true;
			this.isConnecting = false;
			// this.setWebSocketType(egret.WebSocket.TYPE_BINARY); 	
			console.log("socket 连接成功！");
			ffw.Msg.ins.dispatchEventWith(HallWebSocket.ON_SOCKET_OPEN);
			
			//启动心跳计时器
			this.heartCount = 0;
			this.heartBeatTimer.start();
		}

		//socket 关闭
		private onSocketClose(): void {
			this.isConnected = false;
			this.isConnecting = false;
			this.heartBeatTimer.stop();
			console.log("socket 关闭！");
			if(this.sock){
				this.sock.removeEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
				this.sock.removeEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
				this.sock.removeEventListener(egret.Event.CLOSE, this.onSocketClose, this);
				this.sock.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketIOError, this);
				this.sock = null;
			}
			if(!this.isGameEnd){
				egret.setTimeout(this.connectSocket,this,this.intervalConnect);
			}
		}

		//socket io错误
		private onSocketIOError(): void {
			this.isConnected = false;
			this.isConnecting = false;
			this.heartBeatTimer.stop();
			console.log("socket io错误！");
			if(this.sock){
				this.sock.removeEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
				this.sock.removeEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
				this.sock.removeEventListener(egret.Event.CLOSE, this.onSocketClose, this);
				this.sock.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketIOError, this);
				this.sock = null;
			}
			if(!this.isGameEnd){
				egret.setTimeout(this.connectSocket,this,this.intervalConnect);
			}
		}
		/**
		 * 理论上来说，用户联网情况可分为以下几种（web情况）移动端状况各异，所以完美解决方法是同时监听ioerror 和close
		 * 1.直接断网连接----》io错误 socket close
		 * 2.连接路由断网----》等超时时间 io错误 socket close
		 * 3.中途忽然直接中断----》socket close
		 * 4.中途忽然路由断网----》无任何反应
		 * 5.服务器主动关闭socket----》socket close
		 * 所以断网状态都集中在socketclose中去处理。
		 */

		/**心跳断线检测 */
		private onHeartBeatTimerHandler(e:egret.TimerEvent):void{
			if(this.heartCount>=3){
				this.onSocketClose();
			}else{
				this.heartCount++;
				// this.senderHandler.
			}
		}

	}
}