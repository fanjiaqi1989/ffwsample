class AppConf {

	/**
	 * apptype 用于app运行环境切换
	 * 0 debug
	 * 1 test
	 * 2 release
	 */
	public static appType:number = 0;

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
			break;
			case 1:
				AppConf._ins.version+="(debug)";
			break;
			case 2:
				AppConf._ins.version+="";
			break;
			default:
			break;
		}
	}
}