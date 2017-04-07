window.onload=function(){
    /**
     * Created by jf on 2016/9/12.
     */

    /**
     * 通过id寻找元素
     * @param id
     * @returns {Element}
     */
    function $(id) {
        return document.getElementById(id);
    }
    /**
     * 兼容所有浏览器的获取内部文本的函数
     * @param element
     * @returns {*}
     */
    function getInnerText(element) {
        if (typeof element.innerText === "string") {
            return element.innerText;
        } else {
            return element.textContent;
        }
    }
    /**
     * 兼容所有浏览器的设置内部文本的函数
     * @param element
     * @param content
     */
    function setInnerText(element, content) {
        if (typeof element.innerText === "string") {
            element.innerText = content;
        } else {
            element.textContent = content;
        }
    }
    /**
     * 获取下一个兄弟元素的兼容方法
     * @param element
     * @returns {*}
     */
    function getNextElement(element) {
        if (element.nextElementSibling) {
            return element.nextElementSibling;
        } else {
            var next = element.nextSibling;
            while (next && 1 !== next.nodeType) {
                next = next.nextSibling;
            }
            return next;
        }
    }
    /**
     * 获取上一个兄弟元素的兼容方法
     * @param element
     * @returns {*}
     */
    function getPreviousElement(element) {
        if (element.previousElementSibling) {
            return element.previousElementSibling;
        } else {
            var prev = element.previousSibling;
            while (prev && 1 !== prev.nodeType) {
                prev = prev.previousSibling;
            }
            return prev;
        }
    }
    /**
     * 获取第一个子元素的兼容方法
     * @param element
     * @returns {*}
     */
    function getFirstElement(element) {
        if (element.firstElementChild) {
            return element.firstElementChild;
        } else {
            var node = element.firstChild;
            while (node && 1 !== node.nodeType) {
                node = node.nextSibling;
            }
            return node;
        }
    }
    /**
     * 获取最后一个子元素的兼容方法
     * @param element
     * @returns {*}
     */
    function getLastElement(element) {
        if (element.lastElementChild) {
            return element.lastElementChild;
        } else {
            var node = element.lastChild;
            while (node && 1 !== node.nodeType) {
                node = node.previousSibling;
            }
            return node;
        }
    }
    /**
     * 将任意元素的旧的类名替换成新的类名
     * @param element
     * @param oldStr
     * @param newStr
     */
    function replaceClassName(element, oldStr, newStr) {
        var nameArr = element.className.split(" ");
        console.log(nameArr);
        for (var i = 0; i < nameArr.length; i++) {
            if (nameArr[i] === oldStr) {
                nameArr[i] = newStr;
            }
        }
        element.className = nameArr.join(" ");
    }
    /**
     * 按照类名到指定元素中查找标签
     * @param element
     * @param className
     * @returns {Array}
     */
    function getElementsByClassName(element, className) {
        if (element.getElementsByClassName) {
            return element.getElementsByClassName(className);
        } else {
            var elements = element.getElementsByTagName("*");
            var filterArr = [];
            for (var i = 0; i < elements.length; i++) {
                var nameArr = elements[i].className.split(" ");
                for (var j = 0; j < nameArr.length; j++) {
                    if (nameArr[j] === className) {
                        filterArr.push(elements[i]);
                        break;
                    }
                }
            }
            return filterArr;
        }
    }
    /**
     * 匀速移动盒子
     * @param obj
     * @param target
     */
    function animatee(obj, target) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var learbor = obj.offsetLeft;
            var step = 25;
            step=learbor< target ? step : -step;
            if (Math.abs(learbor - target) >= Math.abs(step)) {
                learbor = learbor + step;
                obj.style.left = learbor + "px";
            } else {
                clearInterval(obj.timer);
                obj.style.left = target + "px";
            }
        }, 15)
    }
    /**
     * 获取页面滚动坐标的方法
     * @returns {{}}
     */
    function scroll() {
        return {
            top:window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
            left:window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
        };
    }
    /**
     * 缓速移动盒子
     * @param obj
     * @param target
     */
    function animates(obj, json, fn) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var flag = true;
            for (var k in json) {
                if (k === "opacity") {
                    var leader = getStyle(obj, k) * 100;
                    var target = json[k] * 100;
                    var step = (target - leader) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    leader = leader + step;
                    obj.style[k] = leader / 100;
                } else if (k === "zIndex") {
                    obj.style.zIndex = json[k];
                } else {
                    var leader = parseInt(getStyle(obj, k)) || 0;
                    var target = json[k];
                    var step = (target - leader) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    leader = leader + step;
                    obj.style[k] = leader + "px";
                }
                if (leader !== target) {
                    flag = false;
                }
            }
            if (flag) {
                clearInterval(obj.timer);
                if (fn) {
                    fn();
                }
            }
        }, 15);
    }

    /**
     * 获取计算后的样式属性
     * @param obj
     * @param arrt
     * @returns {*}
     */
    function getStyle(obj, arrt) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(obj, null)[arrt];
        } else {
            return obj.currentStyle[arrt];
        }
    }
    /**
     * 处理事件对象兼容问题的工具类
     */
    var eventUtils = {
        getEvent: function (event) {
            return event || window.event;
        },
        getPageX: function (event) {
            return event.pageX || event.clientX + document.documentElement.scrollLeft;
        },
        getPageY: function (event) {
            return event.pageY || event.clientY + document.documentElement.scrollTop;
        },
        stopPropagation: function (event) {
            if (event.stopPropagation) {
                event.stopPropagation();
            } else {
                event.cancelBubble = true;
            }
        },
        getTarget: function (event) {
            return event.target || event.srcElement;
        },
        addEvent: function (element, eventName, listener) {
            if (element.addEventListener) {//高级浏览器绑定事件的方式
                element.addEventListener(eventName, listener, false);
            } else if (element.attachEvent) {
                element.attachEvent("on" + eventName, listener);
            } else {
                //如果以上两种都不支持 肯定是支持btn.onclick btn["onclick"]
                element["on" + eventName] = listener;
            }
        },
        removeEvent: function (element, eventName, listener) {
            if (element.removeEventListener) {
                element.removeEventListener(eventName, listener, false);
            } else if (element.detachEvent) {
                element.detachEvent("on" + eventName, listener);
            } else {
                //如果以上两种都不支持 肯定支持 btn.onclick = null
                element["on" + eventName] = null;
            }
        }
    };
    /**
     * 获取页面滚动座标的兼容写法
     * @returns {{top: (Number|number), left: (Number|number)}}
     */
    function scroll() {
        return {
            top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
            left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
        }
    }
    /**
     * 获取网页可视区宽高的兼容写法
     * @returns {{width: (Number|number), height: (Number|number)}}
     */
    function client() {
        return {
            width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
            height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0
        };
    }
}