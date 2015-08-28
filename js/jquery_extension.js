$.fn.highlight = function (options) {
    // 合并默认值和用户设定值:
    var opts = $.extend({}, $.fn.highlight.defaults, options);
    this.css('background-Color', opts.backgroundColor).css('color', opts.color);
    return this;
};

// 设定背景色，字体颜色默认值:
$.fn.highlight.defaults = {
    color: '#d85030',
    backgroundColor: '#fff8de'
}

//==========================制作字体大小插件

$.fn.fontsize = function (options) {
    // 合并默认值和用户设定值:
    var opts = $.extend({}, $.fn.fontsize.defaults, options);
    this.css('font-size', opts.fontsize);
    return this;
};

// 设定字体大小默认值:
$.fn.fontsize.defaults = {
     fontsize: '20px'
}
