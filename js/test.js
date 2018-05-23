/*var hospitals = [{
 area:"北京",
 hospitals:["北京医院","中日友好医院","中国医学科学院北京协和医院","中国医学科学院阜外心血管病医院","中国医学科学院肿瘤医院","中国医学科学院整形外科医院",
 "中国医学科学院血液病医院","中国医学科学院皮肤病医院","北京大学第一医院","北京大学人民医院","北京大学第三医院","北京大学口腔医院","北京大学第六医院"]
 },{
 area:"吉林",
 hospitals:["吉林大学第一医院","吉林大学第二医院","吉林大学中日联谊医院","吉林大学口腔医院"]
 },{
 area:"上海",
 hospitals:["复旦大学附属中山医院","复旦大学附属华山医院","复旦大学附属儿科医院","复旦大学附属妇产科医院","复旦大学附属眼耳鼻喉科医院","复旦大学附属肿瘤医院"]
 },{
 area:"山东",
 hospitals:["山东大学齐鲁医院","山东大学第二医院"]
 },{
 area:"湖北",
 hospitals:["华中科技大学同济医学院附属协和医院","华中科技大学同济医学院附属同济医院","华中科技大学同济医学院附属梨园医院"]
 },{
 area:"湖南",
 hospitals:["中南大学湘雅医院","中南大学湘雅二医院","中南大学湘雅三医院"]
 },{
 area:"广州",
 hospitals:["中山大学附属第一医院","中山大学孙逸仙纪念医院","中山大学附属第三医院","中山大学肿瘤防治中心","中山大学中山眼科中心","中山大学附属口腔医院"]
 },{
 area:"四川",
 hospitals:["四川大学华西医院","四川大学华西第二医院","四川大学华西口腔医院","四川大学华西第四医院"]
 },{
 area:"西安",
 hospitals:["西安交通大学医学院第一附属医院","西安交通大学医学院第二附属医院","西安交通大学医学院附属口腔医院"]
 }];*/
var subjects = [{
    topicNumber: "s1",
    type: "5", //1.单选 2.多选 3。填空  4.special  5、医院
    isMust: "1",
    isProgress: false,
    topic: "请问您现在是哪家医院的员工？",
    options: []
}, {
    topicNumber: "",
    type: "1",
    isProgress: false,
    topic: "",
    options: []
}]

var headSubjects = [{
    topicNumber: "s1",
    type: "5", //1.单选 2.多选 3。填空  4.special  5、医院
    isMust: "1",
    isProgress: false,
    topic: "请问您现在是哪家医院的员工？",
    options: []
}, {
    topicNumber: "",
    type: "1",
    isProgress: false,
    topic: "",
    options: []
}]

var fixSubjects = [
    {
        topicNumber: "111",
        type: "1", //1.单选 2.多选 3。填空  4.special  5、医院
        isMust: "1",
        isDomFix: true,
        topic: "您的性别是",
        options: [{
            no: "A",
            isFix: true,
            fixFeild: 'sex',
            option: "男"
        }, {
            no: "B",
            isFix: true,
            fixFeild: 'sex',
            option: "女"
        }]
    }, {
        topicNumber: "113",
        type: "1",
        isMust: "1",
        isFix: true,
        topic: "您的受教育程度",
        options: [{
            no: "A",
            isFix: true,
            fixFeild: 'education',
            option: "初中及以下"
        }, {
            no: "B",
            isFix: true,
            fixFeild: 'education',
            option: "高中或中专"
        }, {
            no: "C",
            isFix: true,
            fixFeild: 'education',
            option: "本科或大专"
        }, {
            no: "D",
            isFix: true,
            fixFeild: 'education',
            option: "研究生"
        }]
    }, {
        topicNumber: "116",
        type: "3", //1.单选 2.多选 3。填空  4.special  5、医院
        isFix: true,
        fixFeild: 'workYear',
        isMust: "1",
        topic: "您在本单位的工作年限",
        options: []
    }, {
        topicNumber: "114",
        type: "1",
        isMust: "1",
        topic: "您现在的工作岗位是",
        isFix: true,
        options: [{
            no: "A",
            isFix: true,
            fixFeild: 'workPost',
            option: "管理人员"
        }, {
            no: "B",
            isFix: true,
            fixFeild: 'workPost',
            option: "医生"
        }, {
            no: "C",
            isFix: true,
            fixFeild: 'workPost',
            option: "护士"
        }, {
            no: "D",
            isFix: true,
            fixFeild: 'workPost',
            option: "药师"
        }, {
            no: "D",
            isFix: true,
            fixFeild: 'workPost',
            option: "技师"
        }, {
            no: "D",
            isFix: true,
            fixFeild: 'workPost',
            option: "后勤人员"
        }, {
            no: "D",
            isFix: true,
            fixFeild: 'workPost',
            option: "其他"
        }]
    }, {
        topicNumber: "115",
        type: "1", //1.单选 2.多选 3。填空  4.special  5、医院
        isMust: "1",
        topic: "您的职称是",
        isFix: true,
        options: [{
            no: "A",
            isFix: true,
            fixFeild: 'workLever',
            option: "无职称"
        }, {
            no: "B",
            isFix: true,
            fixFeild: 'workLever',
            option: "初级"
        }, {
            no: "C",
            isFix: true,
            fixFeild: 'workLever',
            option: "中级"
        }, {
            no: "D",
            isFix: true,
            fixFeild: 'workLever',
            option: "副高"
        }, {
            no: "D",
            isFix: true,
            fixFeild: 'workLever',
            option: "正高"
        }]
    }, {
        topicNumber: "116",
        type: "3", //1.单选 2.多选 3。填空  4.special  5、医院
        isFix: true,
        requireValidate: true,
        fixFeild: 'telephone',
        isMust: "1",
        topic: "您的手机号",
        options: []
    }]

