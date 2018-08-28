module account {
	export class AccountData {
		private static _ins:AccountData;
		public static get ins():AccountData{
			if(AccountData._ins == null){
				AccountData._ins = new AccountData();
			}
			return AccountData._ins;
		}
		public constructor() {

		}

		private uid:string;
		private un:string;
		private token:string;
		/**初始化数据 */
		public initData(){

		}

	}

}