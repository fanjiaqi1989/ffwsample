module ffw{
export class ViewManager extends egret.DisplayObjectContainer {

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
	public topLayer:egret.DisplayObjectContainer;
	//loading app层级的遮罩层 谨慎使用
	//主ui层 此层只会放用户开发的模块 清除的时候全部删除
	private middleLayer:egret.DisplayObjectContainer;
	//背景层
	private bottomLayer:egret.DisplayObjectContainer;
	//---------------------------------------system---------------------------------//
	/**view 列表 */
	private viewList:{[vname:string]:IView} = {};

	public constructor() {
		super();
		//初始化视图三层结构
		this.bottomLayer = new egret.DisplayObjectContainer();
		this.middleLayer = new egret.DisplayObjectContainer();
		this.topLayer = new egret.DisplayObjectContainer();
		this.addChild(this.bottomLayer);
		this.addChild(this.middleLayer);
		this.addChild(this.topLayer);
	}

	registView(name:string,v:IView):void{
		this.viewList[name] = v;
	}

	removeView(name:string):void{
		delete this.viewList[name];
	}

	showView(name:string):void{
		for(let v in this.viewList){
			if(v == name){
				this.middleLayer.addChild(this.viewList[v]);
				this.viewList[v].onInitView();
			}else{
				if(this.viewList[v].parent){
					this.viewList[v].parent.removeChild(this.viewList[v]);
					this.viewList[v].onRemoveView();
				}
			}
		}
	}

	public static get ins():ViewManager{
		if(ViewManager._ins==null){
			ViewManager._ins = new ViewManager();
		}
		return ViewManager._ins;
	}

	private removeAllCustomerView():void{
		if(this.middleLayer.numChildren>0){
			this.middleLayer.removeChildren();
		}
	}

}
}