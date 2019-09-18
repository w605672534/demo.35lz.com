define(function(require){
	var _ = require('underscore');
	var Backbone = require('backbone');
	var Control = Backbone.View.extend({
		initialize:function(options){

		},
		render:function(){
			return this;
		},
		change:function(value){
			if(value !== this.value){

			}
			return this;
		}
	});
	return Control;
});