nie.define("gift",function(){function e(e){var o=$("#"+e);$("#mask").show();var t=($(window).height()-o.height())/2;window.showSMS&&"pop_sms"!=e&&(t-=$("#pop_sms").height()/2),"pop_sms"==e&&(t+=$("#pop1").height()/2-20),o.css("top",t).show()}function o(){$("#mask").hide(),$(".pop").hide(),$("#flow").hide(),$("#pop_sms input").val("")}function t(t,r){o(),$("#mask").css({height:$(document).height()}).show(),$("#pop_alert").css("top",document.body.scrollTop+document.documentElement.scrollTop+($(window).height()-$("#pop_alert").height())/2).show(),$("#alert_msg").html(t),$("#pop_alert_close").unbind("click"),$("#pop_alert_close").click(r?function(){o(),e(r)}:function(){o()})}function r(){o(),$("#mask").css({height:$(document).height()}).show(),$("#flow").css("top",document.body.scrollTop+document.documentElement.scrollTop+($(window).height()-$("#flow").height())/2).show()}function n(e){$("#flow_nav1 a").removeClass("active").eq(e).addClass("active"),$(".flow_pp li").removeClass("active").eq(e).addClass("active"),1===e&&m()}function c(e,o){var t=$("#"+e).parent();t.children("http://res.qn.netease.com/pc/fab/20160406111403/js/common/span.chk").removeClass("x o"),o?t.children("http://res.qn.netease.com/pc/fab/20160406111403/js/common/span.chk").addClass("x").html(o):t.children("http://res.qn.netease.com/pc/fab/20160406111403/js/common/span.chk").addClass("o").html("")}function a(){$.ajax({url:u+"/authcode",dataType:"jsonp",success:function(e){e.error?t("error: "+e.error):(p=e.data.sid,setTimeout(function(){$("#show_cdkey_authcode").attr("src",u+"/authcode2?sid="+p)},5))}})}function s(e){return e.match(/^13\d{9}$|^14\d{9}$|^15\d{9}$|^18\d{9}$|^16\d{9}$/)}function i(e){return e.match(/\S+@\S+\.\S+/)}function l(){var t=u+"/get_cdkey2";t=t+"?username="+encodeURIComponent($("#cdkey_username").val())+"&secure=md5&password="+encodeURIComponent($.md5($("#cdkey_password").val()))+"&authcode="+encodeURIComponent($("#cdkey_authcode").val())+"&sid="+encodeURIComponent(p)+(window.addBackType?"&type=back":""),$.ajax({url:t,dataType:"jsonp",success:function(t){t.error?(t.error.sid&&(t.error.password=t.error.sid),c("cdkey_username",t.error.username),c("cdkey_password",t.error.password),c("cdkey_authcode",t.error.authcode),(t.error.username||t.error.password)&&$("#cdkey_authcode").val(""),a()):($("#common_email").val($("#cdkey_username").val()),$("#sn_code").text(t.data.cdkey),$("#sn_state").text(1==t.data.state?"\u65b0\u83b7\u5f97":"\u66fe\u9886\u53d6"),o(),window.showSMS&&e("pop_sms"),e("pop2"),$("#ipush_reach").attr("class","reached"))}})}function d(){var t=u+"/send_common_email";t=t+"?email="+encodeURIComponent($("#common_email").val())+"&sid="+encodeURIComponent(p)+(window.addBackType?"&type=back":""),$.ajax({url:t,dataType:"jsonp",success:function(t){t.error?(t.error.sid&&(t.error.email=t.error.sid),c("common_email",t.error.email)):(o(),window.showSMS&&e("pop_sms"),e("pop_saved"))}})}var p="",u="http://qn-appointment.webapp.163.com/app",m=function(){var e=$("#finger"),o=$("#finger_tip"),t=0,r=0;return function(){function n(){o.show(),3>=t?(t++,e.show(),r=setTimeout(function(){e.hide(),r=setTimeout(n,500)},500)):(t=0,o.hide(),e.show().css("top",100).animate({top:60},1e3,n))}e.stop(),o.hide(),clearTimeout(r),e.css("top",100).animate({top:60},1e3,n)}}();$("#cdkey_username,#cdkey_authcode").click(function(){var e=$("#show_cdkey_authcode");e.attr("src")||a(),"none"==e.css("display")&&e.css("display","").next("a").css("display","")}),$("#reload_cdkey_authcode").click(function(e){e.preventDefault(),$("#show_cdkey_authcode").click()}),$(".btn_copy").click(function(){$("#sn_code").html().length&&$.clipBoard($("#sn_code").html())}),$(".btn_add_item").click(function(){if($("#pop4 input[name=qq_number]").length<5){var e=$(this).parent().clone(!0);e.find(".i_text").val(""),e.appendTo($("#qq_form")),$(this).hide()}}),$(".close_pop").click(function(){return o(),!1});var _=0;$("#flow_pre").click(function(){_=0>=_?3:_-1,n(_)}),$("#flow_next").click(function(){_=_>=3?0:_+1,n(_)}),$("#flow_nav1 li").click(function(){_=$(this).index(),n(_)}),$("#flow_nav2 li").click(function(){_=$(this).index(),$("#flow_back").css("display","block"),$("#flow_close").hide(),r(),n(_)}),$("#flow_back").click(function(){e("pop2"),$("#flow_back").hide(),$("#flow_close").show()}),$("#show_cdkey_authcode").click(function(){return a(),!1}),$("#getcdkey,a[rel=getcdkey]").click(function(){return $(".pop .i_text").val(""),$(".pop .chk").removeClass("x").removeClass("o").html(""),o(),window.showSMS&&e("pop_sms"),e("pop1"),a(),!1}),$("a[rel=getcdkey-wm01]").click(function(){e("pop2"),$("#sn_code").html("QNYH-WWWW-8888-8888"),$("#pop2 .pop_bd").find(".gift-text").show()}),$("a[rel=regpop-wm01]").click(function(){e("pop2"),$("#sn_code").html("QNYH-1010-8888-8888"),$(".pop_bd").find("p").eq(2).find("span").hide().addClass("gift-text").hide()}),$("#pop1_btn").click(function(){return l(),!1}),$("#pop2_btn").click(function(){return e("pop3"),!1}),$("#pop3_btn").click(function(){return d(),!1}),$("#pop4_btn").click(function(){return o(),!1}),$("#pop4 input[name=qq_number]").blur(function(){$(this).parent().children("http://res.qn.netease.com/pc/fab/20160406111403/js/common/span.chk").removeClass("x o").addClass(isNaN($(this).val())?"x":"o")}),$("#sms-phone-invite").click(function(){var e=$("#from_to").val(),o=$("#send_to").val();return s(e)?s(o)?e===o?(alert("\u4e0d\u80fd\u81ea\u5df1\u9080\u8bf7\u81ea\u5df1"),!1):($.getJSON("http://sms-invite.webapp.163.com/140923_sms/qn/guanwang?callback=?",{from:e,to:o},function(e){return"param_error"===e.result?(alert("\u53c2\u6570\u9519\u8bef"),!1):"include_keywords"===e.result?(alert("\u59d3\u540d\u5305\u542b\u5173\u952e\u5b57"),!1):"product_channel_error"===e.result?(alert("\u4ea7\u54c1/\u6e20\u9053\u9519\u8bef"),!1):"ip_send_num_limit"===e.result?(alert("\u8fbe\u5230ip\u53d1\u9001\u4e0a\u9650"),!1):"sender_term_limit"===e.result?(alert("\u8fbe\u5230\u77ed\u671f\u53d1\u9001\u8005\u53d1\u9001\u4e0a\u9650"),!1):"receiver_term_limit"===e.result?(alert("\u8fbe\u5230\u77ed\u671f\u63a5\u6536\u8005\u63a5\u6536\u4e0a\u9650"),!1):"total_limit"===e.result?(alert("\u8fbe\u5230\u53d1\u9001\u624b\u673a\u53d1\u9001\u603b\u6570\u9650\u5236"),!1):"send_sms_error"===e.result?(alert("\u7cfb\u7edf\u9519\u8bef"),!1):"server_error"===e.result?(alert("\u7cfb\u7edf\u9519\u8bef"),!1):"ok"===e.result?(alert("\u9080\u8bf7\u6210\u529f"),!1):void 0}),!1):(alert("\u670b\u53cb\u7684\u624b\u673a\u53f7\u7801\u683c\u5f0f\u9519\u8bef"),!1):(alert("\u4f60\u7684\u624b\u673a\u53f7\u7801\u683c\u5f0f\u9519\u8bef"),!1)}),$("#sms-qq-invite").click(function(){var e=$("#email_server_name").val(),o=$("#email_role_id").val(),t=$("#qqfrdNum").val();return e?o?(-1==t.indexOf("http://res.qn.netease.com/pc/fab/20160406111403/js/common/@qq.com")&&(t+="http://res.qn.netease.com/pc/fab/20160406111403/js/common/@qq.com"),i(t)?($.getJSON("http://sms-invite.webapp.163.com/140923_email/qn/guanwang?callback=?",{server_name:e,role_id:o,to:t},function(e){return"param_error"===e.result?(alert("\u53c2\u6570\u9519\u8bef"),!1):"include_keywords"===e.result?(alert("\u59d3\u540d\u5305\u542b\u5173\u952e\u5b57"),!1):"product_channel_error"===e.result?(alert("\u4ea7\u54c1/\u6e20\u9053\u9519\u8bef"),!1):"ip_limit"===e.result?(alert("\u8fbe\u5230ip\u53d1\u9001\u4e0a\u9650"),!1):"sender_limit"===e.result?(alert("\u8fbe\u5230\u53d1\u9001\u8005\u53d1\u9001\u4e0a\u9650"),!1):"receiver_limit"===e.result?(alert("\u8fbe\u5230\u63a5\u6536\u8005\u63a5\u6536\u4e0a\u9650"),!1):"server_error"===e.result||"send_email_error"===e.result?(alert("\u7cfb\u7edf\u9519\u8bef"),!1):"too_quick"===e.result?(alert("\u70b9\u51fb\u592a\u5feb"),!1):"ok"===e.result?(alert("\u9080\u8bf7\u6210\u529f"),!1):void 0}),!1):(alert("\u670b\u53cb\u7684\u90ae\u7bb1\u683c\u5f0f\u9519\u8bef"),!1)):(alert("\u6e38\u620fID\u4e0d\u80fd\u4e3a\u7a7a"),!1):(alert("\u670d\u52a1\u5668\u540d\u4e0d\u80fd\u4e3a\u7a7a"),!1)})});