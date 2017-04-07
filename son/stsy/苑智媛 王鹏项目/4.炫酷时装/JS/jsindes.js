/**
 * Created by Administrator on 2016/10/1.
 */

//左边导航
$(function () {
//window.onload = function () {


    var gdimg = 1;
    var size = null;
    var col = null;
    var total = document.getElementById("left_total_nav");
    var totalLis = total.getElementsByTagName("a");
    totalLis[1].style.background = "url(images/aside.png) " + -201 + "px " + -99 + "px no-repeat";
    for (var i = 1; i < totalLis.length; i++) {
        totalLis[i].index = i;
        if (i < 8) {
            totalLis[i].onmouseover = function () {
                //鼠标移入
                var x, y;
                x = -201;
                y = -(this.index - 1) * 70 - 99;
                this.style.background = "url(images/aside.png) " + x + "px " + y + "px no-repeat";
                //alert("url(images/aside.png) " + x + "px " + y + "px no-repeat");
            }

            totalLis[i].onclick = function () {
                if(this.index!=gdimg){
                    var x, y;
                    x = 0;
                    y = -(gdimg - 1) * 70 - 99;
                    totalLis[gdimg].style.background = "url(images/aside.png) " + x + "px " + y + "px no-repeat";
                    gdimg = this.index;
                }

            };

            totalLis[i].onmouseout = function () {
                if (gdimg != this.index) {
                    var x, y;
                    x = 0;
                    y = -(this.index - 1) * 70 - 99;
                    this.style.background = "url(images/aside.png) " + x + "px " + y + "px no-repeat";
                    //alert("url(images/aside.png) " + x + "px " + y + "px no-repeat");
                }
            };
        } else {
            totalLis[i].onmouseover = function () {
                size = this.style.fontSize;
                col = this.style.color;
                this.style.fontSize = "14px";
                this.style.color = "#fff";
            }

            totalLis[i].onmouseout = function () {
                this.style.fontSize = size;
                this.style.color =col;
            }

        }
    }


    //点击按钮改变精灵图片的位置（改变背景图片）
    //z找人
    //图片变大特效.右边所有图标
    var icon = document.getElementById("icon");
    var iconLis = icon.getElementsByTagName("li");
    //2.给每个图标注册点击事件
    for (var j = 0; j < iconLis.length; j++) {
        iconLis[j].index = j;
        if (j< iconLis.length/2) {
            iconLis[j].onclick = function () {
                var x, y;
                x = -111;
                y = -(this.index ) * 113;
                this.style.background = "url(images/QEAAAAASUVORK5CYII=.png) " + x + "px " + y + "px ";
                $(this).siblings().css("background","")
            }

        }else{
            iconLis[j].onclick = function (){
                var z,v;
                z=-335;
                v=-(this.index ) * 113;
                this.style.background = "url(images/QEAAAAASUVORK5CYII=.png) " + z + "px " + v + "px ";
                $(this).siblings().css("background","");
            }


        }
    }


        <!--3.右边图标-->
//点击换图事件
//    图片变大特效.
        var $center = $(".center li");//中间图片

        $(".icon>ul>li").click(function () {
            var index = $(this).index();

            $center.eq(index).show().siblings().hide();

        });


//    $(".tu-a").click(function(){
//        $(this).css("background-position" , -111+"px" ,-图片变大特效+"px")
//    })

        // });
    //});
});