var subjects = [{
    topicNumber:"s1",
    type:"5", //1.单选 2.多选 3。填空  4.special  5、医院
    isMust:"1",
    isProgress : false,
    topic:"请问您现在是哪家医院的员工？",
    options:[]
},{
    topicNumber:"",
    type:"1", 
 	isProgress : false,
    topic:"",
    options:[]
}]

var headSubjects = [{
    topicNumber:"s1",
    type:"5", //1.单选 2.多选 3。填空  4.special  5、医院
    isMust:"1",
 	isProgress : false,
    topic:"请问您现在是哪家医院的员工？",
    options:[]
},{
    topicNumber:"",
    type:"1", 
 	isProgress : false,
    topic:"",
    options:[]
}]

var fixSubjects = [{
    topicNumber:"115",
    type:"3", //1.单选 2.多选 3。填空  4.special  5、医院
    isMust:"1",
    isDomFix:true,
    topic:"你的姓名是",
    isFix:true,
    fixFeild:'name',
    options:[]
},{
    topicNumber:"115",
    type:"3", //1.单选 2.多选 3。填空  4.special  5、医院
    isMust:"1",
    topic:"您所在的医疗机构名称是",
    isFix:true,
    fixFeild:'hospitalName',
    options:[]
},{
    topicNumber:"115",
    type:"3", //1.单选 2.多选 3。填空  4.special  5、医院
    isMust:"1",
    topic:"您的邮箱地址是",
    isFix:true,
    fixFeild:'email',
    options:[]
},{
    topicNumber:"115",
    type:"3", //1.单选 2.多选 3。填空  4.special  5、医院
    isMust:"1",
    topic:"您的所属地区是",
    isFix:true,
    fixFeild:'area',
    options:[{no:"A",isFix:true,fixFeild:"sex",option:"安徽"},{no:"A",isFix:true,fixFeild:"sex",option:"北京"},{no:"A",isFix:true,fixFeild:"sex",option:"重庆"},{no:"A",isFix:true,fixFeild:"sex",option:"福建"},{no:"A",isFix:true,fixFeild:"sex",option:"甘肃"},{no:"A",isFix:true,fixFeild:"sex",option:"广东"},{no:"A",isFix:true,fixFeild:"sex",option:"广西"},{no:"A",isFix:true,fixFeild:"sex",option:"贵州"},{no:"A",isFix:true,fixFeild:"sex",option:"海南"},{no:"A",isFix:true,fixFeild:"sex",option:"河北"},{no:"A",isFix:true,fixFeild:"sex",option:"黑龙江"},{no:"A",isFix:true,fixFeild:"sex",option:"河南"},{no:"A",isFix:true,fixFeild:"sex",option:"香港"},{no:"A",isFix:true,fixFeild:"sex",option:"湖北"},{no:"A",isFix:true,fixFeild:"sex",option:"湖南"},{no:"A",isFix:true,fixFeild:"sex",option:"江苏"},{no:"A",isFix:true,fixFeild:"sex",option:"江西"},{no:"A",isFix:true,fixFeild:"sex",option:"吉林"},{no:"A",isFix:true,fixFeild:"sex",option:"辽宁"},{no:"A",isFix:true,fixFeild:"sex",option:"澳门"},{no:"A",isFix:true,fixFeild:"sex",option:"内蒙古"},{no:"A",isFix:true,fixFeild:"sex",option:"宁夏"},{no:"A",isFix:true,fixFeild:"sex",option:"青海"},{no:"A",isFix:true,fixFeild:"sex",option:"山东"},{no:"A",isFix:true,fixFeild:"sex",option:"上海"},{no:"A",isFix:true,fixFeild:"sex",option:"山西"},{no:"A",isFix:true,fixFeild:"sex",option:"陕西"},{no:"A",isFix:true,fixFeild:"sex",option:"四川"},{no:"A",isFix:true,fixFeild:"sex",option:"台湾"},{no:"A",isFix:true,fixFeild:"sex",option:"天津"},{no:"A",isFix:true,fixFeild:"sex",option:"新疆"},{no:"A",isFix:true,fixFeild:"sex",option:"西藏"},{no:"A",isFix:true,fixFeild:"sex",option:"云南"},{no:"A",isFix:true,fixFeild:"sex",option:"浙江"}]
},{
    topicNumber:"111",
    type:"1", //1.单选 2.多选 3。填空  4.special  5、医院
    isMust:"1",
    topic:"您的性别是",
    options:[{
        no:"A",
        isFix:true,
    	fixFeild:'sex',
        option:"男"
    },{
        no:"B",
        isFix:true,
    	fixFeild:'sex',
        option:"女"
    }]
},{
    topicNumber:"1112",
    type:"1", //1.单选 2.多选 3。填空  4.special  5、医院
    isMust:"1",
    topic:"您的民族是",
    options:[{
        no:"A",
        isFix:true,
    	fixFeild:'nation',
        option:"汉族"
    },{
        no:"B",
        isFix:true,
    	fixFeild:'nation',
        option:"壮族"
    },{
        no:"B",
        isFix:true,
    	fixFeild:'nation',
        option:"回族"
    },{
        no:"B",
        isFix:true,
    	fixFeild:'nation',
        option:"满族"
    },{
        no:"B",
        isFix:true,
    	fixFeild:'nation',
        option:"维吾尔族"
    },{
        no:"B",
        isFix:true,
    	fixFeild:'nation',
        option:"其他"
    }]
},{
    topicNumber:"113",
    type:"1", 
    isMust:"1",
    isFix:true,
    topic:"你的年龄是",
    options:[{
        no:"A",
        isFix:true,
    	fixFeild:'age',
        option:"20-30岁"
    },{
        no:"B",
        isFix:true,
    	fixFeild:'age',
        option:"30-40岁"
    },{
        no:"C",
        isFix:true,
    	fixFeild:'age',
        option:"40-50岁"
    },{
        no:"D",
        isFix:true,
    	fixFeild:'age',
        option:"50-60岁"
    },{
        no:"D",
        isFix:true,
    	fixFeild:'age',
        option:"大于60岁"
    }]
},{
    topicNumber:"113",
    type:"1", 
    isMust:"1",
    isFix:true,
    topic:"你的最高学历是",
    options:[{
        no:"A",
        isFix:true,
    	fixFeild:'education',
        option:"高中及以下"
    },{
        no:"B",
        isFix:true,
    	fixFeild:'education',
        option:"中专"
    },{
        no:"C",
        isFix:true,
    	fixFeild:'education',
        option:"大专"
    },{
        no:"D",
        isFix:true,
    	fixFeild:'education',
        option:"本科"
    },{
        no:"D",
        isFix:true,
    	fixFeild:'education',
        option:"研究生"
    }]
},{
    topicNumber:"113",
    type:"1", 
    isMust:"1",
    isFix:true,
    topic:"你所在的科室是",
    options:[{
        no:"A",
        isFix:true,
    	fixFeild:'department',
        option:"门诊中药房"
    },{
        no:"B",
        isFix:true,
    	fixFeild:'department',
        option:"门诊西药房 "
    },{
        no:"C",
        isFix:true,
    	fixFeild:'department',
        option:"住院药房 "
    },{
        no:"D",
        isFix:true,
    	fixFeild:'department',
        option:"临床药学室"
    }]
},{
    topicNumber:"115",
    type:"1", //1.单选 2.多选 3。填空  4.special  5、医院
    isMust:"1",
    topic:"您的职称是",
    isFix:true,
    options:[{
        no:"A",
        isFix:true,
    	fixFeild:'professionalTitle',
        option:"药士"
    },{
        no:"B",
        isFix:true,
    	fixFeild:'professionalTitle',
        option:"药师"
    },{
        no:"C",
        isFix:true,
    	fixFeild:'professionalTitle',
        option:"主管药师"
    },{
        no:"D",
        isFix:true,
    	fixFeild:'professionalTitle',
        option:"副主任药师"
    },{
        no:"D",
        isFix:true,
    	fixFeild:'professionalTitle',
        option:"主任药师"
    }]
},{
    topicNumber:"116",
    type:"3", //1.单选 2.多选 3。填空  4.special  5、医院
    isFix:true,
    requireValidate:true,
    fixFeild:'telephone',
    isMust:"1",
    topic:"您的手机号",
    options:[]
}]

