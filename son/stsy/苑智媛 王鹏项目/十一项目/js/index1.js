/**
 * Created by Administrator on 2016/10/3.
 */
window.onload = function () {
/*公共样式左边动画*/
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



    /*第三个页面的颜色白,金图片切换*/

    var right_txt = document.getElementById("right_txt");
    var as = right_txt.getElementsByClassName("right_txt_z");
    var right_wrap0 = document.getElementById("right_wrap0");
    as[0].style.color = "white";
    as[0].style.background = "url(images/right_nav.png)";
    for (var i = 0; i < as.length; i++) {
        as[i].index = i;
        as[i].style.top = i * 53 + "px";
        as[i].onmouseover = function () {
            for (var i = 0; i < as.length; i++) {
                as[i].style.background = "";
                as[i].style.color = "black";
            }
            this.style.background = "url(images/right_nav.png)";
            this.style.color = "white";
            right_wrap0.style.background = "url(images/" + this.index + ".jpg)";
        };

    }


};

