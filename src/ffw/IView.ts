module ffw{
	export interface IView extends egret.DisplayObject {

		onLoadRes(mainRes?:string[],optionalRes?:string[]):void;
		onInitView():void;
		onRemoveView():void;
		onDestroyRes(name?:string[]):void;
	}
}