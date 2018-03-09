class ViewManager extends egret.DisplayObjectContainer {

	/**
	 * 该类只维护下列项目
	 * 1.全局锁定等待视图
	 * 2.全局提示文字
	 * 3.全局提示框
	 * 
	 * 4.AccountView
	 * 5.HallView
	 * 6.GameView
	 * 后续拓展 GameView2、GameView3、……
	 */
	private static _ins:ViewManager;
	//---------------------------------------system---------------------------------//
	//最顶层
	public topLayer:egret.Sprite;
	//loading
	public mask:utils.LoadingMask;
	//弹出提示层
	public popLayer:egret.Sprite;
	//主ui层
	private middleLayer:egret.Sprite;
	//背景层
	private bottomLayer:egret.Sprite;
	//---------------------------------------system---------------------------------//

	//---------------------------------------customer---------------------------------//

	//登陆
	private accountView:account.AccountView;
	//大厅
	private hallView:hall.HallView;
	//游戏
	private gameView:game.GameView;

	//---------------------------------------customer---------------------------------//

	public constructor() {
		super();
		//初始化视图三层结构
		this.bottomLayer = new egret.Sprite();
		this.middleLayer = new egret.Sprite();
		this.popLayer = new egret.Sprite();
		this.topLayer = new egret.Sprite();
		this.addChild(this.bottomLayer);
		this.addChild(this.middleLayer);
		this.addChild(this.popLayer);
		this.addChild(this.topLayer);
		this.init();
	}

	public static get ins():ViewManager{
		if(ViewManager._ins==null){
			ViewManager._ins = new ViewManager();
		}
		return ViewManager._ins;
	}

	/**
	 * 初始化
	 */
	private init():void{
		TipsUtils.topLayer = this.topLayer;
		this.mask = new utils.LoadingMask();
	}

	private removeAllCustomerView():void{
		if(this.middleLayer.numChildren>0){
			this.middleLayer.removeChildren();
		}
	}

	public showAccountView():void{
		this.removeAllCustomerView();
		if(this.accountView == null){
			this.accountView = new account.AccountView();
		}
		this.middleLayer.addChild(this.accountView);
	}

	public showHallView():void{
		this.removeAllCustomerView();
		if(this.hallView == null){
			this.hallView = new hall.HallView();
		}
		this.middleLayer.addChild(this.hallView);
	}

	public showMask():void{
		this.topLayer.addChild(this.mask);
	}

	public hideMask():void{
		this.topLayer.removeChild(this.mask);
	}

}