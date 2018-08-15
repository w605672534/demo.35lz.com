define(function(require){
	var Backbone = require('backbone');
	var Router = require('app/router');
	var Modal = require('app/utils/modal');
	var screenfull = require('app/utils/fullscreen');
	require('app/utils/cookie');
	var dashboardTheme = $.cookie('dashboard_theme');
	dashboardTheme = dashboardTheme ? dashboardTheme : 'default';
	$('#theme-link').attr('href','css/theme/' + dashboardTheme + '.css');
	$('#dashboard-setting-btn').on('click',function(){
		var modal = new Modal({
			model:new Backbone.Model({title:'主题设置'}),
			content:$('#tpl-setting-box').html()
		});
		modal.render();
		modal.$('.setting-box>div').on('click',function(){
			var name = $(this).data('name');
			$.cookie('dashboard_theme', name, { expires: 30 });
			$('#theme-link').attr('href','css/theme/' + name + '.css');
		});
	});

	$('#dashboard-refresh-btn').on('click',function(){
		window.location.reload();
	});

	if(screenfull.enabled){
    $('#dashboard-fullscreen-btn').show();
	}

	$('#dashboard-fullscreen-btn').on('click',function(){
		if(screenfull.enabled){
	    screenfull.request();
	    $(this).hide();
	    $('#dashboard-exit-fullscreen-btn').show();
		}
	});

	$('#dashboard-exit-fullscreen-btn').on('click',function(){
		if(screenfull.enabled){
	    screenfull.exit();
	    $(this).hide();
	    $('#dashboard-fullscreen-btn').show();
		}
	});
	var router = new Router();
	Backbone.history.start();
});