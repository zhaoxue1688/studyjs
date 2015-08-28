$.fn.hightlight1 = function () {
	this.css('backgroundColor','#fffceb').css('color','green');
	return this;
};

$.fn.hightlight2 = function (options) {
    // 要考虑到各种情况:
    // options为undefined
    // options只有部分key
    var bgcolor = options && options.backgroundColor || '#fffceb';
    var color = options && options.color || '#d85030';
    this.css('backgroundColor', bgcolor).css('color', color);
    return this;
};