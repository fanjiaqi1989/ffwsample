module ffw{
	export interface IView extends egret.DisplayObject {
		onInitView():void;
		onRemoveView():void;
	}
}