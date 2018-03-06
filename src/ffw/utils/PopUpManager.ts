  /**
    * 面板弹出管理类
    * by dily
    * (c) copyright 2014 - 2035
    * All Rights Reserved. 
    * 面板弹出的管理类
    */
module PopUpManager {

	export var darkSprite:egret.Bitmap;
	export var darkSpriteCount:number = 0;

	// export var uiLayer:egret.Sprite;

	// export var popLayer:egret.Sprite;

    /**
    * 添加面板方法
	* uiLayer			父面板
    * panel       		面板
    * dark        		背景是否变黑
	* popUpX			面板X坐标
	* popUpY			面板Y坐标
    * popUpWidth      	指定弹窗宽度，定位使用
    * popUpHeight      	指定弹窗高度，定位使用
    * effectType        0：没有动画 1:从中间轻微弹出 2：从中间猛烈弹出  3：从左向右 4：从右向左 5、从上到下 6、从下到上
    */
	export function addPopUp(uiLayer, panel, dark:boolean = false, popUpX:number = 0, popUpY:number = 0, popUpWidth:number = 0,popUpHeight:number = 0,effectType:number = 0, isCenter:boolean = true, isAlert:boolean = false):void{ 
		if(uiLayer.contains(panel)){//判断是否包含panel
			return;
		}

		if(dark){
			if(darkSpriteCount <= 0){
				this.darkSprite = new egret.Bitmap(RES.getRes("black_mask_png"))
				this.darkSprite.width = ffw.ScaleTool.stageW;
				this.darkSprite.height = ffw.ScaleTool.stageH;
				uiLayer.addChild(this.darkSprite);
				this.darkSprite.touchEnabled = true;      
				this.darkSprite.visible = true;
			}
			darkSpriteCount++;
		}

		uiLayer.addChild(panel);
		// GameConfig.curPanel = panel;
		if(popUpWidth != 0){
			panel.x = ffw.ScaleTool.stageW/2 - popUpWidth/2;
			panel.y = ffw.ScaleTool.stageH/2 - popUpHeight/2;
		}else{
			popUpWidth = panel.width;
			popUpHeight = panel.height;
		}

		if(!isCenter){
			panel.x = popUpX;
			panel.y = popUpY;
		}

		//以下是弹窗动画
		var leftX:number = ffw.ScaleTool.stageW/2 - popUpWidth/2;
		var upY:number = ffw.ScaleTool.stageH/2 - popUpHeight/2;

        switch(effectType){
            case 0:
                break;
            case 1:
				panel.alpha = 0;
				panel.scaleX = 0.5;
				panel.scaleY = 0.5;
				panel.x = panel.x + popUpWidth/4;
				panel.y = panel.y + popUpHeight/4;
		        egret.Tween.get(panel).to({alpha:1,scaleX:1,scaleY:1,x:panel.x - popUpWidth/4,y:panel.y - popUpHeight/4},300,egret.Ease.backOut); 
                break;
            case 2:
				panel.alpha = 0;
				panel.scaleX = 0.5;
				panel.scaleY = 0.5;
				panel.x = panel.x + popUpWidth/4;
				panel.y = panel.y + popUpHeight/4;
		        egret.Tween.get(panel).to({alpha:1,scaleX:1,scaleY:1,x:panel.x - popUpWidth/4,y:panel.y - popUpHeight/4},600,egret.Ease.elasticOut); 
                break;
            case 3:
            	if(isAlert){
					panel.x = - popUpWidth;
			        egret.Tween.get(panel).to({x:leftX},500,egret.Ease.cubicOut); 
        		}else{
					panel.x = - popUpWidth;
			        egret.Tween.get(panel).to({x:0},500,egret.Ease.cubicOut); 
        		}
                break;
            case 4:
            	if(isAlert){
					panel.x = popUpWidth;
			        egret.Tween.get(panel).to({x:leftX},500,egret.Ease.cubicOut);  
        		}else{
					panel.x = popUpWidth;
			        egret.Tween.get(panel).to({x:0},500,egret.Ease.cubicOut);  
        		}
                break;
            case 5:
            	if(isAlert){
					panel.y = - popUpHeight;
			        egret.Tween.get(panel).to({y:upY},500,egret.Ease.cubicOut); 
        		}else{
					panel.y = - popUpHeight;
			        egret.Tween.get(panel).to({y:0},500,egret.Ease.cubicOut);   
        		}
                break;
            case 6:
            	if(isAlert){
					panel.y = ffw.ScaleTool.stageW;
			        egret.Tween.get(panel).to({y:upY},500,egret.Ease.cubicOut); 
        		}else{
					panel.y = popUpHeight;
			        egret.Tween.get(panel).to({y:0},500,egret.Ease.cubicOut); 
        		}
                break;
            default:
                break;
        }		
 
	} 

    /**
    * 移除面板方法
    * panel       		面板
    * effectType        0：没有动画 1:从中间缩小消失 2：  3：从左向右 4：从右向左 5、从上到下 6、从下到上
    */
	export function removePopUp(uiLayer, panel, dark:boolean = false, popUpWidth:number = 0, effectType:number = 0):void{ 
		if(dark){
			darkSpriteCount--;
			if(darkSpriteCount <= 0){
				uiLayer.removeChild(this.darkSprite);
			}	
		}

		if(popUpWidth == 0){
			popUpWidth = panel.width;
		}

		//以下是弹窗动画
        switch(effectType){
            case 0:
                break;
            case 1:
		        egret.Tween.get(panel).to({alpha:0,scaleX:0,scaleY:0,x:panel.x + panel.width/2,y:panel.y + panel.height/2},300); 
                break;
            case 2:
                break;
            case 3:
		        egret.Tween.get(panel).to({x:popUpWidth},500,egret.Ease.cubicOut); 
                break;
            case 4:
		        egret.Tween.get(panel).to({x:-popUpWidth},500,egret.Ease.cubicOut);        
                break;
            case 5:
		        egret.Tween.get(panel).to({y:panel.height},500,egret.Ease.cubicOut);             
                break;
            case 6:
		        egret.Tween.get(panel).to({y:-panel.height},500,egret.Ease.cubicOut);              
                break;
            default:
                break;
        }        

        // egret.setTimeout(function () {
			if(uiLayer.contains(panel)){//判断是否包含panel
				uiLayer.removeChild(panel);
			}
        // }, this, 500);         
	}

	export function clearPopUp(uiLayer):void{
		uiLayer.removeChildren();
	}

}


