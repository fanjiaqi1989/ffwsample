module hall {
	export class HallMessage {
		public constructor() {
		}

		private static BASE_MSG:string = "hall message";

		public static RECIEVE_UTF_MESSAGE:string = HallMessage.BASE_MSG+"RECIEVE_UTF_MESSAGE";
	}
}