/**
 * Created by li on 2016/10/4.
 */
$(function(){
    //var $shipinLi=$("shipin").children();
    $("#shipin li").mouseenter(function(){
        $(this).children().css("display","block");
    })
    $("#shipin li").mouseleave(function(){
        $("#shipin li>i").css("display","none");
    })
    $("#s-one").click(function(){
      $("#content").slideToggle(1000);
    })
    $("#s-two").click(function(){
        $("#sorted").slideToggle(1000);
    })
    $("#s-three").click(function(){
        $("#footer").toggle(1000);
    })
    $("#s-four").click(function(){
        $("#ull").toggle(1000);
    })
})