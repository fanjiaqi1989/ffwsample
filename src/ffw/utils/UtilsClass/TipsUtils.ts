  /**
	* tips特效汇总
	* by zhaoxin
	* (c) copyright 2014 - 2035
	* All Rights Reserved. 
	* TipsUtils.showTipsDownToUp()
    */

module TipsUtils {

        //全局字体颜色表--可以扩展
    export let TextColors = {
        white:0xFFFFFF,//白色
        milkWhite:0xfbf1af,//乳白色 
        grayWhite:0xceb6a2,//灰白色
        yellow:0xffff00,//金黄色 
        lightYellow:0xffd375,//淡黄色
        orangeYellow:0xff9900,//橘黄色//道具名称 //玩家姓名
        red:0xf11300,//红色
        green:0x00e500,//绿色 
        blue:0x1a94d7,//蓝色 
        grayBlue:0x2f5177,//墨蓝色 
        purple:0xe938f2,//紫色 
        pink:0xFF3030,//粉色 
        black:0x2e2d2d,//黑色
        golden:0xFFD700 //金色
    }

    export let tipUtilsLayer;

    //从下到上弹出
    export function showTipsDownToUp(str:string = "",isWarning:boolean = false):void{
        let effectTips = new egret.TextField();
        effectTips.size = 30;
        effectTips.y = ffw.ScaleTool.stageH - 30;
        if(isWarning){
            effectTips.textColor = TextColors.red;
        }else{
            effectTips.textColor = TextColors.yellow;
        }
        effectTips.alpha = 0;
        
        effectTips.text = str;
        effectTips.strokeColor = 0x000000;
        effectTips.x = ffw.ScaleTool.stageW/2 - effectTips.width/2;        
        // effectTips.stroke  = 2;
        // effectTips.bold = true;
        effectTips.textAlign = egret.HorizontalAlign.CENTER;

        let tip_bg = new egret.Bitmap(RES.getRes("tip_bg_png"));
        tip_bg.scale9Grid = new egret.Rectangle(20, 15, 280, 60);
        tip_bg.width = effectTips.width + 40;
        tip_bg.height = 80;
        tip_bg.y = ffw.ScaleTool.stageH - 52;
        tip_bg.x = ffw.ScaleTool.stageW/2 - tip_bg.width/2;
        tip_bg.alpha = 0;

        tipUtilsLayer.removeChildren();
        if(!tipUtilsLayer.contains(tip_bg)){
            tipUtilsLayer.addChild( tip_bg );
        }  
        if(!tipUtilsLayer.contains(effectTips)){
            tipUtilsLayer.addChild( effectTips );
        }        

        let onComplete2:Function = function(){
            if(tipUtilsLayer.contains(tip_bg)){
                tipUtilsLayer.removeChild( tip_bg );
                tip_bg = null;
            }
            if(tipUtilsLayer.contains(effectTips)){
                tipUtilsLayer.removeChild( effectTips );
                effectTips = null;
            }
        };
        let onComplete1:Function = function(){
            egret.Tween.get(tip_bg).to({alpha:0},500);
            egret.Tween.get(effectTips).to({alpha:0},500).call(onComplete2,this);
        };
        tip_bg.visible = true;
        effectTips.visible = true;
        egret.Tween.get(tip_bg).to({y:tip_bg.y - 150,alpha:1},800,egret.Ease.backOut).wait(1000);
        egret.Tween.get(effectTips).to({y:effectTips.y - 150,alpha:1},800,egret.Ease.backOut).wait(1000).call(onComplete1,this);
    }    

    //从左至右 或者 从右至左
    export function showTipsLeftOrRight(str:string = "",isWarning:boolean = false,isFromeLeft:boolean = true):void{
        let effectTips = new egret.TextField();

        effectTips.size = 24;
        effectTips.y = ffw.ScaleTool.stageH/2;
        if(isWarning){
            effectTips.textColor = TextColors.red;
        }else{
            effectTips.textColor = TextColors.green;
        }
        effectTips.alpha = 0;
        
        effectTips.text = str;
        effectTips.strokeColor = 0x000000;
        if(isFromeLeft){
            effectTips.x = - effectTips.width;        
        }else{
            effectTips.x = ffw.ScaleTool.stageW;        
        }
        effectTips.stroke  = 2;
        effectTips.bold = true;
        effectTips.textAlign = egret.HorizontalAlign.CENTER;

        if(!tipUtilsLayer.contains(effectTips)){
            tipUtilsLayer.addChild( effectTips );
        }        

        if(isFromeLeft){
            egret.Tween.get(effectTips).to({x:ffw.ScaleTool.stageW/2 - effectTips.width/2 - 50,alpha:1},300,egret.Ease.sineInOut);   
        }else{
            egret.Tween.get(effectTips).to({x:ffw.ScaleTool.stageW/2 - effectTips.width/2 + 50,alpha:1},300,egret.Ease.sineInOut);   
        }

        egret.setTimeout(function () {
            if(isFromeLeft){
                egret.Tween.get(effectTips).to({x:effectTips.x + 100},500);  
            }else{
                egret.Tween.get(effectTips).to({x:effectTips.x - 100},500);   
            }
        }, this, 300);  

        egret.setTimeout(function () {
            if(isFromeLeft){
                egret.Tween.get(effectTips).to({x:ffw.ScaleTool.stageW},300,egret.Ease.sineIn);    
            }else{
                egret.Tween.get(effectTips).to({x:-effectTips.width},300,egret.Ease.sineIn);    
            }
        }, this, 800);  

        egret.setTimeout(function () {
            if(tipUtilsLayer.contains(effectTips)){
                tipUtilsLayer.removeChild( effectTips );
                effectTips = null;
            }
        }, this, 1100);     

    }  

