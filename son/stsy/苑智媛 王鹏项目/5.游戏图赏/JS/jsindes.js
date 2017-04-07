/**
 * Created by Administrator on 2016/10/1.
 */
//瀑布流布局
window.onload = function () {

    var gdimg = 1;
    var size = null;
    var col = null;
    var total = document.getElementById("left_total_nav");
    var totalLis = total.getElementsByTagName("a");
    totalLis[1].style.background = "url(image/aside.png) " + -201 + "px " + -99 + "px no-repeat";
    for (var i = 1; i < totalLis.length; i++) {
        totalLis[i].index = i;
        if (i < 8) {
            totalLis[i].onmouseover = function () {
                //鼠标移入
                var x, y;
                x = -201;
                y = -(this.index - 1) * 70 - 99;
                this.style.background = "url(image/aside.png) " + x + "px " + y + "px no-repeat";
                //alert("url(images/aside.png) " + x + "px " + y + "px no-repeat");
            }

            totalLis[i].onclick = function () {
                if(this.index!=gdimg){
                    var x, y;
                    x = 0;
                    y = -(gdimg - 1) * 70 - 99;
                    totalLis[gdimg].style.background = "url(image/aside.png) " + x + "px " + y + "px no-repeat";
                    gdimg = this.index;
                }

            };

            totalLis[i].onmouseout = function () {
                if (gdimg != this.index) {
                    var x, y;
                    x = 0;
                    y = -(this.index - 1) * 70 - 99;
                    this.style.background = "url(image/aside.png) " + x + "px " + y + "px no-repeat";
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


    //通过js计算出 高度最小的那行，然后把图片放进去
    //图片变大特效.找出谁是第一行  计算第一行有多少张 或者也就是第一行有多少列
    // 一行有多少张实际上就是 页面的宽度/盒子宽度。
    //页面宽度
    var container = document.getElementById("container");
    var pageWidth = container.offsetWidth;
    //所有的盒子
    var boxs = container.children;
    //盒子的宽度
    var boxWidth = boxs[0].offsetWidth;
    //盒子的列数  都是整数所以向下取整；
    var colum = Math.floor(pageWidth / boxWidth);
    // console.log(colum);

    //2.用一个数组保存 每一列的高度 ；找出最小值 和最小的索引
    var arrHeight = [];
    //把每一列的初始高度  保存在数组中
    //找出所有的盒子并处理
    for (var i = 0; i < boxs.length; i++) {
        //先找出第一行的所有的盒子
        if (i < colum) {
            // boxs[i] 第一行的盒子；
            //  把第一行的盒子的高度放在数组中
            arrHeight[i] = boxs[i].offsetHeight;
        } else {
            // 第一行之后的盒子
            //根据 保存每行高度的数组中的 最小值去摆放；
            //高度的最小值
            var minHeight = getMin(arrHeight).value;
            //高度的最小索引（高度最小的那一列）；
            var minHeightIndex = getMin(arrHeight).minIndex;
            //console.log(minHeight);
            //console.log(minHeightIndex);
            //摆放盒子其实就是设置盒子的top和left
            //要想设置位置 先加定位
            boxs[i].style.position = "absolute";
            //设置top值
            boxs[i].style.top = minHeight + "px";
            //设置left值  left值就是 高度最小的那一列所有图片的offsetleft
            //其中第一行的最好找
            boxs[i].style.left = boxs[minHeightIndex].offsetLeft + "px";
            //把盒子放上去之后 要对数组的高度数值进行更新
           arrHeight[minHeightIndex] = minHeight + boxs[i].offsetHeight;


        }
    }





    //console.log(arrHeight);


//将数组传入方法 获取这个数组的 最小值以及最小值的索引
    function getMin(arr) {
        //因为要返回两个数值 所以可以通过返回对象的形式把想要返回的东西挂在对象身上
        var min = {};//对象的直接量定义法
        min.minIndex = 0;
        min.value = arr[min.minIndex];

        for (var i = 0; i < arr.length; i++) {
            if (arr[i] < min.value) {
                min.value = arr[i];//新的最小值
                min.minIndex = i;//新的最小值的索引
            }
        }
        return min;
    }
};