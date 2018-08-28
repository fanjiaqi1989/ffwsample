module ffw {
	/**
	 * 基础的websocket类
	 */
	export class BaseWebSocket {

		private static _ins:BaseWebSocket;

		public static get ins():BaseWebSocket{
			if (BaseWebSocket._ins == null) {
				BaseWebSocket._ins = new BaseWebSocket();
			}

			return BaseWebSocket._ins;
		}

	//--------------------------------------------------------------------------//

		//
		public static ON_SOCKET_CONNECT_SUCCESS: string = "ON_SOCKET_CONNECT_SUCCESS";
		public static ON_SOCKET_CONNECT_CLOSE: string = "ON_SOCKET_CONNECT_CLOSE";
		public static ON_SOCKET_IO_ERROR: string = "ON_SOCKET_IO_ERROR";

		private sock: egret.WebSocket = new egret.WebSocket();
		//心跳发送timer
		private heartTimer:egret.Timer = new egret.Timer(60000,0);
		//是否已经连接
		private isConnected: boolean = false;
		private serverIP: string = "";
		private serverPort: number = 80;

		public constructor() {
		}

		public connectServer(host: string = "", port: number = 80) {

			//判断是否已经连接过服务器，避免重复连接
			if(this.isConnected && host == this.serverIP && port == this.serverPort ) { 
				return;
			}

			if(this.sock==null){
				this.sock = new egret.WebSocket();//后期预留多socket
			}
			
			this.sock.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
			this.sock.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
			this.sock.addEventListener(egret.Event.CLOSE,this.onSocketClose,this);
        	this.sock.addEventListener(egret.IOErrorEvent.IO_ERROR,this.onSocketIOError,this);
			this.sock.connect(host, port);

			this.heartTimer.addEventListener(egret.TimerEvent.TIMER,this.sendHeartTimerHandler,this);
    	}

		/**
		*发送心跳
		*/
		public sendHeartTimerHandler(e: egret.TimerEvent): void {
			// ffw.Msg.ins.dispatchEventWith(og.BroadcastConstants.SEND_HEARTJUMP);
		}

		private onSocketOpen(): void {
			this.isConnected = true;
			ffw.Msg.ins.dispatchEventWith(BaseWebSocket.ON_SOCKET_CONNECT_SUCCESS);
		}

		//socket 关闭
		public onSocketClose(): void { 
			// EffectUtils.showTips("连接被关闭！",1);
			// this.heartTimer.stop();
			this.isConnected = false;
			ffw.Msg.ins.dispatchEventWith(BaseWebSocket.ON_SOCKET_CONNECT_CLOSE);
		}
		
		//socket io错误
		public onSocketIOError(): void { 
	//        EffectUtils.showTips("连接IO错误！",1);
			this.isConnected = false;
			ffw.Msg.ins.dispatchEventWith(BaseWebSocket.ON_SOCKET_IO_ERROR);
		}

		//接受返回消息
		private onReceiveMessage(): void {
			// GameConfig.gameScene().maskLayer.removeChild(Global.waitPanel);
			// Global.waitPanel = null;
			// let msg = this.sock.readUTF();
			// let data = eval("(" + msg + ")");
			// ffw.Msg.ins.dispatchEvent(new egret.Event(data.cmd, data, false));

			let byte: egret.ByteArray = new egret.ByteArray();
			byte.endian = egret.Endian.LITTLE_ENDIAN;
			this.sock.readBytes(byte);
			
			// let msg:og.Msg = og.OGPBUtil.DecodePbMessage(byte);

			// ffw.Msg.ins.dispatchEventWith("Socket Received Message",false,msg);
		}

		private sendMessage(cmd: string = ""): void {
			// Global.waitPanel = new WaitPanel(1);
			// GameConfig.gameScene().maskLayer.removeChildren();
			// GameConfig.gameScene().maskLayer.addChild(Global.waitPanel);
			this.sock.writeUTF(cmd);
		}
		

		//向服务器发送pb数据
		public sendPbMessage(data:egret.ByteArray): void {
	//        Global.waitPanel = new WaitPanel(1);
	//        GameConfig.gameScene().maskLayer.removeChildren();
	//        GameConfig.gameScene().maskLayer.addChild(Global.waitPanel);
			this.sock.writeBytes(data);
		}

		/**
		 * 设置socket通信类型 二进制、字符串
		 * @param egret.WebSocket.TYPE_BINARY
		 */
		public setWebSocketType(type: string): void {
			this.sock.type = type;
		}

	}
}