    //从里到外
    export function showTipsFromCenter(str:string = "",isWarning:boolean = false):void{
        let tip_bg = new egret.Bitmap(RES.getRes("tip_bg_png"));
        tip_bg.anchorOffsetX = tip_bg.width/2;
        tip_bg.anchorOffsetY = tip_bg.height/2;
        tip_bg.y = ffw.ScaleTool.stageH/2;
        tip_bg.x = ffw.ScaleTool.stageW/2;
        tip_bg.scaleX = 0;
        tip_bg.scaleY = 0;
        tip_bg.alpha = 0;

        let effectTips = new egret.TextField();

        effectTips.size = 30;
        effectTips.y = ffw.ScaleTool.stageH/2;
        // effectTips.y = ffw.ScaleTool.stageH-80;
        if(isWarning){
            effectTips.textColor = TextColors.red;
        }else{
            effectTips.textColor = TextColors.yellow;
        }
        effectTips.alpha = 0;
        
        effectTips.text = str;
        effectTips.strokeColor = 0x000000;
        effectTips.x = ffw.ScaleTool.stageW/2;        
        // effectTips.stroke  = 2;
        // effectTips.bold = true;
        effectTips.textAlign = egret.HorizontalAlign.CENTER;
        effectTips.anchorOffsetX = effectTips.width/2;
        effectTips.anchorOffsetY = effectTips.height/2;
        effectTips.scaleX = 0;
        effectTips.scaleY = 0;

        if(!tipUtilsLayer.contains(tip_bg)){
            tipUtilsLayer.addChild( tip_bg );
        }  
        if(!tipUtilsLayer.contains(effectTips)){
            tipUtilsLayer.addChild( effectTips );
        }        

        let onComplete2:Function = function(){
            if(tipUtilsLayer.contains(tip_bg)){
                tipUtilsLayer.removeChild( tip_bg );
                tip_bg = null;
            }
            if(tipUtilsLayer.contains(effectTips)){
                tipUtilsLayer.removeChild( effectTips );
                effectTips = null;
            }
        };
        egret.Tween.get(tip_bg).to({scaleX:1,scaleY:1,alpha:1},200);
        egret.Tween.get(effectTips).to({scaleX:1,scaleY:1,alpha:1},200); 
        egret.setTimeout(function () {
            egret.Tween.get(tip_bg).to({alpha:0},500);   
            egret.Tween.get(effectTips).to({alpha:0},500).call(onComplete2,this);   
        }, this, 2000);   

    }    

    //从外到里
    export function showTipsBigToSmall(str:string = "",isWarning:boolean = false):void{
        let effectTips = new egret.TextField();

        effectTips.size = 24;
        effectTips.y = ffw.ScaleTool.stageH/2;
        if(isWarning){
            effectTips.textColor = TextColors.red;
        }else{
            effectTips.textColor = TextColors.green;
        }
        effectTips.alpha = 0;
        
        effectTips.text = str;
        effectTips.strokeColor = 0x000000;
        effectTips.x = ffw.ScaleTool.stageW/2;        
        effectTips.stroke  = 2;
        effectTips.bold = true;
        effectTips.textAlign = egret.HorizontalAlign.CENTER;
        effectTips.anchorOffsetX = effectTips.width/2;
        effectTips.anchorOffsetY = effectTips.height/2;
        effectTips.scaleX = 4;
        effectTips.scaleY = 4;

        if(!tipUtilsLayer.contains(effectTips)){
            tipUtilsLayer.addChild( effectTips );
        }        

        let onComplete2:Function = function(){
            if(tipUtilsLayer.contains(effectTips)){
                tipUtilsLayer.removeChild( effectTips );
                effectTips = null;
            }
        };
        egret.Tween.get(effectTips).to({scaleX:1,scaleY:1,alpha:1},200); 
        egret.setTimeout(function () {
            egret.Tween.get(effectTips).to({alpha:0},500).call(onComplete2,this);   
        }, this, 1000);   

    }    

}