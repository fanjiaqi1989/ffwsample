module ffw{

export class BaseHttpRequest extends egret.EventDispatcher {

    /** 请求一次http(GET)，返回urload 完成后就失效*/
    public static sendRequestGetOnce(type:string,succFunction:Function,onLoadError:Function,thisobj:any,params: string = ""):void{
        let urlloader = new egret.URLLoader();
        let urlreq: egret.URLRequest = new egret.URLRequest();
        urlreq.method = egret.URLRequestMethod.GET;
        urlloader.addEventListener(egret.Event.COMPLETE,succFunction,thisobj);
        urlloader.addEventListener(egret.IOErrorEvent.IO_ERROR, onLoadError, thisobj);
        if(params!=""){
            urlreq.data = new egret.URLVariables(params);
        }

        urlreq.url = type;
        console.info("发送请求(get once):"+urlreq.url);
        console.info("请求参数:"+params);
        try{
            urlloader.load(urlreq);
        }catch(e){
            this.onLoadExcetion(e.description);
        }
    }

    private static onLoadExcetion(e:string){
		// ViewManager.ins.HideWaitingView();
        // ViewManager.ins.ShowTipTxt(e);
    }

    /** 请求一次http(POST)，返回urload 完成后就失效*/
    public static sendRequestPostOnce(type:string,succFunction:Function,onLoadError:Function,thisobj:any,params: string = "",paramstype:string="URLvar"):void{
        let urlloader = new egret.URLLoader();
        let urlreq: egret.URLRequest = new egret.URLRequest();
        urlreq.method = egret.URLRequestMethod.POST;
        urlloader.addEventListener(egret.Event.COMPLETE,succFunction,thisobj);
        urlloader.addEventListener(egret.IOErrorEvent.IO_ERROR, onLoadError, thisobj);
        if(params!=""){

            if(paramstype=="URLvar"){
                urlreq.data = new egret.URLVariables(params);
            }else if(paramstype=="JSON"){
                urlreq.data = params;
                console.info("urlreq data:"+urlreq.data);
            }

        }
        urlreq.url = type;
        console.info("发送请求(post once):"+urlreq.url);
        console.info("请求参数:"+params);
        try{
            urlloader.load(urlreq);
        }catch(e){
            this.onLoadExcetion(e.description);
        }
    }

}

    
}