module ffw.net {
	/**
	 * @author fanjq
	 * 用于构建pb消息体
	 */
	export class PbFactoryNew {

		private root:any;

		public constructor(protoName:string) {
			this.root = protobuf.parse(RES.getRes(protoName)).root;
		}

		/**
		 * 构建类
		 */
		public build(str:string): any { 
				// return this.builder.build(str);
				return this.root.lookup(str);
		}
	}
}