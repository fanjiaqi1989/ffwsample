  /**
	* 正则公用方法汇总
	* by dily
	* (c) copyright 2014 - 2035
	* All Rights Reserved. 
	* RegUtils.checkEmail()
    */

module RegUtils {

	/* 
	用途：检查输入的Email信箱格式是否正确 
	输入：strEmail：字符串 
	返回：如果通过验证返回true,否则返回false 
	*/
	export function checkEmail(strEmail):boolean
	{
	    //let emailReg = /^[_a-z0-9]+@([_a-z0-9]+\.)+[a-z0-9]{2,3}$/; 
	    let emailReg = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
	    if ( emailReg.test(strEmail) ) {
	        return true;
	    }
	    else {
	        alert("您输入的Email地址格式不正确！");
	        return false;
	    }
	};
	 
	/*
	用途：校验ip地址的格式 
	输入：strIP：ip地址 
	返回：如果通过验证返回true,否则返回false； 
	*/
	export function isIP(strIP):boolean 
	{
	    if (isNull(strIP)) {
	        return false;
	    }
	    let re = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/g //匹配IP地址的正则表达式 
	    if (re.test(strIP)) {
            if (Number(RegExp.$1) < 256 && Number(RegExp.$2) < 256 && Number(RegExp.$3) < 256 && Number(RegExp.$4) < 256) {
	            return true;
	        }
	    }
	    return false;
	};
	 
	/* 
	用途：检查输入手机号码是否正确 
	输入：strMobile：字符串 
	返回：如果通过验证返回true,否则返回false 
	*/
	export function checkMobile( strMobile ):boolean
	{
	    let regu:string = "/^[1][3][0-9]{9}$/";
	    let re = new RegExp(regu);
	    if (re.test(strMobile)) {
	        return true;
	    }
	    else {
	        return false;
	    }
	};
	 
	/* 
	用途：检查输入的电话号码格式是否正确 
	输入：strPhone：字符串 
	返回：如果通过验证返回true,否则返回false 
	*/
	export function checkPhone( strPhone ):boolean 
	{
	    let phoneRegWithArea = /^[0][1-9]{2,3}-[0-9]{5,10}$/;
	    let phoneRegNoArea = /^[1-9]{1}[0-9]{5,8}$/;
        let prompt = "您输入的电话号码不正确!";
        if (strPhone.length > 9) {
	        if ( phoneRegWithArea.test(strPhone) ) {
	            return true;
	        }
	        else {
	            alert( prompt );
	            return false;
	        }
	    }
	    else {
	        if ( phoneRegNoArea.test( strPhone ) ) {
	            return true;
	        }
	        else {
	            alert( prompt );
	            return false;
	        }
	    }
	};
	 
	/* 
	用途：检查输入字符串是否为空或者全部都是空格 
	输入：str 
	返回：如果全是空返回true,否则返回false 
	*/
	export function isNull( str ):boolean
	{
	    if ( str == "" ) {
	        return true;
	    }
	    let regu = "^[ ]+$";
	    let re = new RegExp(regu);
	    return re.test(str);
	};
	 
	/* 
	用途：检查输入对象的值是否符合整数格式 
	输入：str 输入的字符串 
	返回：如果通过验证返回true,否则返回false 
	*/
	export function isInteger( str ):boolean
	{
	    let regu = /^[-]{0,1}[0-9]{1,}$/;
	    return regu.test(str);
	};
	 
	/* 
	用途：检查输入字符串是否符合正整数格式 
	输入：s：字符串 
	返回：如果通过验证返回true,否则返回false 
	*/
	export function isNumber( s ):boolean
	{
	    let regu = "^[0-9]+$";
	    let re = new RegExp(regu);
	    if (s.search(re) != - 1) {
	        return true;
	    }
	    else {
	        return false;
	    }
	};
	 
	/* 
	用途：检查输入字符串是否符合金额格式,格式定义为带小数的正数，小数点后最多三位 
	输入：s：字符串 
	返回：如果通过验证返回true,否则返回false 
	*/
	export function isMoney( s ):boolean
	{
	    let regu = "^[0-9]+[\.][0-9]{0,3}$";
	    let re = new RegExp(regu);
	    if (re.test(s)) {
	        return true;
	    }
	    else {
	        return false;
	    }
	};
	 
	/*
	function:cTrim(sInputString,iType) 
	description:字符串去空格的函数 
	parameters:iType：1=去掉字符串左边的空格;2=去掉字符串左边的空格;0=去掉字符串左边和右边的空格 
	return value:去掉空格的字符串 
	*/
	export function cTrim(sInputString, iType):string 
	{
	    let sTmpStr = ' ';
	    let i = - 1;
	    if (iType == 0 || iType == 1) 
	    {
	        while (sTmpStr == ' ') {
	            ++i;
	            sTmpStr = sInputString.substr(i, 1);
	        }
	        sInputString = sInputString.substring(i);
	    }
	    if (iType == 0 || iType == 2) 
	    {
	        sTmpStr = ' ';
	        i = sInputString.length;
	        while (sTmpStr == ' ') {
	            --i;
	            sTmpStr = sInputString.substr(i, 1);
	        }
	        sInputString = sInputString.substring(0, i + 1);
	    }
	    return sInputString;    
	}

	export function GetNowDate():string{
		let now = new Date();
		let year=now.getFullYear();
		let month=now.getMonth()+1; 
		let date=now.getDate(); 
		let hour=now.getHours(); 
		let minute=now.getMinutes(); 
		let second=now.getSeconds(); 
		let mill = now.getMilliseconds();
		return year+"-"+month+"-"+date+" "+hour+":"+minute+":"+second+" "+mill; 
	}

	//字符串转字节流
	export function decodeString2ByteArray(source:string):egret.ByteArray{
		let result:egret.ByteArray = new egret.ByteArray();
		result.writeUTFBytes(source);
		return result;
	}

	export function  ToGBKString(buffer: ArrayBuffer, byteOffset?: number, byteLength?: number):string{
              if ('TextDecoder' in window) { 
                    let dataView = new DataView(buffer,byteOffset,byteLength);  
                    let decoder = new window['TextDecoder']('gbk');  
                    let decodedString = decoder.decode(dataView);  
                    console.info(decodedString);  
                    return decodedString;
              } else {  
                console.error('Your browser does not support the Encoding API.');  
            }  
        }
}