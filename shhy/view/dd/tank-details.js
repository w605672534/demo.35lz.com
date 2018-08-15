define(function(require){
	return function(view){
		$view = $(view);
		$view.css('margin-right','10');
		$($('#tpl-tank-detail').html()).appendTo($view);
	}
});