//common qs select
var QSSelect = function(){
	var selectDom;
	
	function init(QSSelectObj,changeCallback){
		refactorDom(QSSelectObj.sid);

		var so = QSSelectObj;
		var sid = so.sid;
		var data = so.data;
		selectDom = $('#'+ so.sid);
		
		var odom = $('#'+ so.sid +' .content');
		for(var i = 0; i < data.length; i++){
			var item = data[i];
			odom.append('<div class="option" index = "'+ i +'"><i class="radio"></i><span>'+ item.area +'</span></div>')
		}
		selectRadioEvent(changeCallback);
	}
	function refactorDom(sid){
		var d = $('#' + sid);
		var id = d.attr('id');
		var text = d.text();
		d.replaceWith('' + 
			'<div id = "areaSelect" class="qs-select">' + 
				'<div class="title">'+ text +'</div>' + 
				'<div class="content-container">' + 
					'<div class="content-wrap">' + 
						'<div class="content"></div>' + 
					'</div>' + 
					'<div class="background"></div>' + 
				'</div>' + 
				'<div class="arrow"></div>' + 
			'</div>'
		);
		
		
	}
	function selectRadioEvent(changeCallback){
		selectDom.find('.title').on('click',function(){
			selectDom.find('.content-container').show();
		});
		selectDom.find('.arrow').on('click',function(){
			selectDom.find('.content-container').show();
		});
		selectDom.find('i.radio').parent().on('click',function(){
			var self = $(this);
			self.parent().find('i.radio').removeClass('active');
			self.find('i.radio').addClass('active');
			//dom handle after
			selectDom.find('.title').text(self.find('span').text());
			var nindex = selectDom.find('.title').attr('nindex');
			var sindex = self.attr('index');
			if(Common.isEmpty(nindex)){
				toChange(changeCallback);
			}else{
				if(nindex != sindex){
					toChange(changeCallback);
				}
			}
			selectDom.find('.title').attr('nindex',sindex);
			selectDom.find('.content-container').hide();
		});
		/*selectDom.find('i.radio').parent().on('touchstart',function(e){
			e.stopPropagation();
		});*/
		selectDom.find('.background').on('click',function(){
			selectDom.find('.content-container').hide();
		});
		/*selectDom.find('.background').on('touchstart',function(e){
			e.stopPropagation();
		})*/
	}
	function toChange(changeCallback){
		selectDom.find('.title').css('color','#333333');
		if(!Common.isEmpty(changeCallback)){
			changeCallback();
		}
	}
	function getSelectText(sid){
		return $('#'+sid).find('.title').text();
	}
	return {
		init:function(QSSelectObj,changeCallback){
			/***
			 *{
			 * 	data:[{option:'text'}]
			 *  sid:select dom attr id
			 * }
			 */
			init(QSSelectObj,changeCallback);
		},
		getSelectText:function(sid){
			return getSelectText(sid);
		}
	}
}();


