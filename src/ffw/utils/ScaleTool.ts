/**
 * ffw.ScaleTool
 * fanjq framework
 * 进行页面全屏显示及自动对齐
 */

module ffw {

export class ScaleTool {


    public static stageW:number = 0;
    public static stageH:number = 0;

    constructor() {
    }
    
    public static setParam(w:number,h:number):void{
        ffw.ScaleTool.stageW = w;
        ffw.ScaleTool.stageH = h;
    }

    /**
     * 水平居中对齐
     * eui组件可能在初始化的时候宽高为0，则要输入偏移量
     */
    public static setCenterH(dis:egret.DisplayObject,offset:number=0):void{
        dis.x = (ffw.ScaleTool.stageW-dis.width)/2+offset;
    }

    /**
     * 垂直居中对齐
     */
    public static setCenterV(dis:egret.DisplayObject,offset:number=0,miny:number=0):void{
        dis.y = (ffw.ScaleTool.stageH-dis.height)/2+offset;
        if(miny>dis.y){
            dis.y = miny;
        }
    }

    /**
     * 靠底部对齐
     */
    public static paddingBottm(dis:egret.DisplayObject,offset:number=0):void{
        dis.y = ffw.ScaleTool.stageH-dis.height+offset;
    }

    /**
     * 靠右边对齐
     */
    public static paddingRight(dis:egret.DisplayObject,offset:number=0):void{
        dis.x = ffw.ScaleTool.stageW-dis.width+offset;
    }

    }

}