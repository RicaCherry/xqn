/**
 * Created by admin on 2016/10/1.
 */

//导航jq
$(function () {
    var navbar=document.getElementById("navbar")
    var navbarlis=navbar.getElementsByTagName("li")
    for(var i=0;i<navbarlis.length;i++){
        var ulllias=navbarlis[i].children[0]
        var width = -(850 + i * 130)
        ulllias.style.background = "url(images/topmenu.png) " + width + "px -60px no-repeat"
    }
    $("#nav_home").css("background","url(images/topmenu.png) no-repeat -850px -120px")
     var $bgcl=""
    var $bgcm=""
    $(".topnav>ul>li").mouseenter(function () {
       $bgcl= $(this).children("a").css("background-image")
        $bgcm=$(this).children("a").css("background-position")
        console.log($bgcl)
        for(var i=0;i<$(".topnav>ul>li").length;i++) {
            var width =-(this.offsetLeft+850)
        console.log(width)
            $(this).children("a").css("background","url(images/topmenu.png) "+width+"px -120px no-repeat")
        }
        $(this).children("div").last().addClass("last")
        $(this).children("div").stop(true, true);
        $(this).children("div").slideDown(500);
    });
    $(".topnav>ul>li").mouseleave(function () {
        $(this).children("div").slideUp(100);
        $(this).children("a").css({
            'background-image':$bgcl,
            'background-position':$bgcm,

        })
    });
//导航栏结束
//
// 轮播图新闻导航列表js
    var timer = null;
    var newsl = document.getElementById("news");
    var newslis=newsl.children
    var boxs = document.getElementById("boxs")
    var boxsul = boxs.children[0]
    var ulss=boxsul.children[0]
    var newwidth=ulss.offsetWidth

    var pic=0
    var square=0
    for (var j= 0;j<newslis.length;j++){
        newslis[j].index=j
        console.log(j)
        newslis[0].children[0].className="bianshen"
        console.log(newslis[0].children)
        newslis[j].onmouseover=function(){
            for(var i=0;i<newslis.length;i++){
                newslis[i].children[0].className="";
            }
            this.children[0].className="bianshen"

            var target=-this.index*newwidth;
            console.log(j)
            animate(boxsul,target)
            pic=square=this.index

        }
    }
});


//互动展示图片缩放js
$(function(){
//            互动图片函数
    function hudongzhanshi(i){
        var move = -10;
        var zoom = 1.1;
        var widths=activityboxlis[i].offsetWidth
        var heights= activityboxlis[i].offsetHeight
        console.log(widths)
        console.log(heights)
        activityboxlis[i].onmouseover=function(){
            var width =this.offsetWidth * zoom;
            var height = this.offsetHeight * zoom;
            animate2(this,{"width":width, "height":height, "top":move, "left":move});
            console.log(width)
        }
        activityboxlis[i].onmouseout=function(){
            animate2(this,{'width':widths, 'height':heights, 'top':'0', 'left':'0'});
        }
    }
    //函数结束
    var activitybox=document.getElementById("activitybox")
    var activityboxlis=activitybox.getElementsByTagName("img")
    console.log(activityboxlis)
    for(var i=0;i<activityboxlis.length;i++){
        hudongzhanshi(0)
        hudongzhanshi(1)
        hudongzhanshi(2)
    }
    })
 //互动函数展示结束


