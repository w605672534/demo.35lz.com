define(function(require, exports, module){
	var Backbone = require('backbone');
	var link = require('app/utils/link');
	var drilldown = require('app/utils/drilldown');
	var Modal = require('app/utils/modal');
	var V;
	var fixedHeader = module.config().fixedHeader;

	var View = Backbone.View.extend({
		className:'view',
		template:_.template($('#tpl-block-view').html()),
		events:{
			'click .dashboard-panel-body':'onClick',
			'click .view-tips':'onTips'
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
			if(this.model.get('title') === ''){
				this.$('.panel-heading').remove();
			}

			if(this.model.get('height')){
				this.$('.dashboard-panel-body').height(this.model.get('height'));
			}

			if(this.isLink()){
				this.$('.dashboard-panel-body').addClass('view-link');
			}
			
			if(this.model.get('scroll')){
				this.$('.dashboard-panel-body').css('overflow',this.model.get('scroll'));
			}

			if(this.model.get('tips')){
				this.$('.view-tips').show();
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
			var config = _.clone(config);
			_.extend(config, _.omit(this.model.toJSON(),['id', 'column', 'title']));
			require(['app/widget/' + config.widget], function(Widget){
				_this.widget = new Widget({
					model:new Backbone.Model(config),
					view:_this
				});
				_this.widget.$el.appendTo(_this.$('.dashboard-panel-body').empty());
				_this.widget.render();
				_this.model.get('display') && _this.model.get('display').apply(_this);
				setTimeout(function(){
					fixedHeader && _this.widget.copyHeader && _this.setBodyHeader();
				}, 300);
				_this.widget.copyHeader && $(window).resize(function(){
					fixedHeader && _this.setBodyHeader();
				});

				_this.widget.copyHeader && _this.widget.on('update', function(){
					fixedHeader && _this.setBodyHeader();
				});
			});
		},
		renderFooter:function(){

		},
		drilldown:function(url, params){
			drilldown(url, this.dashboard, V);
			return this;
		},
		onTips:function(){
			var modal = new Modal({
				model:new Backbone.Model({
					title:'视图说明'
				})
			});
			modal.render();
			$tips = $('<div>' + this.model.get('tips') + '</div>');
			modal.$('.modal-body').html($tips);
		},
		onClick:function(e){
			if($(e.target).is('a')){
				return;
			}
			var url = this.model.get('url');
			this.isLink() && typeof url === 'string' && link(url);
			typeof url === 'object' && this.drilldown(url);
		},
		setBodyHeader:function(){
			var _this = this;
			var $header = this.$('.block-view-header');
			$header.html(this.widget.copyHeader()).show();
			if(this.model.get('height')){
				this.$('.dashboard-panel-body').height(this.model.get('height') - $header.height());
			}
			return this;
		}
	});
	V = View;
	return View;
});