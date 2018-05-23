function initHospital(){
	var result = JSON.parse(localStorage.getItem("result"));
	var districts = result.data.districts;
	$("body").append(
		'<div class="allArea-container" id = "allAreaContainer">'+
			'<div class="a-bg"></div>'+
			'<div class="city-container">'+
				'<div class="city1">'+
				'</div>'+
				'<div class="city2">'+
				'</div>'+
				'<div class="city3">'+
				'</div>'+
			'</div>'+
		'</div>'
	);
	for(var i = 0;i < districts.length;i++){
		var item = districts[i];
		$('.city1').append('<div class="city-name" onclick = "loadCity2('+item.id+',this)">'+item.name+'</div>');
	}
	
	var hospitalInformations = result.data.hospitalInformations;
	$('#hospitalContainer').empty();
	for(var i = 0;i < hospitalInformations.length;i++){
		var hitem = hospitalInformations[i];
		var uuid = getDomUUid(hitem.uuid);
		page.uuids[uuid] = hitem;
		$('#hospitalContainer').append('<div dataid = "'+uuid+'"><div>'+ hitem.name +'</div></div>');
	}
	hospitalEvent();
}

function getDomUUid(uuid){
	if(Common.isEmpty(uuid)){
		var rid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
	        return v.toString(16);
	    });
        uuid = rid;
	}
	
	return uuid;
	
}

function hospitalEvent(){
	$('.hospital-container > div').on('click',function(){
		var self = $(this);
		$('.hospital-container > div').removeClass('active')
		self.addClass('active');
		$('#selHospitalBtn').text(self.text());
		$('#selectHospital').hide();
		$('#record').show();
		
		var dataid = self.attr('dataid');
		var data = page.uuids[dataid];
		page.saveData.hospitalId = data.id;

		page.pflag.afidSelectHospital = self.text();
		page.nextFlag.afidSelectHospital = self.text();
		progressEvent();
	});
}

function showAreaSelect(){
	$('#allAreaContainer').show();
}

function loadCity2(id,self){
	page.city1 = id;
	page.city1Name = $(self).text();
	$('.city1 .city-name').removeClass('active');
	$('#areaSelect').text($(self).text());
	$(self).addClass('active');
	var url = Common.interfacePrefix() + '/s/sys/district/getChildrenByPid';
	var data = {
		parentId:id
	}
	Common.ajax(url,data,true,function(result){
		if(result.resultCode == "0"){
			var cs = result.dataList;
			$('.city2').empty();
			$('.city3').empty();
			$('.city2').append('<div class="city-name" onclick = "loadHospitals(this,'+id+',2)">全部</div>');
			for(var i = 0;i < cs.length;i++){
				var item = cs[i];
				$('.city2').append('<div class="city-name" onclick = "loadCity3('+item.id+',this)">'+item.name+'</div>');
			}
		}else{
			Common.tips('服务器繁忙,请稍后再试');
		}
	})
}

function loadCity3(id,self){
	page.city2 = id;
	page.city2Name = $(self).text();
	$('.city2 .city-name').removeClass('active');
	$('#areaSelect').text($(self).text());
	$(self).addClass('active');
	var url = Common.interfacePrefix() + '/s/sys/district/getChildrenByPid';
	var data = {
		parentId:id
	}
	Common.ajax(url,data,true,function(result){
		if(result.resultCode == "0"){
			var cs = result.dataList;
			$('.city3').empty();
			$('.city3').append('<div class="city-name" onclick = "loadHospitals(this,'+page.city1+','+id+',3)">全部</div>');
			for(var i = 0;i < cs.length;i++){
				var item = cs[i];
				$('.city3').append('<div class="city-name" onclick = "endHos(this,'+page.city1+','+page.city2+','+item.id+')">'+item.name+'</div>');
			}
		}else{
			Common.tips('服务器繁忙,请稍后再试');
		}
	})
}

function endHos(self,city1,city2,city3){
	$('#areaSelect').text($(self).text());
	loadHospitals(self,city1,city2,city3);
}

function loadHospitals(self,city1,city2,city3){
	if(city2 == 2){
		$("#areaSelect").text(page.city1Name);
		$('.city3').empty();
		city2 = undefined;
	}
	if(city3 == 3){
		$("#areaSelect").text(page.city2Name);
		city3 = undefined;
	}
	$(self).parent().children().removeClass('active');
	$(self).addClass('active');
	var url = Common.interfacePrefix() + '/s/wechat/question/getHospitalByAreaCode';
	var data = {
		province:city1,
		city:city2,
		county:city3
	}
	Common.ajax(url,data,true,function(result){
		if(result.resultCode == "0"){
			var hospitalInformations = result.dataList;
			$('#hospitalContainer').empty();
			for(var i = 0;i < hospitalInformations.length;i++){
				var hitem = hospitalInformations[i];
				var uuid = getDomUUid(hitem.uuid);
				page.uuids[uuid] = hitem;
				$('#hospitalContainer').append('<div dataid = "'+uuid+'"><div>'+ hitem.name +'</div></div>');
			}
			hospitalEvent();
		}else{
			Common.tips('服务器繁忙,请稍后再试');
		}
	})
	$('#allAreaContainer').hide();
}

