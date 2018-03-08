module utils {
	export class LoadingMask extends egret.Sprite {
		private nums:number = 12;
        private segAngle:number;
        private seg:number;
		private arr:Array<any> = new Array();
		private sprite:egret.Sprite = new egret.Sprite();
        private j:number = 1;

		public constructor() {
			super();
			this.width = ffw.ScaleTool.stageW;
			this.height = ffw.ScaleTool.stageH;

            this.touchEnabled = true;

			var halfAlpha:egret.Shape = new egret.Shape();
			halfAlpha.graphics.beginFill(0x000000,0.3);
			halfAlpha.graphics.drawRect(0,0,this.width,this.height);
			halfAlpha.graphics.endFill();
			this.addChild(halfAlpha);

			this.init();
		}

		private init():void
        {
            this.seg = 1 / this.nums;
            this.segAngle = Math.PI * 2 / this.nums;
            this.addChild(this.sprite);
            this.sprite.x = this.width / 2;
            this.sprite.y = this.height / 2;
            for (var i:number = 0; i < this.nums; i++)
            {
				var shape:egret.Shape = new egret.Shape();
                shape.graphics.beginFill(0xffffff);
                shape.graphics.drawCircle(0,0,10);
                shape.graphics.endFill();
                this.sprite.addChild(shape);

                shape.alpha = this.seg * i;
                shape.x = 60 * Math.cos((i * this.segAngle));
                shape.y = 60 * Math.sin((i * this.segAngle));
                this.arr[i] = shape;

            }
            this.addEventListener(egret.Event.ENTER_FRAME,this.alphaHalder,this);
        }
        private alphaHalder(evt:egret.Event):void
        {
            for (var i:number = 0; i < this.nums; i++)
            {
                var shape:egret.Shape = this.arr[i] as egret.Shape;
                shape.alpha = this.j;
                this.j -=  this.seg;
                if ((this.j < 0.1))
                {
                    this.j = 1;
                }
            }

        }

	}
}