//弹窗页面jq+js
$(function () {
    var poptabbutton = document.getElementById("pop-tab-button")
    var poptabbuttonlis = poptabbutton.getElementsByTagName("li")
    var poptablist=document.getElementById("pop-tab-list")
    var poptablistlis=poptablist.children
    var hdpopclose=document.getElementById("hdpop-close")
    var hdmask=document.getElementById("hdmask")
    var regpop=document.getElementById("regpop")
    var yybten=document.getElementById("yybten")
    var inputname=document.getElementById("inputname")
    var inputpasswd=document.getElementById("inputpasswd")
    for (var i = 0; i < poptabbuttonlis.length; i++) {
        var ulllias = poptabbuttonlis[i].children[0]
        var width = -(0 + i * 146)

        ulllias.style.background = "url(images/regpop_nav.png) " + width + "px 0 no-repeat"
        poptabbuttonlis[0].children[0].style.background="url(images/regpop_nav.png) 0 -60px no-repeat"
        $("#pop-tab-button>li").mouseenter(function () {
            for (var i = 0; i < $("#pop-tab-button>li").length; i++) {

               var index= $(this).index
                var widths = -(this.offsetLeft-270)
                for (var i = 0; i < poptabbuttonlis.length; i++) {
                    poptabbuttonlis[i].setAttribute("index",i);
                    var widthss= -(0 + i * 146)
                    var ulllias = poptabbuttonlis[i].children[0]
                    ulllias.style.background = "url(images/regpop_nav.png) " + widthss + "px 0 no-repeat"
                    poptablistlis[i].setAttribute("class","huadongyichu");
            }

            $(this).children("a").css("background", "url(images/regpop_nav.png) " + widths + "px -60px no-repeat")
                poptablistlis[this.getAttribute("index")].setAttribute("class","xuanzhongselected");

            }
        })

    }
    hdpopclose.onclick=function(){
        hdmask.style.display="none"
        regpop.style.display="none"

    }
    yybten.onclick=function(){
        hdmask.style.display="block"
        regpop.style.display="block"
    }
    inputname.onblur=function(){
        inputname.value="请输入用户名"
    }
    inputname.onfocus=function(){
        inputname.value=""
    }
    inputpasswd.onblur=function(){
        inputpasswd.value="请输入用户密码"
    }
    inputpasswd.onfocus=function(){
        inputpasswd.value=""
    }

})

//弹出菜单结束
//主体中部轮播图
$(function () {
    //wj
    //轮播图
    //1.给j-official2注册鼠标进入事件
    $("#j-official2 li").mouseenter(function () {
        //排他
        $(this).addClass("j-current");
        $(this).siblings().removeClass("j-current");
        //对应图片播放
        var width = $("#j-official1").innerWidth();
        var index = $(this).index();//获取图片索引
        var left = -width * index;
        $("#j-official1 ul").stop().animate({"left": left+"px"});
    });
    //2.给a标签注册点击事件
    $("#wjactive #j-off").click(function () {
        $("#j-cooperation").hide().siblings("#j-official").show();
        $(this).addClass("wj-on").siblings().removeClass("wj-on");
    });
    $("#wjactive #j-coo").click(function () {
        $("#j-official").hide().siblings("#j-cooperation").show();
        $(this).addClass("wj-on").siblings().removeClass("wj-on");
    });
    //3.给j-official2注册鼠标进入事件
    $("#j-cooperation2 li").mouseenter(function () {
        //排他
        $(this).addClass("j-current");
        $(this).siblings().removeClass("j-current");
        //对应图片播放
        var width = $("#j-cooperation1").innerWidth();
        var index = $(this).index();//获取图片索引
        var left = -width * index;
        $("#j-cooperation1 ul").stop().animate({"left": left+"px"});
    });
    //wj

    //kzr
    $(".kt_secontpart a").mouseenter(function(){
        $(this).stop().animate({"top":"-10px"},400);
    })
    $(".kt_secontpart a").mouseleave(function(){
        $(this).stop().animate({"top":"0px"},400);
    })

    $(".kt_footpart a").mouseenter(function(){
        $(this).stop().animate({"top":"-10px"},400);
    })
    $(".kt_footpart a").mouseleave(function(){
        $(this).stop().animate({"top":"0px"},400);
    })
    //kzr

    //验证表单输入内容
    //鼠标获得焦点
    $("#txt").focus(function(){
        //获取表单输入的内容
        var content=$(this).val();
        if(content==="请输入关键字")
        {
            $(this).val("");
        }
    });
    //失去焦点
    $("#txt").blur(function(){
        //获取表单输入的内容
        var content=$(this).val();
        if(content==="")
        {
            $(this).val("请输入关键字");
        }
    });

    $("#j_ul li").mouseenter(function(){

        var idx=$(this).index();
        //console.log(idx);

        $("#j_tab ul").eq(idx).show().siblings().hide();
    });
});
