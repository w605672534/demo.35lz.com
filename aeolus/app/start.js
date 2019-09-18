define(function(require, exports, module){
	var Backbone = require('backbone');
	var Router = require('app/router');
	var Modal = require('app/utils/modal');
	var screenfull = require('app/utils/fullscreen');
	var config = module.config();
	require('app/utils/cookie');
	var dashboardTheme = $.cookie('dashboard_theme');
	dashboardTheme = dashboardTheme ? dashboardTheme : 'default';
	$('#theme-link').attr('href','./css/theme/' + dashboardTheme + '.css');
	$('#dashboard-setting-btn').on('click',function(){
		var modal = new Modal({
			model:new Backbone.Model({title:'主题设置'}),
			content:$('#tpl-setting-box').html()
		});
		modal.render();
		modal.$('.setting-box>div').on('click',function(){
			var name = $(this).data('name');
			$.cookie('dashboard_theme', name, { expires: 30 });
			$('#theme-link').attr('href','./css/theme/' + name + '.css');
			$(document).trigger('switchTheme');
		});
	});

	$('#dashboard-refresh-btn').on('click',function(){
		window.location.reload();
	});

	var displayNav = function(e){
		if(e.pageY < 20){
			$('nav').fadeIn();
		};
	}

	$('#dashboard-fullscreen-btn').on('click',function(){
		$('nav').hide();
		$('body').css('padding-top',20);
		$(this).hide();
		$('#dashboard-exit-fullscreen-btn').show();
		$(document).on('mouseover', displayNav);
		$('nav').on('mouseleave',function(e){
			$('nav').fadeOut();
		});
	});

	$('#dashboard-exit-fullscreen-btn').on('click',function(){
	    $(document).off('mouseover', displayNav);
	    $('nav').off('mouseleave');
	    $('nav').show();
			$('body').css('padding-top',70);
	    $(this).hide();
	    $('#dashboard-fullscreen-btn').show();
	});

	if(config.refreshTime){
		setInterval(function(){
			window.location.reload();
		}, config.refreshTime * 60000);
	}

	var router = new Router();
	Backbone.history.start();
});