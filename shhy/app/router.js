define(function(require){
	var _ = require('underscore');
	var Backbone = require('backbone');
	var dashboards = {};
	var Dashboard = require('app/dashboard');
	var Router = Backbone.Router.extend({
	  routes: {
	    '*path' : 'dashboard',
	    '/fullscreen' : 'fullscreen'
	  },
	  dashboard: function(param) {
	  	var params = param ? param.split('/') : null;
	  	var name = params ? params.shift() : 'welcome';
	  	var config = 'dashboard/' + name;
	  	$active = $('#db-container>.active');

	  	$('a[href="#/' + name + '"]').parent()
	  	.addClass('active')
	  	.siblings('.active').removeClass('active');

	  	var showDashboard = function(dashboard){
	  		if(!$active.is(dashboard.$el)){
	  			dashboard.$el.addClass('active')//.fadeIn();
	  		}
	  	};

  		$active.removeClass('active').fadeOut().remove();
	  	require([config],function(dashboard){
  			dashboards[name] = new Dashboard({
  				model:new Backbone.Model(dashboard),
  				collection:new Backbone.Collection(dashboard.views),
  				params:params
  			}).render();
  			//dashboards[name].$el.hide();
  			showDashboard(dashboards[name]);
	  	});
	  },
	  fullscreen:function(){
	  	
	  }
	});

	return Router;
});