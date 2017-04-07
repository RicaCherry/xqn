/**
 * Created by Administrator on 2016/10/5.
 */

$(function () {

    $(window).scroll(function () {
        var scroll = $(document).scrollTop();//获取页面被卷去的头部
        if (scroll > $(".topnav").height()+$(".header").height()+$(".sidebar").height()) {
            $(".sidebarbox").css({
                "position": "fixed",
                "top": "0"
            });
        } else {
            $(".sidebarbox").css("position", "static");//恢复成原来的静态定位

        }
    });




    $(".ulist2  .yxjs").mouseenter(function () {
        $(".ulist2 .yxjs").siblings("ul").css("display","block")

    })
    $(".ulist2  .czzn").mouseenter(function () {
        $(".ulist2 .czzn").siblings("ul").css("display","block")

    })
    $(".ulist2  .zymp").mouseenter(function () {
        $(".ulist2 .zymp").siblings("ul").css("display","block")

    })
    $(".ulist2  .wqzb").mouseenter(function () {
        $(".ulist2 .wqzb").siblings("ul").css("display","block")

    })
    $(".ulist2  .wpxg").mouseenter(function () {
        $(".ulist2 .wpxg").siblings("ul").css("display","block")

    })
    $(".ulist2  .xtjs").mouseenter(function () {
        $(".ulist2 .xtjs").siblings("ul").css("display","block")

    })
    $(".ulist2  .rwhd").mouseenter(function () {
        $(".ulist2 .rwhd").siblings("ul").css("display","block")

    })
    $(".ulist2  .hdwf").mouseenter(function () {
        $(".ulist2 .hdwf").siblings("ul").css("display","block")

    })
    $(".ulist2  .lszq").mouseenter(function () {
        $(".ulist2 .lszq").siblings("ul").css("display","block")

    })
    $(".ulist2  .bhxt").mouseenter(function () {
        $(".ulist2 .bhxt").siblings("ul").css("display","block")

    })
    $(".ulist2  .shxt").mouseenter(function () {
        $(".ulist2 .shxt").siblings("ul").css("display","block")

    })
    $(".ulist2  .jyxt").mouseenter(function () {
        $(".ulist2 .jyxt").siblings("ul").css("display","block")

    })
    $(".ulist2  .hhyx").mouseenter(function () {
        $(".ulist2 .hhyx").siblings("ul").css("display","block")

    })
})
$(function () {
    $(".ulist2  li").mouseout(function () {
        $(".ulist2 li ul").css("display","none")
    })
})