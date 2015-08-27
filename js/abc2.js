/*众筹页##*/
function the_raise(){
		var _this = this;
		//默认调用所有方法
		_this.the_raise_list = function(){/*接口调用*/
			$.ajax({
			type: "get",
			//data: params,
			url: "js/activeNoticeEditor.json",
			//url: url_host + "/admin/findActivityNoticeOne.action",
			dataType: "json",
				success: function(data) {
					console.log(data);
				}
			});
		};
		_this.the_raise_list();
}

$(function(){
	if ($('body').length > 0) {
        the_raise();
    }
});