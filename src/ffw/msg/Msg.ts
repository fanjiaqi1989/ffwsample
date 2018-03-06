module ffw {
	export class Msg extends egret.EventDispatcher {

		private static _ins:ffw.Msg;

		public constructor() {
			super();
		}

		// public static ins():ffw.Msg{
		// 	if(ffw.Msg._ins==null){
		// 		ffw.Msg._ins = new ffw.Msg();
		// 	}
		// 	return ffw.Msg._ins;
		// }

		public static get ins():ffw.Msg{
			if(ffw.Msg._ins==null){
				ffw.Msg._ins = new ffw.Msg();
			}
			return ffw.Msg._ins;
		}
	}
}