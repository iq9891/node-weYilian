(function(){
    $(function(){
        
		var od = 'ontouchstart' in window ? 'tap':'click';
		
		$('.btn').on(od, function(){
			window.location.href = '/aord' + $(this).attr('_id');
		});
        
    })
})();
