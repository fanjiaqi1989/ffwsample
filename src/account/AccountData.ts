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



		public uid:string;
		public uname:string;
		public token:string;

		public localData:UserLocalStorage;
		

		getUserLocalData():void{
			let data = egret.localStorage.getItem("userdata");
			if(data != null && data != ""){
				this.localData = JSON.parse(data);
			}else{
				this.localData = new UserLocalStorage();
			}
		}

		setUserLocalData():void{
			this.localData.saveDate = (new Date()).getUTCMinutes();
			let data = JSON.stringify(this.localData);
			egret.localStorage.setItem("userdata",data);
		}

	}

	/**用于记录用户的本地设置缓存 */
	export class UserLocalStorage{
		saveDate:number = 0;
		uid:string = "";
		uname:string = "";
		type:number = 0;
	}

}