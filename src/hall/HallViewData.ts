module hall {
	export class HallViewData {
		private static _ins:HallViewData;
		public static get ins():HallViewData{
			if(HallViewData._ins == null){
				HallViewData._ins = new HallViewData();
			}
			return HallViewData._ins;
		}
		public constructor() {
		}
	}
}