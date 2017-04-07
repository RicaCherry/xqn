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
    $("#nav_guide").css("background","url(images/topmenu.png) no-repeat -1240px -120px")
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

});
//导航栏结束


