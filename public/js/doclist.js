(function(){
    $(function(){
        
		var od = 'ontouchstart' in window ? 'tap':'click';
		
		$('.yuyue').on(od, function(){
			window.location.href = '/adoc' + $(this).attr('_id');
		});
        
    })
})();
