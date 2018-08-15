define(function(require){
	var Backbone = require('backbone');
	var link = require('app/utils/link');
	var drilldown = require('app/utils/drilldown');
	var V;
	var View = Backbone.View.extend({
		className:'view',
		template:_.template($('#tpl-block-view').html()),
		events:{
			'click .dashboard-panel-body':'onClick'
		},
		initialize:function(options){
			this.dashboard = options.dashboard;
			this.view = options.view;
			this.view && this.view.on('remove',function(){
				this.trigger('remove');
				this.remove();
			},this);
		},
		isLink:function(){
			return !!this.model.get('url');
		},
		render:function(){
			this.$el.append(this.template(this.model.toJSON()));
			if(this.isLink()){
				this.$('.dashboard-panel-body').addClass('view-link');
			}
			
			if(this.model.get('scroll')){
				this.$('.dashboard-panel-body').css('overflow',this.model.get('scroll'));
			}
			return this;
		},
		renderView:function(){
			var _this = this;
			this.model.get('view') && require([this.model.get('view')],function(view){
				typeof view === 'function' && view(_this.$('.dashboard-panel-body').get(0));
				typeof view === 'object' && _this.renderWidget(view);
			});
			return this;
		},
		renderWidget:function(config){
			var _this = this;
			_.extend(config, _.omit(this.model.toJSON(),['id','title','column']));
			require(['app/widget/' + config.widget], function(Widget){
				var widget = new Widget({
					model:new Backbone.Model(config),
					view:_this
				});
				widget.$el.appendTo(_this.$('.dashboard-panel-body'));
				widget.render();
			});
		},
		drilldown:function(url, params){
			drilldown(url, this.dashboard, V);
			return this;
		},
		onClick:function(e){
			if($(e.target).is('a')){
				return;
			}
			var url = this.model.get('url');
			this.isLink() && typeof url === 'string' && link(url);
			typeof url === 'object' && this.drilldown(url);
		}
	});
	V = View;
	return View;
});