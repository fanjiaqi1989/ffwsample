module test {
	export class TestNetView extends ffw.View {

		private interfaceList:eui.List;
		private consolePanel:eui.TextInput;

		public constructor() {
			super();
		}

		public onInitView():void{
			super.onInitView();

			this.interfaceList = new eui.List();

			let scroller:eui.Scroller = new eui.Scroller();
			scroller.height = ffw.ScaleTool.stageH;
			scroller.scrollPolicyH="off";
			scroller.scrollPolicyV="on";
			scroller.viewport = this.interfaceList;
			this.addChild(scroller);
			
			let data:eui.ArrayCollection = new eui.ArrayCollection();
			data.addItem("login");
			this.interfaceList.dataProvider = data;

			this.interfaceList.addEventListener(eui.ItemTapEvent.ITEM_TAP,this.onClickOnItemHandler,this);

		}

		private onClickOnItemHandler(e:eui.ItemTapEvent):void{

			switch(e.item){
				case "login":
				let url:string = "";
				let params:string = "aa=1&bb=asdf&token=asdf";
				// ffw.BaseHttpRequest.sendRequestPostOnce(url,this.onLoginReqSuccessHandler,this.onLoginReqErrorHandler,this);
				break;

			}
			
		}
	}

}