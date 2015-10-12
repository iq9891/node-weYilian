(function(){
    $(function(){
        
		var od = 'ontouchstart' in window ? 'tap':'click',
			iSex = 1,
			oSend = {};

		$('.btn').on(od, function(){
			oSend.name = $('#name').val();
			oSend.iSex = iSex;
			oSend.tel = $('#tel').val();
			oSend.codeId = $('#codeId').val();
			oSend.codeImg = $('#codeImg').val();
			console.log(oSend);
			//请求
			$.ajax({
				type:'POST',
				url: config.Rurl+'aordPost',
				data: $.param(oSend),
				success: function(data){
                    console.log(data.code);
				}, error: function(xhr, type){
					promptTips("请求提交失败，请重试");
				}
			});
		});

		//性别
		$('.sexBox').on(od, function(){
			$('.sexBox').removeClass('checked').find('.font-icon').html('x');
			$(this).addClass('checked').find('.font-icon').html('y');
			iSex = $(this).index()+1;
		});
        
    })
})();
