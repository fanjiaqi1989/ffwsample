module game.ui {
	export class GamePanel extends eui.Component implements eui.UIComponent{
		//private
		private return_btn:eui.Button;

		//
		private cardBack:egret.Bitmap;
		private cardFront:egret.Bitmap;

		private bdata:egret.BitmapData;

		//
		private sl_a:eui.HSlider;
		private sl_b:eui.HSlider;
		private sl_c:eui.HSlider;
		private sl_d:eui.HSlider;
		private sl_tx:eui.HSlider;
		private sl_ty:eui.HSlider;


		public constructor() {
			super();
		}

		protected partAdded(partName:string,instance:any):void
		{
			super.partAdded(partName,instance);
		}


		protected childrenCreated():void
		{
			super.childrenCreated();

			this.return_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.clickReturnBtnHandler,this);
			//
			this.sl_a.addEventListener(egret.Event.CHANGE,this.clickReturnBtnHandler,this);

			this.cardBack = new egret.Bitmap(RES.getRes('card_bg_png'));
			this.cardFront = new egret.Bitmap(RES.getRes('club_1_png'));

			this.addChild(this.cardBack);
			this.addChild(this.cardFront);

			this.bdata = new egret.BitmapData(RES.getRes('club_1_png'));
			var tt:egret.Texture = RES.getRes('club_1_png');
			var arr = tt.getPixels(0,0,tt.textureWidth,50);
			

			for(var  i=0;i<arr.length;i=i+4){
				var str:string = "0x"+arr[i].toString(16)+arr[i+1].toString(16)+arr[i+2].toString(16);
				console.log("color:"+str);
				console.log("number:"+Number(str));
			}
			// var newbtmp:egret.Bitmap = new egret.Bitmap();
			// var newbmd:egret.BitmapData = new egret.BitmapData(arr);
			// newbtmp.bitmapData = newbmd;
			// this.addChild(newbtmp);
			// newbtmp.x = 300;

			// var spr:egret.Shape = new egret.Shape();
			// spr.graphics
			console.log("over"+arr[0].toFixed(16));
		}

		private clickReturnBtnHandler(e:egret.TouchEvent):void{
			ViewManager.ins.showHallView();
		}
	}
}