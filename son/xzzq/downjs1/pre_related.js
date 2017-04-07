(function() {
    function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] == variable) {
                return pair[1];
            }
        }
    }

    function parseQueryString(o) {
        var a = new Array();

        for (var k in o) {
            a.push(k + "=" + o[k]);
        }

        return a.join("&");
    }

    function getCookie(c_name) {
        var i, x, y, ARRcookies = document.cookie.split(";");
        for (i = 0; i < ARRcookies.length; i++) {
            x = ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
            y = ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
            x = x.replace(/^\s+|\s+$/g,"");
            if (x == c_name) {
                return unescape(y);
            }
        }
    }

    function union_pre_related(username, referer_type, pre_status) {
        // extra log for player register
        (new Image()).src = "http://union.netease.com/gs2/union/anti/log/player_reg?username=" + username;

        var product_id = getCookie("netease_union_product_id");
        var worktype = getCookie("netease_union_worktype");
        var sn = getCookie("netease_union_sn");
        var access_time = getCookie("netease_union_access_time") || "";
        var cookie_id = getCookie("netease_union_unique_player_id") || "";
        var stuff_id = getCookie("netease_union_stuff_id");
        var ad_position_id = getCookie("netease_union_ad_position_id");
        var ad_type_id = getCookie("netease_union_ad_type_id");

        if (!product_id || !worktype || !sn || isNaN(product_id) || isNaN(worktype)) return;

        var referer = "";
        var player_type = 1;
        if (referer_type == 0){
            // 手工调用的，不在下载页，referer_type都是0，玩家通行证类型是1
            referer = window.location.href;
            player_type = 1;
        } else if (referer_type == 1) {
            // 下载页，代码自动执行，referer_type为1，玩家通行证类型是0
            referer = document.referrer || "";
            player_type = 0;
        }

        var qs = {
            referer: referer,
            cookie_id: cookie_id,
            access_time: access_time,
            product_id: product_id,
            worktype: worktype,
            sn: sn,
            username: username,
            player_type: player_type,
            stuff_id: stuff_id,
            ad_position_id: ad_position_id,
            ad_type_id: ad_type_id
        };
        if(typeof(pre_status) != "undefined"){
            qs["pre_status"] = pre_status;
        }
        (new Image()).src = "http://union.netease.com/gs2/union/anti/pre_related/?" + parseQueryString(qs);
    }

    function union_mmo_client_related(username) {
        var product_id = getCookie("netease_union_product_id");
        var access_time = getCookie("netease_union_access_time") || "";
        var cookie_id = getCookie("netease_union_mmo_client_unique_player_id");
        var set_cookie_timestamp = getCookie("netease_union_mmo_client_set_cookie_timestamp");
        if(!cookie_id || !set_cookie_timestamp || !product_id || isNaN(product_id)){
            return;
        }
        var qs = {
            product_id: product_id,
            username: username,
            cookie_id: cookie_id,
            set_cookie_timestamp: set_cookie_timestamp,
            access_time: access_time
        };
        (new Image()).src = "http://union.netease.com/gs2/union/anti/mmo_client_related/?" + parseQueryString(qs);
    }

    function gs_pre_related(username, pre_status) {
        var sn = getCookie("netease_gs_sn");

        if (!sn || isNaN(sn)) return;

        var qs = {
            sn: sn,
            username: username
        };

        if(typeof(pre_status) != "undefined"){
            qs["pre_status"] = pre_status;
        }

        (new Image()).src = "http://gs.163.com/app/pmlink/pre_related?" + parseQueryString(qs);
    }

    function gt_pre_related(username, pre_status) {
        var sn = getCookie("netease_gt_sn");

        if (!sn || isNaN(sn)) return;

        var qs = {
            sn: sn,
            username: username
        };

        if(typeof(pre_status) != "undefined"){
            qs["pre_status"] = pre_status;
        }

        (new Image()).src = "http://gt.163.com/app/acct/pmlink/pre_related/?" + parseQueryString(qs);
    }

    window.netease_union_pre_related = function(username, pre_status) {
        union_pre_related(username, 0, pre_status);
        union_mmo_client_related(username);
        gs_pre_related(username, pre_status);
        gt_pre_related(username, pre_status);
    };

    (function() {
        var username = getQueryVariable("username");
        if (!username) return;

        union_pre_related(username, 1);
        union_mmo_client_related(username);
        gs_pre_related(username);
        gt_pre_related(username);
    
    })();
})();
