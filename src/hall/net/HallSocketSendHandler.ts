module hall.net {
	export class HallSocketSendHandler {

		private socket:HallWebSocket;

		public constructor(so:HallWebSocket) {
				this.socket = so;
		}


		//------------------------------send function--------------------------------------//

		public send_utf_msg(str:string):void{
			this.socket.sendUTFMessage(str);
		}

		public send_user_login():void{
			
		}

	}
}