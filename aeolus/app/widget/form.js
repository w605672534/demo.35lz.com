define(function(require){
	var _ = require('underscore');
	var Backbone = require('backbone');
	var Widget = require('app/widget');

	var Item = Backbone.View.extend({
		tagName:'',
		className:'',
		initialize:function(options){

		},
		render:function(){
			return this;
		}
	});

	var Form = Widget.extend({
		//tagName:'form',
		className:'',
		initialize:function(options){
			Widget.prototype.initialize.apply(this, arguments);
		},
		render:function(){
			Widget.prototype.render.apply(this, arguments);
			return this;
		}
	});
	return Form;
});