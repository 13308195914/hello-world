/**
 * Created by luqia on 2016/12/7.
 */
require.config({
    baseUrl: "../../js/require",
    paths: {
        "jquery": "jquery",
        'complex' : 'complex',
        'lrz' :'../../../../ShellWeb/plugin/lrz.bundle'
    }
});
require(['jquery','complex','lrz'],function($,complex,lrz){
    complex.complex();
    //图片上传
    $('#file').on('change', function(){
        lrz(this.files[0], {width: 640})
            .then(function (rst) {

                $.ajax({
                    url: site_url ,
                    type: 'post',
                    data: {img: rst.base64},
                    dataType: 'json',
                    timeout: 200000,
                    error: doAjax.error,
                    success: doAjax.success,
                });
            })
            .catch(function (err) {
            })
            .always(function () {
            });
    });
    //menu主菜单tab键的切换
    $('.identity').click(function(){
        $('.identityTab').css('display','block').siblings().css('display','none');
    });
    $('.personalHome').click(function(){
        $('.personalHomeTab').css('display','block').siblings().css('display','none');
    });
    $('.pearlWallet').bind('click',function(){
        $('.pearlWalletTab').css('display','block').siblings().css('display','none');
    });
    $('.myApply').bind('click',function(){
        $('.myApplyTab').css('display','block').siblings().css('display','none');
    });
    $('.drafts').click(function(){
        $('.draftsTab').css('display','block').siblings().css('display','none');
    });
    $('.changePassword').click(function(){
        $('.changePasswordTab').css('display','block').siblings().css('display','none');
    });
    $('.myBusiness').click(function(){
        $('.myBusinessTab').css('display','block').siblings().css('display','none');
    });
    $('.publish').click(function(){
        $('.publishTab').css('display','block').siblings().css('display','none');
    });
    $('.myPublish').click(function(){
        $('.myPublishTab').css('display','block').siblings().css('display','none');
    });
    $('.mySources').click(function(){
        $('.mySourcesTab').css('display','block').siblings().css('display','none');
    });
    $('.myShowtime').click(function(){
        $('.myShowtimeTab').css('display','block').siblings().css('display','none');
    });
    $('.myShowtime').click(function(){
        $('.myShowtimeTab').css('display','block').siblings().css('display','none');
    });
    $('.activityMessage').click(function(){
        $('.activityMessageTab').css('display','block').siblings().css('display','none');
    });
    $('.systemMessage').click(function(){
        $('.systemMessageTab').css('display','block').siblings().css('display','none');
    });
    $('.applySafeguard').click(function(){
        $('.applySafeguardTab').css('display','block').siblings().css('display','none');
    });
    $('.connectBcak').click(function(){
        $('.connectBackTab').css('display','block').siblings().css('display','none');
    });
    $('.systemHelp').click(function(){
        $('.myHelpTab').css('display','block').siblings().css('display','none');
    });
    //menu主菜单效果切换
    $('.persoanlCenter').find('.example').click(function(){
        $(this).css('background','#fff1dc').attr('cState','t').siblings().css('background','#fafafa').attr('cState','f');
        $(this).find('.options').css('color','#ff9700').end().siblings().find('.options').css('color','#2f2f2f');
        $(this).find('.hLogo').css('background','#ff9700').end().siblings().find('.hLogo').css('background','#fafafa');
    }).mouseover(function(){
        if(!!($(this).attr('cState')=='t')){
            return('哈哈');
        }else{
            $(this).find('.options').css('color','#ff9600');
        }

    }).mouseleave(function(){
        if(!!($(this).attr('cState')=='t')){
            return('哈哈');
        }else{
            $(this).find('.options').css('color','#2f2f2f');
        }

    });
// menu
    //认证页面二级tab页面的切换
    $('.owner').click(function(){
                    $(this).css({
                        background:'#ff9700',
                        border:'0',
                        color:'#fff'
                    }).attr('choose','t').siblings().css({
                        background:'#fff',
                        border:'1px solid #dcdcdc',
                        color:'#2f2f2f'
                    }).attr('choose','f');
                    $('.ownerTab').css('display','block').siblings().css('display','none');
                }).mouseover(function(){
                    var chooseT=$(this).attr('choose');
                    if(!!!(chooseT=='t')){
                        $(this).css({
                            'border' :'1px solid #ff9700',
                            'color':'#ff9700'
                        });
                    }
                 }).mouseleave(function(){
                        var chooseT=$(this).attr('choose');
                        if(!!!(chooseT=='t')){
                            $(this).css({
                                'border' :'1px solid #dcdcdc',
                                'color':'#2e2e2e'
                            });
                        }
    });
    $('.media').click(function(){
        $('.mediaTab').css('display','block').siblings().css('display','none');
        $(this).css({
            background:'#ff9700',
            border:'0',
            color:'#fff'
        }).attr('choose','t').siblings().css({
            background:'#fff',
            border:'1px solid #dcdcdc',
            color:'#2f2f2f'
        }).attr('choose','f');
    }).mouseover(function(){
        var chooseT=$(this).attr('choose');
        if(!!!(chooseT=='t')){
            $(this).css({
                'border' :'1px solid #ff9700',
                'color':'#ff9700'
            });
        }
    }).mouseleave(function(){
        var chooseT=$(this).attr('choose');
        if(!!!(chooseT=='t')){
            $(this).css({
                'border' :'1px solid #dcdcdc',
                'color':'#2e2e2e'
            });
        }
    });
    $('.school').click(function(){
        $('.schoolTab').css('display','block').siblings().css('display','none');
        $(this).css({
            background:'#ff9700',
            border:'0',
            color:'#fff'
        }).attr('choose','t').siblings().css({
            background:'#fff',
            border:'1px solid #dcdcdc',
            color:'#2f2f2f'
        }).attr('choose','f');
    }).mouseover(function(){
        var chooseT=$(this).attr('choose');
        if(!!!(chooseT=='t')){
            $(this).css({
                'border' :'1px solid #ff9700',
                'color':'#ff9700'
            });
        }
    }).mouseleave(function(){
        var chooseT=$(this).attr('choose');
        if(!!!(chooseT=='t')){
            $(this).css({
                'border' :'1px solid #dcdcdc',
                'color':'#2e2e2e'
            });
        }
    });
    $('.entertainment').click(function(){
        $('.enterTainmentTab').css('display','block').siblings().css('display','none');
        $(this).css({
            background:'#ff9700',
            border:'0',
            color:'#fff'
        }).attr('choose','t').siblings().css({
            background:'#fff',
            border:'1px solid #dcdcdc',
            color:'#2f2f2f'
        }).attr('choose','f');
    }).mouseover(function(){
        var chooseT=$(this).attr('choose');
        if(!!!(chooseT=='t')){
            $(this).css({
                'border' :'1px solid #ff9700',
                'color':'#ff9700'
            });
        }
    }).mouseleave(function(){
        var chooseT=$(this).attr('choose');
        if(!!!(chooseT=='t')){
            $(this).css({
                'border' :'1px solid #dcdcdc',
                'color':'#2e2e2e'
            });
        }
    });
    /////////////////////////////发布页面二级tab导航切换///////////////////////////
    $('.pCommercial').click(function(){
        $(this).css({
            'background':'#ff9700',
            border:'0',
            color:'#fff'
        }).attr('choose','t').siblings().css({
            background:'#fff',
            border:'1px solid #dcdcdc',
            color:'#2f2f2f'
        }).attr('choose','f');
        $('.publishCommercialActivity').css('display','block').siblings().css('display','none');
    }).mouseenter(function(){
        var t=$(this).attr('choose');
        if(!!!(t=='t')){
            $(this).css({
                'border':'1px solid #ff9700',
                'color' :'#ff9700'
            })
        }
    }).mouseleave(function(){
        var t=$(this).attr('choose');
        if(!!!(t=='t')){
            $(this).css({
                'border':'1px solid #e3e3e3',
                'color' :'#2f2f2f'
            })
        }
    });
    $('.pArtRequire').click(function(){
        $(this).css({
            'background':'#ff9700',
            border:'0',
            color:'#fff'
        }).attr('choose','t').siblings().css({
            background:'#fff',
            border:'1px solid #dcdcdc',
            color:'#2f2f2f'
        }).attr('choose','f');
        $('.publishArtRequire').css('display','block').siblings().css('display','none');
    }).mouseenter(function(){
        var t=$(this).attr('choose');

        if(!!!(t=='t')){
            $(this).css({
                'border':'1px solid #ff9700',
                'color' :'#ff9700'
            })
        }
    }).mouseleave(function(){
        var t=$(this).attr('choose');
        if(!!!(t=='t')){
            $(this).css({
                'border':'1px solid #e3e3e3',
                'color' :'#2f2f2f'
            })
        }
    });
    $('.pSchoolActivity').click(function(){
        $(this).attr('choose','t').css({
            'background':'#ff9700',
            border:'0',
            color:'#fff'
        }).siblings().css({
            background:'#fff',
            border:'1px solid #dcdcdc',
            color:'#2f2f2f'
        }).attr('choose','f');
        $('.publishSchoolActivity').css('display','block').siblings().css('display','none');
    }).mouseenter(function(){
        var t=$(this).attr('choose');

        if(!!!(t=='t')){
            $(this).css({
                'border':'1px solid #ff9700',
                'color' :'#ff9700'
            })
        }

    }).mouseleave(function(){
        var t=$(this).attr('choose');
        if(!!!(t=='t')){
            $(this).css({
                'border':'1px solid #e3e3e3',
                'color' :'#2f2f2f'
            })
        }

    });
    $('.pMediaSource').click(function(){
        $(this).attr('choose','t').css({
            'background':'#ff9700',
            border:'0',
            color:'#fff'
        }).siblings().css({
            background:'#fff',
            border:'1px solid #dcdcdc',
            color:'#2f2f2f'
        }).attr('choose','f');
        $('.publishMediaSources').css('display','block').siblings().css('display','none');
    }).mouseenter(function(){
        var t=$(this).attr('choose');

        if(!!!(t=='t')){
            $(this).css({
                'border':'1px solid #ff9700',
                'color' :'#ff9700'
            })
        }

    }).mouseleave(function(){
        var t=$(this).attr('choose');
        if(!!!(t=='t')){
            $(this).css({
                'border':'1px solid #e3e3e3',
                'color' :'#2f2f2f'
            })
        }

    });
//顶部个人中心下拉菜单的显示
    var data=JSON.parse(localStorage.getItem('userdata'));
    if(data){
        var phone=data.phone;
        $('.loginEnroll').find('.replaceBox').html('<img class="personalLogo" src="../../img/common/home-Personal_03.png"/><a class="dataUser" href="#">'+data.phone+'</a>');
        //鼠标移上显示个人中心菜单
        $('.loginEnroll').mouseover(function(){
            $('.personalCenter').stop().slideDown();
            $('.personalTriangle').stop().slideDown();
        }).mouseleave(function(){
            $('.personalCenter').stop().slideUp();
            $('.personalTriangle').stop().slideUp();
        });
    }
    $('.exit').click(function(){
        localStorage.clear();
        var url1=window.location.href;
        window.location=url1;
    });


    //传媒资源根据用户的选择，显示不同的选项和输入框
    $('#firstM').change(function(){
       var $slectorOp=$('#firstM option:selected').val();
        if($slectorOp=='广场资源'){
            $('.personalNumber').css('display','block').siblings().css('display','none');
            $('#secondM').css('display','none').next('#secondM1').css('display','none');

        }else if($slectorOp=='场馆资源'){
            $('.mspStadiumBox').css('display','block').siblings().css('display','none');
            $('#secondM').css('display','block').next('#secondM1').css('display','none');
        }else if($slectorOp=='媒体资源'){
            $('.fansNumber').css('display','block').siblings().css('display','none');
            $('#secondM').css('display','none').next('#secondM1').css('display','block');
        }else if($slectorOp=='广告位资源'){
            $('.audienceNumber').css('display','block').siblings().css('display','none');
            $('#secondM').css('display','none').next('#secondM1').css('display','none');
        }else if($slectorOp=='其他'){
            $('.mediaChangeBox').children().css('display','none')
            $('#secondM').css('display','none').next('#secondM1').css('display','none');
        }
    });
        //申请维权和联系反馈选项卡切换
		$('.tl').click(function(){
			var i = $(this).index();
			$('#com li').eq(i).show().siblings().hide();
            $('#com1 li').eq(i).show().siblings().hide();
			$(this).addClass('select').css({'border':'0','color':'white'}).siblings().removeClass('select').css({'border-top':'1px solid #dddddd','border-right':'1px solid #dddddd','color':'black'});
		}).next('.tr1').click(function(){
			var i = $(this).index();
			$(this).addClass('select').css({'border':'0','color':'white'}).siblings().removeClass('select').css({'border-top':'1px solid #dddddd','border-left':'1px solid #dddddd','color':'black'});
			$('#com li').eq(i).show().siblings().hide();
            $('#com1 li').eq(i).show().siblings().hide();
		});
});