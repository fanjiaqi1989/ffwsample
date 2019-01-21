module ffw.net {
	/**
	 * @author fanjq
	 * 用于构建pb消息体
	 */
	export class PbFactory {

		private builder:any;

		public constructor(protoName:string) {
			this.builder = ProtoBuf.loadProto(RES.getRes(protoName));
		}

		/**
		 * 构建类
		 */
		public build(str:string): any { 
				return this.builder.build(str);
		}
	}
}