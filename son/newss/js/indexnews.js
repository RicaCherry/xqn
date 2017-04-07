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
    $("#nav_news").css("background","url(images/topmenu.png) no-repeat -980px -120px")
     var $bgcl=""
    var $bgcm=""
    $(".topnav>ul>li").mouseenter(function () {
       $bgcl= $(this).children("a").css("background-image")
        $bgcm=$(this).children("a").css("background-position")
        for(var i=0;i<$(".topnav>ul>li").length;i++) {
            var width =-(this.offsetLeft+850)
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
    $(".zuce").click(function(){
        $(".zhuce2").css("display","block");
        $(".zuce").css("display","none");
    });
    $(".zhuce2>.div3").click(function(){
        $(".zhuce2").css("display","none");
        $(".zuce").css("display","block");
    });
    $(".zhuce2>.div1>.ipt1").click(function(){
        this.value="";
    });
    $(".sousuo>input").eq(0).click(function(){
        this.value="";
    });
    $(".top_nav li").eq(0).css("background","url('images/tab_nav_f6bd1e6.png') no-repeat 0px 0");
    $(".top_nav li").mouseenter(function(){
        $(this).css("background","url('images/tab_nav_f6bd1e6.png') no-repeat 0px 0");
        $(this).siblings().css("background","url('images/tab_nav_f6bd1e6.png') no-repeat -135px 0");
    });
    $(".top_nav li").mouseleave(function(){
        $(this).css("background","url('images/tab_nav_f6bd1e6.png') no-repeat -135px 0");
        $(".top_nav li").eq(0).css("background","url('images/tab_nav_f6bd1e6.png') no-repeat 0px 0");
    });

  $(".content>.left>.download>.ltop a").mouseenter(function(){
      $(this).css("background","url('images/icon_z_7e73d43.png') no-repeat -170px -120px");
  })
    $(".content>.left>.download>.ltop a").mouseleave(function(){
        $(this).css("background","url('images/icon_z_7e73d43.png') no-repeat -170px 0px");
    })
    $(".cont>.bot>ul>li").eq(0).css("background","none").children().css("color","#000000");
    $(".cont>.bot>ul>li").mouseenter(function(){
        $(this).css("background","none");
        $(this).children().css("color","#000000");
    })
    $(".cont>.bot>ul>li").mouseleave(function(){
        $(this).css("background","#818AA7");
        $(this).children().css("color","#ffffff");
    })

});
//导航栏结束


