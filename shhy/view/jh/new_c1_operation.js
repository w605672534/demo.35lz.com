define(function(require){
	return function(view){
		$view = $(view);
		$($('#tpl-svg').html()).appendTo($view);
	}
});