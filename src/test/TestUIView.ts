module test {
	export class TestUIView extends ffw.View {

		private accountview:account.AccountView;
		private hallview:hall.HallView;
		private gameview:game.GameView;


		public constructor() {
			super();
		}

		public onInitView():void{
			super.onInitView();
			// this.testAccount();
			this.testHall();
		}

		public onRemoveView():void{
			super.onRemoveView();
		}

		private testAccount():void{

			let viewdata:account.AccountData =account.AccountData.ins;

			this.accountview = new account.AccountView();
			// this.addChild(this.accountview);
			this.accountview.onLoadRes();

			let accountPanel:account.ui.AccountPanel = new account.ui.AccountPanel();
			this.addChild(accountPanel);
		}

		private testHall():void{
			let viewdata:hall.HallViewData =hall.HallViewData.ins;

			this.hallview = new hall.HallView();
			this.addChild(this.hallview);
			this.hallview.onLoadRes();
		}
	}
}