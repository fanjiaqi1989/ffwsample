class AppConf {

	/**
	 * apptype 用于app运行环境切换
	 * 0 debug
	 * 1 test
	 * 2 release
	 */
	public static appType:number = 1;

	public version:string = "V2.4.10";

	public constructor() {
	}

	private static _ins:AppConf;

	public static get ins():AppConf{
		if(AppConf._ins==null){
			AppConf._ins = new AppConf();
			AppConf._ins.initConfig(AppConf.appType);
		}
		return AppConf._ins;
	}

	public initConfig(apptype:number):void{
		switch(apptype){
			case 0:
				AppConf._ins.version+="(debug)";
				this.hallWebSocket_IP = "192.168.1.103";
				this.hallWebSocket_PORT = 3030;
			break;
			case 1:
				AppConf._ins.version+="(test)";
				this.hallWebSocket_IP = "echo.websocket.org";
				this.hallWebSocket_PORT = 80;
			break;
			case 2:
				AppConf._ins.version+="";
			break;
			default:
			break;
		}
	}

	//-------------------------------------------------//
	public os:string = "";

	public hallWebSocket_IP:string = "echo.websocket.org";

	public hallWebSocket_PORT:number = 80;

	
}