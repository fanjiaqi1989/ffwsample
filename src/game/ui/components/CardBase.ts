module game.ui.components {

	export enum CardPosition{
		DOWN,RIGHT,UP,LEFT
	}

	export enum CardState{
		STANDERD,DOWN
	}

	export enum CardCornerType{
		BAO,CI,GANG,HUN,JIN,LAI,PI,SHUAI
	}

	export class CardBase extends egret.DisplayObject {

		private bkeffect:egret.Bitmap;			//背景特效
		private bk:egret.Bitmap;				//牌背
		private mc:egret.Bitmap;				//牌面
        private cornerMask:egret.Bitmap;		//左上角标 宝次杠混金赖皮甩
		private tingMask:egret.Bitmap;			//右下角标 听 
        private lockMask:egret.Bitmap;			//前景特效 黑色遮罩

        private value:number;					//牌值：面板上的图片的帧 cardid
        private position:CardPosition;			//方位：0 1 2 3下右上左
        private state:CardState;				//牌状态
		private cornerType:CardCornerType;		//角标值

		public constructor(value:number, position:CardPosition,state:CardState) {
			super();
			this.value = value;
			this.position = position;
			this.state = state;
		}

		public getCardValue():number{
			return this.value;
		}

		public initView():void{
			
		}
	}
}