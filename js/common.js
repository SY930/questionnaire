var Common = (function(){
	//获取url上的参数
	function getParameter(key){
		var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if (r != null) return unescape(r[2]);
		return null;
	}
	//初始化页面
	function init(){
		//loadFramework();
		$(function(){
			var target = getParameter("target");
			$("#backBtn").click(function(){
				window.history.back();
			});
			//loadFrameworkEvent();
		});
	}
	function loadFramework(){
		document.write('<script type="text/javascript" src="js/fastclick.js" ></script>');
	}
	function loadFrameworkEvent(){
		FastClick.attach(document.body);
	}
	//设置本地存储
	function setLocalItem(k,v){
		localStorage.setItem(k,v);
	}
	//获取本地存储的元素值
	function getLocalItem(k){
		var v = localStorage.getItem(k);
		return v;
	}
	//删除本地存储
	function removeLocalItem(k){
		localStorage.removeItem(k);
	}
	//根据key获取相应正则表达式
	function getRex(key){
		var rex = null;
		if(key == "mobile"){
			rex = /^\d{11}$/;
		}
		if(key == "detailAddress"){
			rex = /^.{7,60}/i;
		}
		if(key == "consigneeName"){
			rex = /^.{2,15}/i
		}
		return rex;
	}
	//判断是否是ios屏幕
	function isIosScreen(){
		var u = navigator.userAgent, app = navigator.appVersion;
	    var isIos = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	    return isIos;
	}
	//判断对象是否为空
	function isEmpty(v){
		if(typeof(v) == "undefined"|| v == "undefined" || v == null || v == "null" || $.trim(v) == ""){
			return true;
		}
		return false;
	}
	function formatTime(longTime){
		var date = new Date(longTime);
		var year = date.getFullYear();
		var month = date.getMonth() + 1;
		var day = date.getDate();
		var hour = date.getHours();
		var minute = date.getMinutes();
		var second = date.getSeconds();
		return year + "-" + formatTen(month) + "-" + formatTen(day);
	}
	function formatTime2(longTime){
		var date = new Date(longTime);
		var year = date.getFullYear();
		var month = date.getMonth() + 1;
		var day = date.getDate();
		var hour = formatTen(date.getHours());
		var minute = formatTen(date.getMinutes());
		var second = formatTen(date.getSeconds());
		return year + "-" + formatTen(month) + "-" + formatTen(day) + " " + hour + ":" + minute + ":" + second;
	}
	function formatTen(num) {
		return num > 9 ? (num + "") : ("0" + num);
	}
	function getPrefix(){
		return window.location.protocol +"//" +window.location.host+"/sfitest";
	}
	function ajax(url,data,async,successCallback){
		if(!Common.isEmpty(window.CordovaPluginTools)){
			var requestBody = {
				params:data,
				url:url
			}
			CordovaPluginTools.ajax(requestBody,async,function(result){
				changeNullToEmpty(result);
				successCallback(result);
			});
		}else if(!Common.isEmpty(window.jsInterface)){
			var requestBody = {
				params:data,
				url:url
			}
			Common.ajaxTemp = {};
			Common.ajaxTemp.requestBody = requestBody;
			Common.ajaxTemp.async = async;
			Common.ajaxTemp.successCallback = successCallback;
			
			verifyAjax(requestBody,async,function(result){
				changeNullToEmpty(result);
				successCallback(result);
			});
		}else{
			$.ajax({
				type:"post",
				url:url,
				data:data,
				timeout:30000,
				dataType:"json",
				async:async,
				success:function(result){
					changeNullToEmpty(result);
					successCallback(result);
				},
				error:function(result){
					if(window.alertFlag != 1){
						//alert("服务器繁忙，请稍后再试!");
						window.alertFlag = 1;
						setTimeout(function(){
							window.alertFlag = undefined;
						},5000);
					}
				}
			});
		}
	}
	function verifyAjax(requestBody,async,successCallback){
		try{
			var signRequire = {};
			signRequire.method = "POST";
			signRequire.url = requestBody.url;
			signRequire.jsonParamStr = JSON.stringify(requestBody.params);
			signRequire.cm_timestamp = new Date().getTime()+"";
			signRequire.cm_expires = new Date().getTime() + 10 * 60 * 1000+"";
			var sign = window.jsInterface.getSignCode(signRequire.method,signRequire.url,signRequire.jsonParamStr,
				signRequire.cm_timestamp,signRequire.cm_expires);
			var data = window.jsInterface.getNativeUserInfo();
			if(Common.isEmpty(data)){
				return;
			}
			data = JSON.parse(data);
			signRequire.method = undefined;
			signRequire.jsonParamStr = undefined;
			signRequire.url = undefined;
			verifyAjaxTo(requestBody,sign,data,signRequire,successCallback,async);
			
		}catch(e){
			alert(e.message)
		}
	}
	function verifyAjaxTo(requestBody,sign,data,signRequire,successCallback,async){
		var base = {};
		base.cm_token = data.token;
		base.cm_version_num = data.cmVersionNum;
		base.cm_version_code = data.cmVersionCode;
		base.cm_device_type = data.cmDeviceType;
		base.cm_device_id = data.cmDeviceId;
		base.cm_device_version = data.cmDeviceVersion;
		base.cm_app_type = data.cmAppType;
		base.cm_app_key = data.cmAppkey;
		base.cm_api_v = data.cmApiV;
		base.cm_sign = sign;
		var data = $.extend({},requestBody.params,signRequire,base);
		$.ajax({
	        type: "post",
	        url: requestBody.url,
	        dataType: "json",
	        data: data,
	        async:async,
	        success: function (data) {
	        	if(data.resultCode == '0'){
		        	successCallback(data);
	        	}else if(data.resultCode == '30612'){
	        		showToast(data.resultMsg)
	        		toNativeLoginPage();
	        	}else if(data.resultCode == '30608'){
	        		showToast(data.resultMsg)
	        		toNativeLoginPage();
	        	}else if(data.resultCode == '30607'){
	        		resetToken(function(){
						var requestBody = Common.ajaxTemp.requestBody;
						var async = Common.ajaxTemp.async;
						var successCallback = Common.ajaxTemp.successCallback;
						
						verifyAjax(requestBody,async,function(result){
							changeNullToEmpty(result);
							successCallback(result);
						});
	        		})
	        	}
	        },
	        error:function(data){
	        	//alert("服务器繁忙，请稍后再试!");
	        }
	    })
	}
	function resetToken(callback){
		var tmpFunName = 'callback' + getRandomNum(1,1000) + (new Date().getTime());
		Common[tmpFunName] = function(data){
			callback();
		}
		jsInterface.refreshToken("Common."+tmpFunName);
	}
	function getRandomNum(Min, Max) {
		var Range = Max - Min;
		var Rand = Math.random();
		return(Min + Math.round(Rand * Range));
	}
	function showToast(msg){
		if(Common.isEmpty(Common.toastFlag)){
			jsInterface.showToast(msg);
			Common.toastFlag = 1;
			window.setTimeout(function(){
				Common.toastFlag = undefined;
			},3000);
		}
	}
	function toNativeLoginPage(jscallback){
		if(Common.isEmpty(Common.loginFlag)){
			jsInterface.doLogin();
			window.callback = function(data){
				jscallback();
			}
			Common.loginFlag = "1";
			window.setTimeout(function(){
				Common.loginFlag = undefined;
			},3000);
		}
	}
	function changeNullToEmpty(result){
		for(index in result){
			var item = result[index];
			if(item == null){
				result[index] = "";
			}else if(typeof(item) == "object"){
				changeNullToEmpty(item);
			} 
		}
	}
	function getH5Prefix(){
		return window.location.protocol +"//" +window.location.host+"/cmstatic/h5/";
	}
	function reverse(arr){
		var result = [];
		for(var i = arr.length - 1; i >= 0 ; i-- ){
			result.push(arr[i]);
		}
		return result;
	}
	
	function tips(msg){
		var commonTips = $("#commonTips");
		if(commonTips.length == 0){
			$("body").append('<div id = "commonTips" style="z-index:88888;position:fixed;top:50%;text-align:center;width:100%;"><div id = "commonTipsMsg" style="display: inline-block;height:100%;background-color: #333;opacity: 0.75;border-radius: 4px;color: #FFFFFF;padding: 8px 10px;max-width: 80%;line-height: 22px;font-size:14px;font-family: &quot;微软雅黑&quot;;">'+msg+'</div></div>');
		}else{
			commonTips.show();
			var commonTipsMsg = $("#commonTipsMsg");
			commonTipsMsg.html(msg);
			commonTips.css({opacity:"1"});
		}
		if(Common.isEmpty(window.tipsflag)){
			window.tipsflag = "1";
			setTimeout(function(){
				commonTips = $("#commonTips");
				commonTips.hide();
				commonTips.animate({opacity:"0"},"slow");
				delete window.tipsflag;
			},3000);
		}
		
		
	}
	
	return {
		interfacePrefix:function(){
			return getPrefix();
		},
		getH5Prefix:function(){
			return getH5Prefix();
		},
		getParameter:function(key){
			return getParameter(key);
		},
		init:function(){
			init();
		},
		setLocalItem:function(k,v){
			setLocalItem(k,v);
		},
		getLocalItem:function(k){
			return getLocalItem(k);
		},
		removeLocalItem:function(key){
			removeLocalItem(key);
		},
		getRex:function(key){
			return getRex(key);
		},
		isIosScreen:function(){
			return isIosScreen();
		},
		isEmpty:function(v){
			return isEmpty(v);
		},
		formatTime:function(longTime){
			return formatTime(longTime);
		},
		formatTime2:function(longTime){
			return formatTime2(longTime);
		},
		formatTen:function(num){
			return formatTen(num);
		},
		ajax:function(url,data,async,successCallback){
			ajax(url,data,async,successCallback);
		},
		reverse:function(arr){
			return reverse(arr);
		},
		tips:function(msg){
			tips(msg);
		}
	}
})();
Common.init();

function removeArrayEleByIndex(arr,dx) {
	if(dx == -1){
		return;
	}
	if(isNaN(dx) || dx > arr.length) {
		return false;
	}
	for(var i = 0, n = 0; i < arr.length; i++) {
		if(arr[i] != arr[dx]) {
			arr[n++] = arr[i]
		}
	}
	arr.length -= 1
}

function saveImageCode(){
	var v = $('.validate-input').val();
	v = v.replace(/\s/g,"");
	page.saveData.imageCode = v;
}

function reloadValidate(){
	$('#validateImg').attr('src',Common.interfacePrefix() + getValidateUrl());
}
function getValidateUrl(){
	if(!Common.isEmpty(page)){
		return '/s/code/' + (new Date().getTime()) + '/getImageCode?openId='+page.saveData.openid;
	}
	return "";
}