define(function(require, exports, module){
	var mode = module.config().mode;
	var Backbone = require('backbone');
	var Box = require('app/box');
	var Dataset = require('app/dataset');
	var Modal = require('app/utils/modal');
	var Dashboard = Backbone.View.extend({
		className:'row dashboard',
		colTpl:$('#tpl-layout-column').html(),
		initialize:function(options){
			this.datasets = {};
			this.setParams(options.params);
		},
		setParams:function(params){
			this.params = new Backbone.Model;
			_.each(this.model.get('params'),function(item, index){
				if(params && params[index]){
					this.params.set(item['name'], params[index]);
				}else{
					item.value && this.params.set(item['name'], item.value);
				}
			},this);
		},
		render:function(){
			if(!this.model.get('views').length){
				return this;
			}
			if(mode === 'modal'){
				var model = new Backbone.Model({
					title: this.model.get('name'),
					size:'modal-lg'
				});
				var modal = new Modal({
					model:model,
					content: this.el
				}).render();
				modal.$('.modal-body').css({'padding':'0 15px'});
				var _this = this;
				modal.$el.on('hidden.bs.modal', function (e) {
					_this.destory();
				  window.location.hash = '#welcome';
				});

				setTimeout(function(){
					_this.collection.each(_this.renderBox, _this);
				},150);
				
			}else{
				$('#db-container').append(this.el);
				this.collection.each(this.renderBox, this);
			}
			
			return this;
		},
		renderBox:function(model){
			this.layout(model.get('column'));
			var box = new Box({
				model:model,
				dashboard:this
			});
			box.render().$el.appendTo(this.$currentColumn);
			box.renderView();
		},
		layout:function(column){
			if(!this.$currentColumn || column){
				column = column ? parseInt(column) : 12;
				column = column < 1 || column > 12 ? 12 : column;
				this.$currentColumn = $(this.colTpl).addClass('col-sm-' + column).appendTo(this.$el);
			}
			return this;
		},
		destory:function(){
			this.trigger('remove');
		}
	});
	return Dashboard;
});