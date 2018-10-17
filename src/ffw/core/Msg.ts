module ffw{
	/**
	 * 全局消息处理
	 * 进行通信解耦
	 * 注意：严禁直接使用字符串进行消息收发定义
	 */
	export class Msg extends egret.EventDispatcher {

		private static _ins:ffw.Msg;

		public constructor() {
			super();
		}

		public static get ins():ffw.Msg{
			if(ffw.Msg._ins==null){
				ffw.Msg._ins = new ffw.Msg();
			}
			return ffw.Msg._ins;
		}	
	}

}