define(function(require){
	return function(view){
		$view = $(view);
		$($('#tpl-welcome').html()).appendTo($view);
	}
});