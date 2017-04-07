/**
 * Created by Administrator on 2016/10/1.
 */
window.onload = function () {
    /*游戏栏动画鼠标移动事件*/
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

};