//common qs select
var QSSelect = function () {
    var selectDom;

    function init(QSSelectObj, changeCallback) {
        refactorDom(QSSelectObj.sid);

        var so = QSSelectObj;
        var sid = so.sid;
        var data = so.data;
        selectDom = $('#' + so.sid);

        var odom = $('#' + so.sid + ' .content');
        for (var i = 0; i < data.length; i++) {
            var item = data[i];
            odom.append('<div class="option" index = "' + i + '"><i class="radio"></i><span>' + item.area + '</span></div>')
        }
        selectRadioEvent(changeCallback);
    }

    function refactorDom(sid) {
        var d = $('#' + sid);
        var id = d.attr('id');
        var text = d.text();
        d.replaceWith('' +
            '<div id = "areaSelect" class="qs-select">' +
            '<div class="title">' + text + '</div>' +
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

    function selectRadioEvent(changeCallback) {
        selectDom.find('.title').on('click', function () {
            selectDom.find('.content-container').show();
        });
        selectDom.find('.arrow').on('click', function () {
            selectDom.find('.content-container').show();
        });
        selectDom.find('i.radio').parent().on('click', function () {
            var self = $(this);
            self.parent().find('i.radio').removeClass('active');
            self.find('i.radio').addClass('active');
            //dom handle after
            selectDom.find('.title').text(self.find('span').text());
            var nindex = selectDom.find('.title').attr('nindex');
            var sindex = self.attr('index');
            if (Common.isEmpty(nindex)) {
                toChange(changeCallback);
            } else {
                if (nindex != sindex) {
                    toChange(changeCallback);
                }
            }
            selectDom.find('.title').attr('nindex', sindex);
            selectDom.find('.content-container').hide();
        });
        /*selectDom.find('i.radio').parent().on('touchstart',function(e){
         e.stopPropagation();
         });*/
        selectDom.find('.background').on('click', function () {
            selectDom.find('.content-container').hide();
        });
        /*selectDom.find('.background').on('touchstart',function(e){
         e.stopPropagation();
         })*/
    }

    function toChange(changeCallback) {
        selectDom.find('.title').css('color', '#333333');
        if (!Common.isEmpty(changeCallback)) {
            changeCallback();
        }
    }

    function getSelectText(sid) {
        return $('#' + sid).find('.title').text();
    }

    return {
        init: function (QSSelectObj, changeCallback) {
            /***
             *{
			 * 	data:[{option:'text'}]
			 *  sid:select dom attr id
			 * }
             */
            init(QSSelectObj, changeCallback);
        },
        getSelectText: function (sid) {
            return getSelectText(sid);
        }
    }
}();


function getPosition() {
    var map = new BMap.Map("allmap");
    var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function (r) {
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
            var mk = new BMap.Marker(r.point);
            map.addOverlay(mk);
            map.panTo(r.point);
            page.saveData.latitude = r.point.lat;
            page.saveData.longitude = r.point.lng;
        }
        else {
            alert('failed' + this.getStatus());
        }
    }, {enableHighAccuracy: true})
}