var youdao = window.youdao || {};
(function() {
    var a = document;
    youdao.script = a.createElement('script');
    youdao.script.type = 'text/javascript';
    youdao.script.async = true;
    if (a && a.location && a.location.protocol && "https:" == a.location.protocol.toString().toLowerCase()) {
        youdao.script.src = 'conversion.js'/*tpa=https://conv.youdao.com/pub/conversion.js*/;
    } else {
        youdao.script.src = 'conversion-1.js'/*tpa=http://conv.youdao.com/pub/conversion.js*/;
    }
    var s = a.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(youdao.script, s);
})(); 