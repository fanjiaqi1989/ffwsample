module hall.net {
	export class HallSocketReceiveHandler{


		public constructor() {
		}

		public onMsgReceive(msg:string):void{
			let evt:egret.Event = new egret.Event(HallMessage.RECIEVE_UTF_MESSAGE,false,false,msg);
			ffw.Msg.ins.dispatchEvent(evt);
		}

		/**
		 * 接收并处理数据包
		 * @param bytes 数据包的所有数据
		 * @param type 消息头类型
		 * @param result 数据包的RESULT值
		 */
		public onDataPackReceive(bytes: ArrayBuffer, type: number, result: number = 0): void {
			switch (type) {
				//1游戏心跳
				case 0x111222:
					// this.CGS_MSG_CLI_GS_ACK_HEARTBEAT(bytes, type, result);
					break;
			}

		}

	}
}