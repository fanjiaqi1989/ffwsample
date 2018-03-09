module utils {
	/**
	 * 
	 */
	export class ResLoadingView extends egret.Sprite {

		public static RES_LOAD_COMPLETE:string = "ffw_utils_res_load_complete";

		private mainAssertGroups:Array<string> = [];
		private optionalAssertGroups:Array<string> = [];

		public constructor() {
			super();

			this.graphics.beginFill(0xffffff,1);
			this.graphics.drawRect(0,0,ffw.ScaleTool.stageW,ffw.ScaleTool.stageH);
			this.graphics.endFill();

			var data = RES.getRes("smallloading_json");
			var txtr = RES.getRes("smallloading_png");
			var mcFactory:egret.MovieClipDataFactory = new egret.MovieClipDataFactory( data, txtr );
			var mc1:egret.MovieClip = new egret.MovieClip( mcFactory.generateMovieClipData( "smallloading" ) );
			ffw.ScaleTool.setCenterH(mc1);
			ffw.ScaleTool.setCenterV(mc1);
			mc1.gotoAndPlay(0,-1);
			this.addChild(mc1);

			RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
			RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
			RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
			RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
		}

		public setLoadResGroup(mainRes:Array<string>=[],optionalRes:Array<string>=[]):void{
			this.mainAssertGroups = mainRes;
			this.optionalAssertGroups = optionalRes;

			if(this.mainAssertGroups.length>0){
				RES.loadGroup(this.mainAssertGroups[0]);
			}else{
				this.allMainResourceLoadComplete();
			}
		}

		/** 资源组加载出错*/
		private onItemLoadError(event:RES.ResourceEvent):void {
			console.warn("Url:" + event.resItem.url + " has failed to load");
		}
		/**资源组加载出错*/
		private onResourceLoadError(event:RES.ResourceEvent):void {
			//TODO
			console.warn("Group:" + event.groupName + " has failed to load");
			//忽略加载失败的项目
			//ignore loading failed projects
			this.onResourceLoadComplete(event);
		}
		/**preload资源组加载进度*/
		private onResourceProgress(event:RES.ResourceEvent):void {
			if (event.groupName == this.mainAssertGroups[0]) {
				// this.loadingView.setTipText(event.itemsLoaded+"/"+event.itemsTotal);
				// console.log("Group:" + event.itemsLoaded+"/"+event.itemsTotal);
			}
		}
		/** 资源组加载完成*/
		private onResourceLoadComplete(event:RES.ResourceEvent):void{
			if(event.groupName == this.mainAssertGroups[0]){
				console.log("资源Group:"+this.mainAssertGroups[0]+"加载完成.");
				this.mainAssertGroups.shift();
				if(this.mainAssertGroups.length>0){
					RES.loadGroup(this.mainAssertGroups[0]);
				}else{
					this.allMainResourceLoadComplete();
				}
			}
		}

		private allMainResourceLoadComplete():void{
			//加载非必需资源组
			while(this.optionalAssertGroups.length>0){
				RES.loadGroup(this.optionalAssertGroups.shift(),-1);//-1降低加载优先级
			}

			RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
			RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
			RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
			RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);

			if(this.parent!=null){
				this.parent.removeChild(this);
			}

			//发送结果
			this.dispatchEventWith(ResLoadingView.RES_LOAD_COMPLETE);
		}
	}
}