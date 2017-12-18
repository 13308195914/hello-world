require.config({
	//定义基准路径
	baseUrl: "../../js/require",
　　 paths: {
　　　　　　"jquery": "jquery",
	      'laydate':'../../plugin/laydate/laydate',//日期控件引入
	      'cityselect':'../../js/require/jquery.cityselect'//地址控件引入
　　 },
	//基于jquery插件的配置
	shim :{
		'laydate': {
			deps: ['jquery'],
			exports: 'jQuery.fn.laydate'
		},
		'cityselect': {
			deps: ['jquery'],
			exports: 'jQuery.fn.citySelect'
		}
	}
});
define('complex',['jquery','laydate','cityselect'],function($){
	var complex=function(){
		//根据滚动距离判断是否显示回到顶部
		$(window).scroll(function(){
			var scroll=$(document).scrollTop();
			var height=$(window).height()/2;
			if(scroll>height){
				$('#nav').stop().fadeIn();
			}else{
				$('#nav').stop().fadeOut();
			}
		});
		//鼠标滑过显示联系我们
		$('.contact1').mouseenter(function(){
				$('.slightlyQR').css('display','block');
				$('.triangle').css('display','block');
		}).mouseout(function(){
				$('.slightlyQR').css('display','none');
				$('.triangle').css('display','none');
		});
		//鼠标滑过实现二维码显示
		$('.planar').mouseover(function(){
			$('.online').css('display','block');
			$(this).find('img').css('display','none');
		}).mouseout(function(){
			$('.online').css('display','none');
			$(this).find('img').css('display','block');
		});
		//回到顶部进行提示
		$('.up').mouseover(function(){
			$('.return').css('display','block');
			$(this).find('img').css('display','none');
		}).mouseout(function(){
			$('.return').css('display','none');
			$(this).find('img').css('display','block');
		});
		//点击返回顶部
		$('.up').click(function(){
			$("body,html").animate({scrollTop:0},600);
		}).css('cursor','pointer');
		//日期的选择的
		laydate.skin('molv');
		$('#startActiveTime').click(function(){
			laydate({
				elem: '#startActiveTime',
				format: 'YYYY-MM-DD', // 分隔符可以任意定义，该例子表示只显示年月
				festival: true, //显示节日
			});
		});
		$('#endActiveTime').click(function(){
			laydate({
				elem: '#endActiveTime',
				format: 'YYYY-MM-DD', // 分隔符可以任意定义，该例子表示只显示年月
				festival: true, //显示节日
			});
		});
		$('#beginningTime').click(function(){
			laydate({
				elem: '#beginningTime',
				format: 'YYYY-MM-DD', // 分隔符可以任意定义，该例子表示只显示年月
				festival: true, //显示节日
			});
		});
		$('#endingTime').click(function(){
			laydate({
				elem: '#endingTime',
				format: 'YYYY-MM-DD', // 分隔符可以任意定义，该例子表示只显示年月
				festival: true, //显示节日

			});
		});
		$('#SABeginTime').click(function(){
			laydate({
				elem: '#SABeginTime',
				format: 'YYYY-MM-DD', // 分隔符可以任意定义，该例子表示只显示年月
				festival: true, //显示节日
			});
		});
		$('#SAEndTime').click(function(){
			laydate({
				elem: '#SAEndTime',
				format: 'YYYY-MM-DD', // 分隔符可以任意定义，该例子表示只显示年月
				festival: true, //显示节日
			});
		});
		$('#SAAtBTime').click(function(){
			laydate({
				elem: '#SAAtBTime',
				format: 'YYYY-MM-DD', // 分隔符可以任意定义，该例子表示只显示年月
				festival: true, //显示节日
			});
		});
		$('#SAAtETime').click(function(){
			laydate({
				elem: '#SAAtETime',
				format: 'YYYY-MM-DD', // 分隔符可以任意定义，该例子表示只显示年月
				festival: true, //显示节日
			});
		});

		$('#requireBtime').click(function(){
			laydate({
				elem: '#requireBtime',
				format: 'YYYY-MM-DD', // 分隔符可以任意定义，该例子表示只显示年月
				festival: true, //显示节日
			});
		});

		$('#requireEtime').click(function(){
			laydate({
				elem: '#requireEtime',
				format: 'YYYY-MM-DD', // 分隔符可以任意定义，该例子表示只显示年月
				festival: true, //显示节日
			});
		});
		//城市插件的选择
		$("#city").citySelect({
			url:"../../plugin/city.min.js",
			prov:"四川", //省份
			city:"成都", //城市
			dist:"青羊区", //区县
			nodata:"none" //当子集无数据时，隐藏select
		});
		$("#city1").citySelect({
			url:"../../plugin/city.min.js",
			prov:"四川", //省份
			city:"成都", //城市
			dist:"青羊区", //区县
			nodata:"none" //当子集无数据时，隐藏select
		});
		$("#city6").citySelect({
			url:"../../plugin/city.min.js",
			prov:"四川", //省份
			city:"成都", //城市
			dist:"青羊区", //区县
			nodata:"none" //当子集无数据时，隐藏select
		});
		$("#city2").citySelect({
			url:"../../plugin/city.min.js",
			prov:"四川", //省份
			city:"成都", //城市
			dist:"青羊区", //区县
			nodata:"none" //当子集无数据时，隐藏select
		});
		$("#city3").citySelect({
			url:"../../plugin/city.min.js",
			prov:"四川", //省份
			city:"成都", //城市
			dist:"青羊区", //区县
			nodata:"none" //当子集无数据时，隐藏select
		});
		$("#city4").citySelect({
			url:"../../plugin/city.min.js",
			prov:"四川", //省份
			city:"成都", //城市
			dist:"青羊区", //区县
			nodata:"none" //当子集无数据时，隐藏select
		}); $("#city5").citySelect({
			url:"../../plugin/city.min.js",
			prov:"四川", //省份
			city:"成都", //城市
			dist:"青羊区", //区县
			nodata:"none" //当子集无数据时，隐藏select
		});
		$("#city7").citySelect({
			url:"../../plugin/city.min.js",
			prov:"四川", //省份
			city:"成都", //城市
			dist:"青羊区", //区县
			nodata:"none" //当子集无数据时，隐藏select
		});
	}
	return {
		complex:complex
	}
});
