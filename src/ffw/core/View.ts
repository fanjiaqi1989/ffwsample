module ffw {
	export class View extends egret.DisplayObjectContainer implements IView {

		//res loading
		private resLoadingView:utils.ResLoadingView;
		//
		private event_dispatch:egret.EventDispatcher;
		//
		private _isresloaded:boolean = false;
		public get isresloaded():boolean{
			return this._isresloaded;
		}
		public constructor() {
			super();
		}

		public onLoadRes(mainRes:string[]=[],optionalRes:string[]=[]){
			if(!this._isresloaded){
				this.resLoadingView = new utils.ResLoadingView();
				this.resLoadingView.addEventListener(utils.ResLoadingView.RES_LOAD_COMPLETE,this.onResLoadingCompleteHandler,this);
				this.addChild(this.resLoadingView);
				this.resLoadingView.setLoadResGroup(mainRes,optionalRes);
			}else{
				this.onInitView();
			}
		}

		private onResLoadingCompleteHandler(e:egret.Event):void{
			this._isresloaded = true;
			this.onInitView();
		}

		public onInitView(){

		}
		public onRemoveView(){

		}

		public addComp():void{

		}

		public removeComp():void{
			
		}

		public onDestroyRes(name:string[]=[]):void{
			for(let n in name){
				RES.destroyRes(n);
			}
			this._isresloaded = false;
		}
	}
}