function getPosition(){
	var map = new BMap.Map("allmap");
  	var geolocation = new BMap.Geolocation();
	geolocation.getCurrentPosition(function(r){
		if(this.getStatus() == BMAP_STATUS_SUCCESS){
			var mk = new BMap.Marker(r.point);
			map.addOverlay(mk);
			map.panTo(r.point);
			page.saveData.latitude = r.point.lat;
			page.saveData.longitude = r.point.lng;
		}
		else {
			alert('failed'+this.getStatus());
		}        
	},{enableHighAccuracy: true})
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

function loadCity2(id,self){
	page.city1 = id;
	page.city1Name = $(self).text();
	$('.city1 .city-name').removeClass('active');
	//$('input[sid="area"]').val($(self).text());
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
	//$('input[sid="area"]').val($(self).text());
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
	$('input[sid="area"]').val(page.city1Name+page.city2Name+$(self).text());
	loadHospitals(self,city1,city2,city3);
}

function loadHospitals(self,city1,city2,city3){
	if(city2 == 2){
		$('input[sid="area"]').val(page.city1Name);
		$('.city3').empty();
		city2 = undefined;
	}
	if(city3 == 3){
		$('input[sid="area"]').val(page.city1Name+page.city2Name);
		city3 = undefined;
	}
	$(self).parent().children().removeClass('active');
	$(self).addClass('active');
	
	$('#allAreaContainer').hide();
	
	var afid = $('input[sid="area"]').attr('afid');
	page.pflagtemp['afid' + afid] = $('input[sid="area"]').val();
	page.nextFlag['afid'+afid] = afid;
	page.pflag['afid' + afid] = afid;
	page.saveData['area'] = $('input[sid="area"]').val();
	progressEvent();
}

