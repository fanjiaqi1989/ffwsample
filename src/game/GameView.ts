module game {
	export class GameView extends ffw.View{

		//ui
		private gamePanel:game.ui.GamePanel;


		public constructor() {
			super();
		}

		onLoadRes(){
			super.onLoadRes(['game'],[]);
		}

		onInitView():void{
			super.onInitView();
			this.gamePanel = new game.ui.GamePanel();
			this.gamePanel.width = ffw.ScaleTool.stageW;
			this.gamePanel.height = ffw.ScaleTool.stageH;
			this.addChild(this.gamePanel);
		}

		onRemoveView(){
			super.onRemoveView();
		}
	}
}